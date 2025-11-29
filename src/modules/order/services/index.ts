import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import {
  AdminUpdateOrderByStatusInput,
  OrderModel,
  OrderStatus,
  OrderWhereInput,
  PaymentStatus,
  SignInStatus,
} from "../types";
import { Brackets, getManager, getRepository, In, Like } from "typeorm";
import { Order } from "../entity";
import { BaseOrderByInput, BaseStatus } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { Product } from "../../product";
import { ShopProduct } from "../../shopProduct";
import { OrderDetail } from "../../orderDetail";
import { Wallet, WalletService } from "../../wallet";
import { INotificationType, NotificationService } from "../../notification";
import { Customer } from "../../customer";
import { Shop } from "../../shop";
import { getRequestedFields } from "../../../utils/graphqlUtils";
import { GraphQLResolveInfo } from "graphql";
import pubsub from "../../../utils/pubsub";
import { Logistics } from "../../logistics";

export class OrderService {
  static counter: number = 0;

  // Helper method to parse sell_count strings like "3.8K+", "1.2M+", "500", etc.
  static parseSellCount(sellCount: string | number | null | undefined): number {
    if (!sellCount) return 0;

    // Convert to string and remove spaces, convert to uppercase
    const cleanValue = sellCount.toString().trim().toUpperCase();

    // Remove "+" if present
    const withoutPlus = cleanValue.replace("+", "");

    // Check if it's a simple number
    if (!isNaN(Number(withoutPlus))) {
      return Math.floor(Number(withoutPlus));
    }

    // Parse K (thousands)
    if (withoutPlus.includes("K")) {
      const num = parseFloat(withoutPlus.replace("K", ""));
      return Math.floor(num * 1000);
    }

    // Parse M (millions)
    if (withoutPlus.includes("M")) {
      const num = parseFloat(withoutPlus.replace("M", ""));
      return Math.floor(num * 1000000);
    }

    // If we can't parse it, return 0
    return 0;
  }

  static async countNewOrder({
    req,
    order_status,
  }: {
    req: Request;
    order_status: OrderStatus;
  }): Promise<Response<Order | null>> {
    try {
      const orderRepository = getRepository(Order);

      const queryBuilder = orderRepository.createQueryBuilder("order");

      queryBuilder.where("order.order_status = :orderStatus", {
        orderStatus: order_status,
      });

      let shopDataFromToken = new AuthMiddlewareService().verifyShopToken(req);
      if (shopDataFromToken?.id) {
        queryBuilder.andWhere("order.shop_id = :shopId", {
          shopId: shopDataFromToken?.id,
        });
      } else {
        const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
          req
        );
        if (!staffDataFromToken)
          return handleError(config.message.invalid_token, 404, null);
      }

      const total = await queryBuilder.getCount();

      return handleSuccessWithTotalData(null, total);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static generateUniqueTimestamp(): string {
    this.counter = (this.counter + 1) % 1000; // Reset counter after 1000
    return `${Date.now()}${String(this.counter).padStart(3, "0")}`; // Pad counter to 3 digits
  }

  static async createOrder({
    data,
    req,
  }: {
    data: OrderModel;
    req: Request;
  }): Promise<Response<Order[] | null>> {
    let orders: Order[] | null = [];

    try {
      const customerDataFromToken =
        new AuthMiddlewareService().verifyCustomerToken(req);
      if (!customerDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      if (!data?.order_details?.length) {
        return handleError(
          config.message.invalid_data,
          404,
          "Please select products then try again later!."
        );
      }

      orders = await this.createOrderFunc({
        customer_id: customerDataFromToken.id,
        data,
        isAdmin: false,
      });
      return handleSuccess(orders);
    } catch (error: any) {
      console.error("Error creating order with transaction:", error);
      console.error("Error creating order with transaction:", error?.message);
      if (error?.message.includes(config.message.balance_not_enough)) {
        console.error("Error creating order with transaction:", error?.message);
        return handleSuccess(orders, config.message.balance_not_enough);
      }

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminCreateOrderForCustomer({
    customer_id,
    data,
    req,
  }: {
    customer_id: string;
    data: OrderModel;
    req: Request;
  }): Promise<Response<Order[] | null>> {
    const orders: Order[] = [];

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      if (!data?.order_details?.length) {
        return handleError(
          config.message.invalid_data,
          404,
          "Please select products then try again later!."
        );
      }

      const resultOrders = await this.createOrderFunc({
        customer_id: customer_id,
        data,
        isAdmin: true,
      });
      return handleSuccess(resultOrders);
    } catch (error: any) {
      console.error("Error creating order with transaction:", error);
      if (error.message.includes(config.message.balance_not_enough)) {
        return handleSuccess(orders, config.message.balance_not_enough);
      }

      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async createOrderFunc({
    customer_id,
    data,
    isAdmin,
  }: {
    customer_id: string;
    data: OrderModel;
    isAdmin: boolean;
  }): Promise<Order[] | null> {
    const transactionManager = getManager();
    const shopProductRepository = getRepository(ShopProduct);
    const productRepository = getRepository(Product);
    const orderRepository = getRepository(Order);
    const orderDetailRepository = getRepository(OrderDetail);
    const customerRepository = getRepository(Customer);
    const walletRepository = getRepository(Wallet);
    const shopRepository = getRepository(Shop);
    const orders: Order[] = [];

    try {
      return await transactionManager.transaction(async (entityManager) => {
        let existingCustomerWallet = await walletRepository.findOneBy({
          customer_id: customer_id,
          is_active: true,
        });
        if (!existingCustomerWallet) {
          existingCustomerWallet = (await WalletService.createWallet({
            customer_id,
          } as any)) as any;

          if (!existingCustomerWallet)
            throw new Error("Customer's wallet not found.");
        }

        const productIds = data.order_details.map(
          ({ product_id }) => product_id
        );

        const selectedShopProductFields = [
          "shopProduct.id",
          "shopProduct.quantity",
          "shopProduct.status",
          "shopProduct.shop_id",
          "shopProduct.product_id",
        ];
        const selectedProductFields = [
          "product.id",
          "product.category_id",
          "product.name",
          "product.cover_image",
          "product.sku",
          "product.spu",
          "product.price",
          "product.discount",
        ];
        // Fetch shop products and system products in parallel
        const [shopProducts, systemProducts] = await Promise.all([
          shopProductRepository
            .createQueryBuilder("shopProduct")
            .leftJoinAndSelect("shopProduct.productData", "product")
            .select([...selectedShopProductFields, ...selectedProductFields])
            .where("shopProduct.id IN (:...product_ids)", {
              product_ids: productIds,
            })
            .andWhere("shopProduct.is_active = true")
            .andWhere("product.is_active = true")
            .getMany(),
          productRepository
            .createQueryBuilder("product")
            .select(selectedProductFields)
            .where("product.id IN (:...product_ids)", {
              product_ids: productIds,
            })
            .andWhere("product.is_active = true")
            .getMany(),
        ]);

        // Create a map for quick lookup
        const shopProductMap = new Map(shopProducts.map((sp) => [sp.id, sp]));
        const systemProductMap = new Map(systemProducts.map((p) => [p.id, p]));

        const groupedOrders: { [shop_id: string]: any } = {};

        // Group order details by shop_id and separate system products
        for (const product of data.order_details) {
          const shopProduct = shopProductMap.get(product.product_id);
          const systemProduct = systemProductMap.get(product.product_id);

          if (shopProduct) {
            const shopId = shopProduct.shop_id;
            const existingShop = await shopRepository.findOneBy({
              id: shopId,
              is_active: true,
            });

            if (!existingShop) {
              throw new Error("Shop not found.");
            }

            if (!groupedOrders[shopId]) {
              groupedOrders[shopId] = {
                order_details: [],
                total_price: 0,
                total_discount: 0,
                total_quantity: 0,
                profit: existingShop.profit,
              };
            }
            // const order = groupedOrders[shopId];
            groupedOrders[shopId].order_details.push({
              // id: shopProduct.id,
              product_id: shopProduct.product_id,
              quantity: product.quantity,
              price: shopProduct.productData.price,
              discount: shopProduct.productData.discount,
              sku: shopProduct.productData.sku,
              spu: shopProduct.productData.spu,
              product_name: shopProduct.productData.name,
              product_cover_image: shopProduct.productData.cover_image,
              category_id: shopProduct.productData.category_id,
              address_id: data.address_id,
              profit: existingShop.profit,
            });
            groupedOrders[shopId].total_quantity += product.quantity;
            groupedOrders[shopId].total_price +=
              product.quantity * shopProduct.productData.price;
            groupedOrders[shopId].total_discount +=
              product.quantity * shopProduct.productData.discount;
          } else if (systemProduct) {
            if (!groupedOrders["system"]) {
              groupedOrders["system"] = {
                order_details: [],
                total_price: 0,
                total_discount: 0,
                total_quantity: 0,
              };
            }
            // const order = groupedOrders["system"];
            groupedOrders["system"].order_details.push({
              // id: systemProduct.id,
              product_id: systemProduct.id,
              quantity: product.quantity,
              price: systemProduct.price,
              discount: systemProduct.discount,
              sku: systemProduct.sku,
              spu: systemProduct.spu,
              product_name: systemProduct.name,
              product_cover_image: systemProduct.cover_image,
              category_id: systemProduct.category_id,
              address_id: data.address_id,
            });
            groupedOrders["system"].total_quantity += product.quantity;
            groupedOrders["system"].total_price +=
              product.quantity * systemProduct.price;
            groupedOrders["system"].total_discount +=
              product.quantity * systemProduct.discount;
          }
        }

        const totalOrderPrice = Object.values(groupedOrders).reduce(
          (sum, order) => sum + order.total_price,
          0
        );

        const orderPromises = Object.entries(groupedOrders).map(
          async ([shop_id, orderData]) => {
            if (shop_id === "system") {
              const systemWallet = await entityManager
                .createQueryBuilder(Wallet, "wallet")
                .where("wallet.shop_id IS NULL")
                .andWhere("wallet.customer_id IS NULL")
                .andWhere("is_active = true")
                .getOne();

              if (!systemWallet) throw new Error("System wallet not found.");
              // systemWallet.total_frozen_balance +=
              //   orderData.total_price +
              //   (orderData.total_price * orderData.profit) / 100;
              await entityManager.save(Wallet, systemWallet);
            } else {
              let shopWallet = await entityManager.findOne(Wallet, {
                where: { shop_id, is_active: true },
              });
              if (!shopWallet) {
                const userIdField = { shop_id: shop_id, customer_id: null };

                shopWallet = (await WalletService.createWallet({
                  ...userIdField,
                } as any)) as any;

                if (!shopWallet) throw new Error("Shop wallet not found.");
              }
              // shopWallet.total_frozen_balance +=
              //   orderData.total_price +
              //   (orderData.total_price * orderData.profit) / 100;
              await entityManager.save(Wallet, shopWallet);
            }

            const order_no = this.generateUniqueTimestamp();
            const newOrder = orderRepository.create({
              total_quantity: orderData.total_quantity,
              total_discount: orderData.total_discount,
              total_price: orderData.total_price,
              total_products: orderData.order_details.length || 1,
              shop_id: shop_id === "system" ? null : shop_id,
              profit: orderData?.profit,
              order_no,
              customer_id: customer_id,
              status: BaseStatus.ACTIVE,
              created_by: customer_id,
              address_id: data.address_id,
              payment_slip: data.payment_slip,
              delivery_type: data.delivery_type,
              // logistics_id: data.logistics_id,
              order_status:
                !isAdmin &&
                  existingCustomerWallet.total_balance < totalOrderPrice
                  ? OrderStatus.FAILED
                  : OrderStatus.NO_PICKUP,
              payment_status:
                !isAdmin &&
                  existingCustomerWallet.total_balance < totalOrderPrice
                  ? PaymentStatus.FAILED
                  : PaymentStatus.COMPLETED,
            } as any);
            // console.log(data.logistics_id);
            console.log(newOrder);

            const savedOrder: any = await orderRepository.save(newOrder);
            const savedOrderDetails = await Promise.all(
              orderData.order_details.map(async (detail: any) => {
                if (shop_id === "system") {
                  // Get current product sell_count
                  const product = await entityManager.findOne(Product, {
                    where: { id: detail.product_id },
                    select: ["id", "sell_count"],
                  });

                  const currentSellCount = this.parseSellCount(
                    product?.sell_count || "0"
                  );
                  const newSellCount = currentSellCount + detail.quantity;

                  await entityManager
                    .createQueryBuilder()
                    .update(Product)
                    .set({
                      quantity: () => "quantity - :quantity",
                      sell_count: newSellCount.toString(),
                    })
                    .where("id = :id", {
                      id: detail.product_id,
                      quantity: detail.quantity,
                    })
                    .execute();
                } else {
                  // Update ShopProduct sell_count
                  const shopProduct = await entityManager.findOne(ShopProduct, {
                    where: {
                      product_id: detail.product_id,
                      shop_id: shop_id,
                    },
                    select: ["id", "sell_count"],
                  });

                  const currentShopSellCount = this.parseSellCount(
                    shopProduct?.sell_count || "0"
                  );
                  const newShopSellCount =
                    currentShopSellCount + detail.quantity;

                  await entityManager
                    .createQueryBuilder()
                    .update(ShopProduct)
                    .set({
                      quantity: () => "quantity - :quantity",
                      sell_count: newShopSellCount.toString(),
                    })
                    .where("product_id = :product_id AND shop_id = :shopId", {
                      product_id: detail.product_id,
                      shopId: shop_id,
                      quantity: detail.quantity,
                    })
                    .execute();

                  // Update Product sell_count
                  const product = await entityManager.findOne(Product, {
                    where: { id: detail.product_id },
                    select: ["id", "sell_count"],
                  });

                  const currentSellCount = this.parseSellCount(
                    product?.sell_count || "0"
                  );
                  const newSellCount = currentSellCount + detail.quantity;

                  await entityManager
                    .createQueryBuilder()
                    .update(Product)
                    .set({
                      quantity: () => "quantity - :quantity",
                      sell_count: newSellCount.toString(),
                    })
                    .where("id = :id", {
                      id: detail.product_id,
                      quantity: detail.quantity,
                    })
                    .execute();
                }

                const newOrderDetail = orderDetailRepository.create({
                  ...detail,
                  order_id: savedOrder.id,
                  address_id: data.address_id,
                  order_no: savedOrder.order_no,
                  shop_id: shop_id === "system" ? null : shop_id,
                  customer_id: customer_id,
                  delivery_type: data.delivery_type,
                  order_status:
                    !isAdmin &&
                      existingCustomerWallet.total_balance < totalOrderPrice
                      ? OrderStatus.FAILED
                      : OrderStatus.NO_PICKUP,
                  payment_status:
                    !isAdmin &&
                      existingCustomerWallet.total_balance < totalOrderPrice
                      ? PaymentStatus.FAILED
                      : PaymentStatus.COMPLETED,
                } as any);
                return orderDetailRepository.save(newOrderDetail);
              })
            );

            savedOrder.order_details = savedOrderDetails;

            orders.push(savedOrder);
          }
        );

        await Promise.all(orderPromises);

        if (!isAdmin) {
          if (existingCustomerWallet.total_balance < totalOrderPrice) {
            throw new Error(config.message.balance_not_enough);
          }

          existingCustomerWallet.total_balance -= totalOrderPrice;
          await entityManager.save(Wallet, existingCustomerWallet);
        }

        try {
          if (orders?.length) {
            const customerData = await customerRepository.findOneBy({
              id: customer_id,
            });

            orders.forEach(async (order) => {
              const details = {
                id: order.id,
                order_no: order.order_no,
                shop_id: order.shop_id,
                customer_id: order.customer_id,
                order_status: order.order_status,
              };

              const _data = {
                title: "New Order Received!",
                description: `${customerData?.firstName} ${customerData?.lastName || ""
                  } has placed a new order from your shop. Please review and fulfill it promptly.`,
                shop_id: order.shop_id,
                reference_id: order.id,
                data: details,
                notification_type: INotificationType.ORDER,
              } as any;
              await NotificationService.createNotification({ data: _data });
            });
          }
        } catch (error) {
          console.error("Create notification error: ", { error });
        }
        return orders;
      });
    } catch (error: any) {
      console.error({ error });
      throw new Error(error?.message);
    }
  }

  // static async payOrderFailed({
  //   id,
  //   req,
  // }: {
  //   id: string;
  //   req: Request;
  // }): Promise<Response<Order | null>> {
  //   const orderRepository = getRepository(Order);
  //   const orderDetailRepository = getRepository(OrderDetail);
  //   const walletRepository = getRepository(Wallet);
  //   const customerRepository = getRepository(Customer);
  //   const transactionManager = getManager();

  //   try {
  //     const customerDataFromToken =
  //       new AuthMiddlewareService().verifyCustomerToken(req);
  //     if (!customerDataFromToken)
  //       return handleError(config.message.invalid_token, 404, null);

  //     const existOrder = await orderRepository.findOne({
  //       where: {
  //         id: id,
  //         is_active: true,
  //         customer_id: customerDataFromToken.id,
  //         order_status: OrderStatus.FAILED,
  //         payment_status: PaymentStatus.FAILED,
  //       },
  //     });

  //     if (!existOrder) {
  //       return handleError("Order not found", 404, null);
  //     }

  //     const orderDetails = await orderDetailRepository.find({
  //       where: {
  //         order_id: id,
  //         is_active: true,
  //         customer_id: customerDataFromToken.id,
  //         order_status: OrderStatus.FAILED,
  //         payment_status: PaymentStatus.FAILED,
  //       },
  //     });

  //     if (!orderDetails.length) {
  //       return handleError("Order details not found", 404, null);
  //     }

  //     const existingCustomerWallet = await walletRepository.findOne({
  //       where: { customer_id: customerDataFromToken.id, is_active: true },
  //     });

  //     if (!existingCustomerWallet) {
  //       throw new Error("Customer's wallet not found.");
  //     }

  //     if (existingCustomerWallet.total_balance < existOrder.total_price) {
  //       throw new Error("Insufficient balance. Please recharge and try again.");
  //     }

  //     return await transactionManager.transaction(async (entityManager) => {
  //       // Update order status
  //       existOrder.order_status = OrderStatus.NO_PICKUP;
  //       existOrder.payment_status = PaymentStatus.COMPLETED;
  //       await entityManager.save(Order, existOrder);

  //       // Update order details and adjust product quantities
  //       const updatePromises = orderDetails.map(async (orderDetail) => {
  //         if (!orderDetail.shop_id) {
  //           await entityManager
  //             .createQueryBuilder()
  //             .update(Product)
  //             .set({
  //               quantity: () => "quantity - :quantity",
  //               sell_count: () => "sell_count + :sell_count",
  //             })
  //             .where("id = :id", {
  //               id: orderDetail.product_id,
  //               quantity: orderDetail.quantity,
  //               sell_count: orderDetail.quantity,
  //             })
  //             .execute();
  //         } else {
  //           await entityManager
  //             .createQueryBuilder()
  //             .update(ShopProduct)
  //             .set({
  //               quantity: () => "quantity - :quantity",
  //               sell_count: () => "sell_count + :sell_count",
  //             })
  //             .where("product_id = :product_id AND shop_id = :shopId", {
  //               product_id: orderDetail.product_id,
  //               shopId: orderDetail.shop_id,
  //               quantity: orderDetail.quantity,
  //               sell_count: orderDetail.quantity,
  //             })
  //             .execute();
  //           await entityManager
  //             .createQueryBuilder()
  //             .update(Product)
  //             .set({
  //               quantity: () => "quantity - :quantity",
  //               sell_count: () => "sell_count + :sell_count",
  //             })
  //             .where("id = :id", {
  //               id: orderDetail.product_id,
  //               quantity: orderDetail.quantity,
  //               sell_count: orderDetail.quantity,
  //             })
  //             .execute();
  //         }

  //         orderDetail.order_status = OrderStatus.NO_PICKUP;
  //         orderDetail.payment_status = PaymentStatus.COMPLETED;
  //         return orderDetail;
  //       });

  //       await Promise.all(updatePromises);
  //       await entityManager.save(OrderDetail, orderDetails);

  //       if (!existOrder.shop_id) {
  //         const systemWallet = await entityManager
  //           .createQueryBuilder(Wallet, "wallet")
  //           .where("wallet.shop_id IS NULL")
  //           .andWhere("wallet.customer_id IS NULL")
  //           .andWhere("is_active = true")
  //           .getOne();

  //         if (!systemWallet) throw new Error("System wallet not found.");
  //         // systemWallet.total_frozen_balance +=
  //         //   existOrder.total_price +
  //         //   (existOrder.total_price * existOrder.profit) / 100;
  //         await entityManager.save(Wallet, systemWallet);
  //       } else {
  //         const shopWallet = await entityManager.findOne(Wallet, {
  //           where: { shop_id: existOrder.shop_id, is_active: true },
  //         });
  //         if (!shopWallet) throw new Error("Shop wallet not found.");
  //         // shopWallet.total_frozen_balance +=
  //         //   existOrder.total_price +
  //         //   (existOrder.total_price * existOrder.profit) / 100;
  //         await entityManager.save(Wallet, shopWallet);
  //       }

  //       existingCustomerWallet.total_balance -= existOrder.total_price;
  //       await entityManager.save(Wallet, existingCustomerWallet);

  //       try {
  //         const customerData = await customerRepository.findOneBy({
  //           id: customerDataFromToken.id,
  //         });

  //         const details = {
  //           id: existOrder.id,
  //           order_no: existOrder.order_no,
  //           shop_id: existOrder.shop_id,
  //           customer_id: existOrder.customer_id,
  //           order_status: existOrder.order_status,
  //         };

  //         const _data = {
  //           title: "New Order Received!",
  //           description: `${customerData?.firstName} ${
  //             customerData?.lastName || ""
  //           } has placed a new order from your shop. Please review and fulfill it promptly.`,
  //           shop_id: existOrder.shop_id,
  //           reference_id: existOrder.id,
  //           data: details,
  //           notification_type: INotificationType.ORDER,
  //         } as any;
  //         await NotificationService.createNotification({ data: _data });
  //       } catch (error) {
  //         console.error("Error to create notification::", { error });
  //       }

  //       return handleSuccess({
  //         ...existOrder,
  //         order_details: updatePromises,
  //       });
  //     });
  //   } catch (error: any) {
  //     console.error("Error in payOrderFailed:", error);
  //     return handleError(
  //       config.message.internal_server_error,
  //       500,
  //       error.message
  //     );
  //   }
  // }

  static async payOrderFailed({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Order | null>> {
    const orderRepository = getRepository(Order);
    const orderDetailRepository = getRepository(OrderDetail);
    const walletRepository = getRepository(Wallet);
    const customerRepository = getRepository(Customer);
    const transactionManager = getManager();

    try {
      const customerDataFromToken =
        new AuthMiddlewareService().verifyCustomerToken(req);
      if (!customerDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const existOrder = await orderRepository.findOne({
        where: {
          id: id,
          is_active: true,
          customer_id: customerDataFromToken.id,
          order_status: OrderStatus.FAILED,
          payment_status: PaymentStatus.FAILED,
        },
      });

      if (!existOrder) {
        return handleError("Order not found", 404, null);
      }

      const orderDetails = await orderDetailRepository.find({
        where: {
          order_id: id,
          is_active: true,
          customer_id: customerDataFromToken.id,
          order_status: OrderStatus.FAILED,
          payment_status: PaymentStatus.FAILED,
        },
      });

      if (!orderDetails.length) {
        return handleError("Order details not found", 404, null);
      }

      const existingCustomerWallet = await walletRepository.findOne({
        where: { customer_id: customerDataFromToken.id, is_active: true },
      });

      if (!existingCustomerWallet) {
        throw new Error("Customer's wallet not found.");
      }

      if (existingCustomerWallet.total_balance < existOrder.total_price) {
        throw new Error("Insufficient balance. Please recharge and try again.");
      }

      return await transactionManager.transaction(async (entityManager) => {
        // Update order status
        existOrder.order_status = OrderStatus.NO_PICKUP;
        existOrder.payment_status = PaymentStatus.COMPLETED;
        await entityManager.save(Order, existOrder);

        // Update order details and adjust product quantities
        // const updatePromises = orderDetails.map(async (orderDetail) => {
        //   if (!orderDetail.shop_id) {
        //     await entityManager
        //       .createQueryBuilder()
        //       .update(Product)
        //       .set({
        //         quantity: () => "quantity - :quantity",
        //         sell_count: () => "sell_count + :sell_count",
        //       })
        //       .where("id = :id", {
        //         id: orderDetail.product_id,
        //         quantity: orderDetail.quantity,
        //         sell_count: orderDetail.quantity,
        //       })
        //       .execute();
        //   } else {
        //     await entityManager
        //       .createQueryBuilder()
        //       .update(ShopProduct)
        //       .set({
        //         quantity: () => "quantity - :quantity",
        //         sell_count: () => "sell_count + :sell_count",
        //       })
        //       .where("product_id = :product_id AND shop_id = :shopId", {
        //         product_id: orderDetail.product_id,
        //         shopId: orderDetail.shop_id,
        //         quantity: orderDetail.quantity,
        //         sell_count: orderDetail.quantity,
        //       })
        //       .execute();
        //     await entityManager
        //       .createQueryBuilder()
        //       .update(Product)
        //       .set({
        //         quantity: () => "quantity - :quantity",
        //         sell_count: () => "sell_count + :sell_count",
        //       })
        //       .where("id = :id", {
        //         id: orderDetail.product_id,
        //         quantity: orderDetail.quantity,
        //         sell_count: orderDetail.quantity,
        //       })
        //       .execute();
        //   }

        //   orderDetail.order_status = OrderStatus.NO_PICKUP;
        //   orderDetail.payment_status = PaymentStatus.COMPLETED;
        //   return orderDetail;
        // });
        const updatedOrderDetails = await Promise.all(
          orderDetails.map(async (orderDetail) => {
            if (!orderDetail.shop_id) {
              // Get current product sell_count
              const product = await entityManager.findOne(Product, {
                where: { id: orderDetail.product_id },
                select: ["id", "sell_count"],
              });

              const currentSellCount = this.parseSellCount(
                product?.sell_count || 0
              );
              const newSellCount = currentSellCount + orderDetail.quantity;

              await entityManager
                .createQueryBuilder()
                .update(Product)
                .set({
                  quantity: () => "quantity - :quantity",
                  sell_count: newSellCount.toString(),
                })
                .where("id = :id", {
                  id: orderDetail.product_id,
                  quantity: orderDetail.quantity,
                })
                .execute();
            } else {
              // Update ShopProduct sell_count
              const shopProduct = await entityManager.findOne(ShopProduct, {
                where: {
                  product_id: orderDetail.product_id,
                  shop_id: orderDetail.shop_id,
                },
                select: ["id", "sell_count"],
              });

              const currentShopSellCount = this.parseSellCount(
                shopProduct?.sell_count || 0
              );
              const newShopSellCount =
                currentShopSellCount + orderDetail.quantity;

              await entityManager
                .createQueryBuilder()
                .update(ShopProduct)
                .set({
                  quantity: () => "quantity - :quantity",
                  sell_count: newShopSellCount.toString(),
                })
                .where("product_id = :product_id AND shop_id = :shopId", {
                  product_id: orderDetail.product_id,
                  shopId: orderDetail.shop_id,
                  quantity: orderDetail.quantity,
                })
                .execute();

              // Update Product sell_count
              const product = await entityManager.findOne(Product, {
                where: { id: orderDetail.product_id },
                select: ["id", "sell_count"],
              });

              const currentSellCount = this.parseSellCount(
                product?.sell_count || 0
              );
              const newSellCount = currentSellCount + orderDetail.quantity;

              await entityManager
                .createQueryBuilder()
                .update(Product)
                .set({
                  quantity: () => "quantity - :quantity",
                  sell_count: newSellCount.toString(),
                })
                .where("id = :id", {
                  id: orderDetail.product_id,
                  quantity: orderDetail.quantity,
                })
                .execute();
            }

            orderDetail.order_status = OrderStatus.NO_PICKUP;
            orderDetail.payment_status = PaymentStatus.COMPLETED;
            return orderDetail;
          })
        );
        // await Promise.all(updatePromises);
        await entityManager.save(OrderDetail, orderDetails);

        if (!existOrder.shop_id) {
          const systemWallet = await entityManager
            .createQueryBuilder(Wallet, "wallet")
            .where("wallet.shop_id IS NULL")
            .andWhere("wallet.customer_id IS NULL")
            .andWhere("is_active = true")
            .getOne();

          if (!systemWallet) throw new Error("System wallet not found.");
          // systemWallet.total_frozen_balance +=
          //   existOrder.total_price +
          //   (existOrder.total_price * existOrder.profit) / 100;
          await entityManager.save(Wallet, systemWallet);
        } else {
          const shopWallet = await entityManager.findOne(Wallet, {
            where: { shop_id: existOrder.shop_id, is_active: true },
          });
          if (!shopWallet) throw new Error("Shop wallet not found.");
          // shopWallet.total_frozen_balance +=
          //   existOrder.total_price +
          //   (existOrder.total_price * existOrder.profit) / 100;
          await entityManager.save(Wallet, shopWallet);
        }

        existingCustomerWallet.total_balance -= existOrder.total_price;
        await entityManager.save(Wallet, existingCustomerWallet);

        try {
          const customerData = await customerRepository.findOneBy({
            id: customerDataFromToken.id,
          });

          const details = {
            id: existOrder.id,
            order_no: existOrder.order_no,
            shop_id: existOrder.shop_id,
            customer_id: existOrder.customer_id,
            order_status: existOrder.order_status,
          };

          const _data = {
            title: "New Order Received!",
            description: `${customerData?.firstName} ${customerData?.lastName || ""
              } has placed a new order from your shop. Please review and fulfill it promptly.`,
            shop_id: existOrder.shop_id,
            reference_id: existOrder.id,
            data: details,
            notification_type: INotificationType.ORDER,
          } as any;
          await NotificationService.createNotification({ data: _data });
        } catch (error) {
          console.error("Error to create notification::", { error });
        }

        return handleSuccess({
          ...existOrder,
          order_details: updatedOrderDetails,
        });
      });
    } catch (error: any) {
      console.error("Error in payOrderFailed:", error);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async cancelOrderFailed({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Order | null>> {
    const orderRepository = getRepository(Order);
    const transactionManager = getManager();

    try {
      const customerDataFromToken =
        new AuthMiddlewareService().verifyCustomerToken(req);
      if (!customerDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const existOrder = await orderRepository.findOne({
        where: {
          id: id,
          is_active: true,
          customer_id: customerDataFromToken.id,
          order_status: OrderStatus.FAILED,
          payment_status: PaymentStatus.FAILED,
        },
      });

      if (!existOrder) {
        return handleError("Order not found", 404, null);
      }

      return await transactionManager.transaction(async (entityManager) => {
        // Update order status
        existOrder.order_status = OrderStatus.CANCELLED;
        existOrder.payment_status = PaymentStatus.CANCELLED;
        existOrder.sign_in_status = SignInStatus.CANCELLED;
        existOrder.canelled_by_customer = customerDataFromToken.id;

        await entityManager.save(Order, existOrder);

        await entityManager.update(
          OrderDetail,
          { order_id: existOrder.id }, // WHERE condition
          {
            order_status: OrderStatus.CANCELLED,
            payment_status: PaymentStatus.CANCELLED,
            sign_in_status: SignInStatus.CANCELLED,
            canelled_by_customer: customerDataFromToken.id,
          } // Update values
        );

        return handleSuccess({ ...existOrder });
      });
    } catch (error: any) {
      console.error("Error in payOrderFailed:", error);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopConfirmOrder({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Order | null>> {
    const orderRepository = getRepository(Order);
    const walletRepository = getRepository(Wallet);
    const transactionManager = getManager();

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );
      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const existOrder = await orderRepository.findOne({
        where: {
          id: id,
          is_active: true,
          shop_id: shopDataFromToken.id,
          order_status: OrderStatus.NO_PICKUP,
          payment_status: PaymentStatus.COMPLETED,
        },
      });

      if (!existOrder) {
        return handleError("Order not found", 404, null);
      }

      const existingWallet = await walletRepository.findOne({
        where: { shop_id: shopDataFromToken.id, is_active: true },
      });

      if (!existingWallet) {
        return handleError(config.message.wallet_not_found, 404, null);
      }
      if (
        existingWallet?.total_withdraw_able_balance < existOrder?.total_price
      ) {
        return handleError(config.message.balance_not_enough, 402, null);
      }

      return await transactionManager.transaction(async (entityManager) => {
        // Update order status
        existOrder.order_status = OrderStatus.PROCESSING;
        existOrder.sign_in_status = SignInStatus.PACKING;

        await entityManager.save(Order, existOrder);

        await entityManager.update(
          OrderDetail,
          { order_id: existOrder.id }, // WHERE condition
          {
            order_status: OrderStatus.PROCESSING,
            sign_in_status: SignInStatus.PACKING,
          } // Update values
        );

        // shopWallet.total_frozen_balance +=
        // orderData.total_price +
        // (orderData.total_price * orderData.profit) / 100;

        await entityManager
          .createQueryBuilder()
          .update(Wallet)
          .set({
            total_withdraw_able_balance: () =>
              "total_withdraw_able_balance - :total_withdraw_able_balance",
            total_frozen_balance: () =>
              "total_frozen_balance + :total_frozen_balance",
          })
          .where("shop_id = :shop_id", {
            shop_id: existOrder.shop_id,
            total_withdraw_able_balance:
              (existOrder?.total_price * (100 - Number(existOrder.profit))) /
              100,
            total_frozen_balance: existOrder?.total_price,
            // total_frozen_balance:
            //   (existOrder?.total_price * (100 - Number(existOrder.profit))) /
            //   100,
            // total_frozen_balance:
            //   (existOrder?.total_price * existOrder.profit) / 100 +
            //   existOrder?.total_price,
          })
          .execute();

        // await entityManager.increment(
        //   Wallet,
        //   {
        //     shop_id: shopDataFromToken.id,
        //     is_active: true,
        //   },
        //   "total_withdraw_able_balance",
        //   -existOrder?.total_price || 0
        //   // "total_balance",
        //   // -existOrder?.total_price || 0
        // );

        try {
          // Publish to:
          // 1. Global channel (optional, for admin dashboards)
          pubsub.publish("UPDATE_ORDER_STATUS_SBUSCRIBE", {
            subscribeUpdateOrderStatus: handleSuccess(
              {
                order_status: OrderStatus.PROCESSING,
                sign_in_status: SignInStatus.PACKING,
              },
              "success"
            ),
          });
        } catch (error) { }

        return handleSuccess({
          ...existOrder,
        });
      });
    } catch (error: any) {
      console.error("Error in payOrderFailed:", error);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopCancelOrder({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Order | null>> {
    const orderRepository = getRepository(Order);
    const orderDetailsRepository = getRepository(OrderDetail);
    const transactionManager = getManager();

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );
      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const existOrder = await orderRepository.findOne({
        where: {
          id: id,
          is_active: true,
          shop_id: shopDataFromToken.id,
          order_status: OrderStatus.NO_PICKUP,
          payment_status: PaymentStatus.COMPLETED,
        },
      });

      if (!existOrder) {
        return handleError("Order not found", 404, null);
      }

      return await transactionManager.transaction(async (entityManager) => {
        // Update order status
        existOrder.order_status = OrderStatus.CANCELLED;
        existOrder.canelled_by_shop = shopDataFromToken.id;

        await entityManager.save(Order, existOrder);

        await entityManager.update(
          OrderDetail,
          { order_id: existOrder.id }, // WHERE condition
          {
            order_status: OrderStatus.CANCELLED,
            canelled_by_shop: shopDataFromToken.id,
          } // Update values
        );

        const orderDetails = await orderDetailsRepository.findBy({
          order_id: existOrder.id,
        });

        const updatePromises = orderDetails.map(async (orderDetail) => {
          await entityManager.increment(
            ShopProduct,
            {
              shop_id: orderDetail.shop_id,
              product_id: orderDetail.product_id,
              is_active: true,
            },
            "quantity",
            orderDetail.quantity
          );
        });

        await Promise.all(updatePromises);

        return handleSuccess({ ...existOrder });
      });
    } catch (error: any) {
      console.error("Error in payOrderFailed:", error);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminUpdateOrderWithStatus({
    data,
    req,
  }: {
    data: AdminUpdateOrderByStatusInput;
    req: Request;
  }): Promise<Response<Order[] | null>> {
    const orderRepository = getRepository(Order);
    const transactionManager = getManager();

    try {
      // Verify staff token
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken) {
        return handleError(config.message.invalid_token, 404, null);
      }

      const orderIds = data.ids;
      // Check if orders exist and are eligible for update
      let existOrders = await orderRepository
        .createQueryBuilder("order")
        .where("order.id IN (:...ids)", { ids: orderIds }) // Use :...ids for array
        .andWhere("order.is_active = :isActive", { isActive: true })
        .andWhere("order.order_status NOT IN (:...orderStatus)", {
          orderStatus: [
            OrderStatus.SUCCESS,
            OrderStatus.FAILED,
            OrderStatus.CANCELLED,
          ],
        })
        .getMany();

      if (!existOrders?.length) {
        return handleError("Order not found", 404, null);
      }

      // Prevent updating the ID
      if (data.ids) delete (data as Partial<AdminUpdateOrderByStatusInput>).ids;

      existOrders = existOrders.map((order) => {
        return { ...order, ...data };
      });

      // Start a transaction
      return await transactionManager.transaction(async (entityManager) => {
        await entityManager.update(Order, { id: In(orderIds) }, { ...data });

        // Use Promise.all to parallelize updates
        await Promise.all(
          existOrders.map(async (existOrder) => {
            // Update order status and set updated_by_admin
            existOrder.updated_by_admin = staffDataFromToken.id;

            // Update related order details
            await entityManager.update(
              OrderDetail,
              { order_id: existOrder.id }, // WHERE condition
              {
                ...data,
                updated_by_admin: staffDataFromToken.id,
              } // Update values
            );

            // If the order status is SUCCESS, update the shop's wallet balance
            if (
              data?.order_status === OrderStatus.SUCCESS &&
              existOrder.shop_id
            ) {
              await entityManager
                .createQueryBuilder()
                .update(Wallet)
                .set({
                  total_balance: () => "total_balance + :total_balance",
                  total_withdraw_able_balance: () =>
                    "total_withdraw_able_balance + :total_withdraw_able_balance",
                  total_frozen_balance: () =>
                    "total_frozen_balance - :total_frozen_balance",
                })
                .where("shop_id = :shop_id", {
                  shop_id: existOrder.shop_id,
                  total_balance:
                    (existOrder.total_price * existOrder.profit) / 100,
                  // total_balance:
                  //   (existOrder.total_price * existOrder.profit) / 100 +
                  //   existOrder?.total_price,
                  total_withdraw_able_balance: existOrder?.total_price,
                  // total_withdraw_able_balance:
                  //   (existOrder.total_price * existOrder.profit) / 100 +
                  //   existOrder?.total_price,
                  total_frozen_balance: existOrder?.total_price,
                  // (existOrder?.total_price *
                  //   (100 - Number(existOrder.profit))) /
                  // 100,
                  // total_frozen_balance:
                  //   (existOrder.total_price * existOrder.profit) / 100 +
                  //   existOrder?.total_price,
                })
                .execute();

              try {
                // Publish to:
                // 1. Shop-specific channel
                pubsub.publish(
                  `UPDATE_ORDER_STATUS_SBUSCRIBE_${existOrder.shop_id}`,
                  {
                    subscribeUpdateOrderStatus: handleSuccess({
                      ...existOrders,
                      ...data,
                    }),
                  }
                );
                // 2. Global channel (optional, for admin dashboards)
                pubsub.publish("UPDATE_ORDER_STATUS_SBUSCRIBE", {
                  subscribeUpdateOrderStatus: handleSuccess({
                    ...existOrders,
                    ...data,
                  }),
                });
              } catch (error) { }
            }
          })
        );

        // Return success response
        return handleSuccess(existOrders);
      });
    } catch (error: any) {
      console.error("Error in adminUpdateOrderWithStatus:", error);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async buildOrderQuery({
    where,
    page,
    limit,
    sortedBy,
    req,
    userType,
    info,
  }: {
    where: Partial<OrderWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
    userType: "shop" | "customer" | "admin";
    info: GraphQLResolveInfo;
  }): Promise<Response<Order[] | null>> {
    const orderRepository = getRepository(Order);

    try {
      // Build the base query
      const queryBuilder = orderRepository.createQueryBuilder("order");

      // Verify token based on user type
      let userDataFromToken;
      let selectFields;

      switch (userType) {
        case "shop":
          userDataFromToken = new AuthMiddlewareService().verifyShopToken(req);
          selectFields = getRequestedFields(info, "shopGetOrders.data");
          // Add LEFT JOIN with Product
          queryBuilder.leftJoinAndSelect("order.customerData", "customer");
          queryBuilder.leftJoinAndSelect("order.shop", "shop");
          queryBuilder.leftJoinAndSelect("order.logistics", "logistics");

          if (selectFields?.length) {
            const fields = selectFields
              .filter((field) => field != "customerData")
              .filter((field) => field != "shop")
              .filter((field) => field != "order_details")
              .map((field) => `order.${field}`);
            queryBuilder.select([
              // Fields from shopProduct
              "customer.id",
              "customer.firstName",
              "customer.lastName",
              "customer.phone_number",

              // Fields from shop
              "shop.id",
              "shop.store_name",
              "shop.fullname",
              "shop.phone_number",
              "shop.email",

              // Fields from Logistics
              "logistics.id",
              "logistics.logo",
              "logistics.company_name",
              "logistics.cost",
              "logistics.transport_modes",

              // Order fields
              ...fields,
            ]);
          }
          break;
        case "customer":
          userDataFromToken = new AuthMiddlewareService().verifyCustomerToken(
            req
          );
          selectFields = getRequestedFields(info, "customerGetOrders.data");
          queryBuilder.leftJoinAndSelect("order.logistics", "logistics");

          if (selectFields?.length) {
            const fields = selectFields
              .filter((field) => field !== "customerData")
              .filter((field) => field !== "logistics")
              .filter((field) => field !== "order_details")
              .map((field) => `order.${field}`);

            queryBuilder.select([
              "logistics.id",
              "logistics.logo",
              "logistics.company_name",
              "logistics.cost",
              "logistics.transport_modes",
              ...fields,
            ]);
          }

          break;
        case "admin":
          userDataFromToken = new AuthMiddlewareService().verifyStaffToken(req);
          selectFields = getRequestedFields(info, "getOrders.data");

          // Add LEFT JOIN with Product
          queryBuilder.leftJoinAndSelect("order.customerData", "customer");
          queryBuilder.leftJoinAndSelect("order.shop", "shop");
          queryBuilder.leftJoinAndSelect("order.logistics", "logistics");
          if (selectFields?.length) {
            const fields = selectFields
              .filter((field: string) => field != "customerData")
              .filter((field: string) => field != "shop")
              .filter((field: string) => field != "order_details")
              .map((field: string) => `order.${field}`);
            queryBuilder.select([
              // Fields from customer
              "customer.id",
              "customer.firstName",
              "customer.lastName",
              "customer.phone_number",

              // Fields from shop
              "shop.id",
              "shop.store_name",
              "shop.fullname",
              "shop.phone_number",
              "shop.email",

              "logistics.id",
              "logistics.logo",
              "logistics.company_name",
              "logistics.cost",
              "logistics.transport_modes",
              // Order fields
              ...fields,
            ]);
          }
          break;
        default:
          return handleError(config.message.invalid_token, 404, null);
      }

      if (!userDataFromToken) {
        return handleError(config.message.invalid_token, 404, null);
      }

      queryBuilder.where({ is_active: true });

      // Add user-specific conditions
      if (userType === "shop") {
        queryBuilder.andWhere({ shop_id: userDataFromToken.id });
      } else if (userType === "customer") {
        queryBuilder.andWhere({ customer_id: userDataFromToken.id });
      }

      // Add filters
      if (where?.order_no) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("order.order_no ILIKE :order_no", {
              order_no: `%${where.order_no}%`,
            });
          })
        );
      }

      if (where?.keyword) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("order.order_no ILIKE :order_no", {
              order_no: `%${where.keyword}%`,
            })
              .orWhere("customer.firstName ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("customer.lastName ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              })
              .orWhere("customer.phone_number ILIKE :keyword", {
                keyword: `%${where.keyword}%`,
              });
          })
        );
      }
      if (where?.order_status) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("order.order_status = :order_status", {
              order_status: `${where.order_status}`,
            });
          })
        );
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(order.created_at) BETWEEN :startDate AND :endDate",
          {
            startDate: where.createdAtBetween.startDate,
            endDate: where.createdAtBetween.endDate,
          }
        );
      }
      // Add pagination and sorting
      const [orderField, orderDirection] = this.order(sortedBy);

      // Ensure the order field is selected if we have custom select
      if (selectFields?.length) {
        const orderFieldName = orderField.replace("order.", "");
        if (!selectFields.includes(orderFieldName)) {
          queryBuilder.addSelect(`order.${orderFieldName}`);
        }
      }

      queryBuilder
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy(orderField, orderDirection);

      // Execute the query
      const [orders, total] = await queryBuilder.getManyAndCount();

      // Manually load order_details if requested
      if (selectFields?.includes("order_details") && orders.length > 0) {
        const orderDetailRepository = getRepository(OrderDetail);
        const orderIds = orders.map((order) => order.id);

        const orderDetails = await orderDetailRepository.find({
          where: {
            order_id: In(orderIds),
            is_active: true,
          },
          select: [
            "id",
            "product_id",
            "shop_id",
            "quantity",
            "price",
            "discount",
            "order_id",
            "order_no",
            "address_id",
            "order_status",
            "payment_status",
          ],
        });

        // Group order_details by order_id
        const orderDetailsMap = orderDetails.reduce((acc, detail) => {
          if (!acc[detail.order_id]) {
            acc[detail.order_id] = [];
          }
          acc[detail.order_id].push(detail);
          return acc;
        }, {} as Record<string, any[]>);

        // Attach order_details to each order
        orders.forEach((order) => {
          (order as any).order_details = orderDetailsMap[order.id] || [];
        });
      }

      return handleSuccessWithTotalData(orders, total);
    } catch (error: any) {
      console.error(`Error in ${userType}GetOrders:`, error);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  // Shop-specific orders
  static async shopGetOrders({
    where,
    page,
    limit,
    sortedBy,
    req,
    info,
  }: {
    where: Partial<OrderWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
    info: GraphQLResolveInfo;
  }): Promise<Response<Order[] | null>> {
    return this.buildOrderQuery({
      where,
      page,
      limit,
      sortedBy,
      req,
      userType: "shop",
      info,
    });
  }

  // Customer-specific orders
  static async customerGetOrders({
    where,
    page,
    limit,
    sortedBy,
    req,
    info,
  }: {
    where: Partial<OrderWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
    info: GraphQLResolveInfo;
  }): Promise<Response<Order[] | null>> {
    return this.buildOrderQuery({
      where,
      page,
      limit,
      sortedBy,
      req,
      userType: "customer",
      info,
    });
  }

  // Admin-specific orders
  static async adminGetOrders({
    where,
    page,
    limit,
    sortedBy,
    req,
    info,
  }: {
    where: Partial<OrderWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
    info: GraphQLResolveInfo;
  }): Promise<Response<Order[] | null>> {
    return this.buildOrderQuery({
      where,
      page,
      limit,
      sortedBy,
      req,
      userType: "admin",
      info,
    });
  }

  static async shopGetOrder({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Order | null>> {
    const orderRepository = getRepository(Order);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );
      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const order = await orderRepository.findOne({
        where: { shop_id: shopDataFromToken?.id, is_active: true } as any,
      });

      if (!order) {
        return handleError("Order not found", 404, null);
      }

      return handleSuccess(order);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async customerGetOrder({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Order | null>> {
    const orderRepository = getRepository(Order);
    try {
      const customerDataFromToken =
        new AuthMiddlewareService().verifyCustomerToken(req);
      if (!customerDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const order = await orderRepository.findOne({
        where: {
          id: id,
          is_active: true,
        } as any,
        relations: { logistics: true },
      });
      if (!order) {
        return handleError("Order not found", 404, null);
      }

      return handleSuccess(order);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async adminGetOrder({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Order | null>> {
    const orderRepository = getRepository(Order);

    try {
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
        req
      );
      if (!staffDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const order = await orderRepository.findOne({
        where: { is_active: true } as any,
        relations: { logistics: true },
      });

      console.log(order);

      if (!order) {
        return handleError("Order not found", 404, null);
      }

      return handleSuccess(order);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  // Map `sortedBy` enum to TypeORM order format
  static order(sortedBy: BaseOrderByInput): [string, "ASC" | "DESC"] {
    switch (sortedBy) {
      case BaseOrderByInput.created_at_ASC:
        return ["order.created_at", "ASC"];
      case BaseOrderByInput.created_at_DESC:
        return ["order.created_at", "DESC"];
      case BaseOrderByInput.updated_at_ASC:
        return ["order.updated_at", "ASC"];
      case BaseOrderByInput.updated_at_DESC:
        return ["order.updated_at", "DESC"];
      default:
        return ["order.created_at", "DESC"]; // Default order
    }
  }
}
