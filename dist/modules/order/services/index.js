"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const types_1 = require("../types");
const typeorm_1 = require("typeorm");
const entity_1 = require("../entity");
const baseType_1 = require("../../../utils/base/baseType");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const product_1 = require("../../product");
const shopProduct_1 = require("../../shopProduct");
const orderDetail_1 = require("../../orderDetail");
const wallet_1 = require("../../wallet");
const notification_1 = require("../../notification");
const customer_1 = require("../../customer");
const shop_1 = require("../../shop");
const graphqlUtils_1 = require("../../../utils/graphqlUtils");
const pubsub_1 = __importDefault(require("../../../utils/pubsub"));
class OrderService {
    static countNewOrder(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, order_status, }) {
            try {
                const orderRepository = (0, typeorm_1.getRepository)(entity_1.Order);
                const queryBuilder = orderRepository.createQueryBuilder("order");
                queryBuilder.where("order.order_status = :orderStatus", {
                    orderStatus: order_status,
                });
                let shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id) {
                    queryBuilder.andWhere("order.shop_id = :shopId", {
                        shopId: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id,
                    });
                }
                else {
                    const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                    if (!staffDataFromToken)
                        return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                const total = yield queryBuilder.getCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(null, total);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static generateUniqueTimestamp() {
        this.counter = (this.counter + 1) % 1000; // Reset counter after 1000
        return `${Date.now()}${String(this.counter).padStart(3, "0")}`; // Pad counter to 3 digits
    }
    static createOrder(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            var _b;
            let orders = [];
            try {
                const customerDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                if (!customerDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                if (!((_b = data === null || data === void 0 ? void 0 : data.order_details) === null || _b === void 0 ? void 0 : _b.length)) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_data, 404, "Please select products then try again later!.");
                }
                orders = yield this.createOrderFunc({
                    customer_id: customerDataFromToken.id,
                    data,
                    isAdmin: false,
                });
                return (0, success_handler_1.handleSuccess)(orders);
            }
            catch (error) {
                console.error("Error creating order with transaction:", error);
                console.error("Error creating order with transaction:", error === null || error === void 0 ? void 0 : error.message);
                if (error === null || error === void 0 ? void 0 : error.message.includes(config_1.config.message.balance_not_enough)) {
                    console.error("Error creating order with transaction:", error === null || error === void 0 ? void 0 : error.message);
                    return (0, success_handler_1.handleSuccess)(orders, config_1.config.message.balance_not_enough);
                }
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminCreateOrderForCustomer(_a) {
        return __awaiter(this, arguments, void 0, function* ({ customer_id, data, req, }) {
            var _b;
            const orders = [];
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                if (!((_b = data === null || data === void 0 ? void 0 : data.order_details) === null || _b === void 0 ? void 0 : _b.length)) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_data, 404, "Please select products then try again later!.");
                }
                const resultOrders = yield this.createOrderFunc({
                    customer_id: customer_id,
                    data,
                    isAdmin: true,
                });
                return (0, success_handler_1.handleSuccess)(resultOrders);
            }
            catch (error) {
                console.error("Error creating order with transaction:", error);
                if (error.message.includes(config_1.config.message.balance_not_enough)) {
                    return (0, success_handler_1.handleSuccess)(orders, config_1.config.message.balance_not_enough);
                }
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static createOrderFunc(_a) {
        return __awaiter(this, arguments, void 0, function* ({ customer_id, data, isAdmin, }) {
            const transactionManager = (0, typeorm_1.getManager)();
            const shopProductRepository = (0, typeorm_1.getRepository)(shopProduct_1.ShopProduct);
            const productRepository = (0, typeorm_1.getRepository)(product_1.Product);
            const orderRepository = (0, typeorm_1.getRepository)(entity_1.Order);
            const orderDetailRepository = (0, typeorm_1.getRepository)(orderDetail_1.OrderDetail);
            const customerRepository = (0, typeorm_1.getRepository)(customer_1.Customer);
            const walletRepository = (0, typeorm_1.getRepository)(wallet_1.Wallet);
            const shopRepository = (0, typeorm_1.getRepository)(shop_1.Shop);
            const orders = [];
            try {
                return yield transactionManager.transaction((entityManager) => __awaiter(this, void 0, void 0, function* () {
                    let existingCustomerWallet = yield walletRepository.findOneBy({
                        customer_id: customer_id,
                        is_active: true,
                    });
                    if (!existingCustomerWallet) {
                        existingCustomerWallet = (yield wallet_1.WalletService.createWallet({
                            customer_id,
                        }));
                        if (!existingCustomerWallet)
                            throw new Error("Customer's wallet not found.");
                    }
                    const productIds = data.order_details.map(({ product_id }) => product_id);
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
                    const [shopProducts, systemProducts] = yield Promise.all([
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
                    const groupedOrders = {};
                    // Group order details by shop_id and separate system products
                    for (const product of data.order_details) {
                        const shopProduct = shopProductMap.get(product.product_id);
                        const systemProduct = systemProductMap.get(product.product_id);
                        if (shopProduct) {
                            const shopId = shopProduct.shop_id;
                            const existingShop = yield shopRepository.findOneBy({
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
                        }
                        else if (systemProduct) {
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
                    const totalOrderPrice = Object.values(groupedOrders).reduce((sum, order) => sum + order.total_price, 0);
                    const orderPromises = Object.entries(groupedOrders).map((_a) => __awaiter(this, [_a], void 0, function* ([shop_id, orderData]) {
                        if (shop_id === "system") {
                            const systemWallet = yield entityManager
                                .createQueryBuilder(wallet_1.Wallet, "wallet")
                                .where("wallet.shop_id IS NULL")
                                .andWhere("wallet.customer_id IS NULL")
                                .andWhere("is_active = true")
                                .getOne();
                            if (!systemWallet)
                                throw new Error("System wallet not found.");
                            // systemWallet.total_frozen_balance +=
                            //   orderData.total_price +
                            //   (orderData.total_price * orderData.profit) / 100;
                            yield entityManager.save(wallet_1.Wallet, systemWallet);
                        }
                        else {
                            let shopWallet = yield entityManager.findOne(wallet_1.Wallet, {
                                where: { shop_id, is_active: true },
                            });
                            if (!shopWallet) {
                                const userIdField = { shop_id: shop_id, customer_id: null };
                                shopWallet = (yield wallet_1.WalletService.createWallet(Object.assign({}, userIdField)));
                                if (!shopWallet)
                                    throw new Error("Shop wallet not found.");
                            }
                            // shopWallet.total_frozen_balance +=
                            //   orderData.total_price +
                            //   (orderData.total_price * orderData.profit) / 100;
                            yield entityManager.save(wallet_1.Wallet, shopWallet);
                        }
                        const order_no = this.generateUniqueTimestamp();
                        const newOrder = orderRepository.create({
                            total_quantity: orderData.total_quantity,
                            total_discount: orderData.total_discount,
                            total_price: orderData.total_price,
                            total_products: orderData.order_details.length || 1,
                            shop_id: shop_id === "system" ? null : shop_id,
                            profit: orderData === null || orderData === void 0 ? void 0 : orderData.profit,
                            order_no,
                            customer_id: customer_id,
                            status: baseType_1.BaseStatus.ACTIVE,
                            created_by: customer_id,
                            address_id: data.address_id,
                            payment_slip: data.payment_slip,
                            delivery_type: data.delivery_type,
                            logistics_id: data.logistics_id,
                            order_status: !isAdmin &&
                                existingCustomerWallet.total_balance < totalOrderPrice
                                ? types_1.OrderStatus.FAILED
                                : types_1.OrderStatus.NO_PICKUP,
                            payment_status: !isAdmin &&
                                existingCustomerWallet.total_balance < totalOrderPrice
                                ? types_1.PaymentStatus.FAILED
                                : types_1.PaymentStatus.COMPLETED,
                        });
                        console.log(data.logistics_id);
                        console.log(newOrder);
                        const savedOrder = yield orderRepository.save(newOrder);
                        const savedOrderDetails = yield Promise.all(orderData.order_details.map((detail) => __awaiter(this, void 0, void 0, function* () {
                            if (shop_id === "system") {
                                yield entityManager
                                    .createQueryBuilder()
                                    .update(product_1.Product)
                                    .set({
                                    quantity: () => "quantity - :quantity",
                                    sell_count: () => "sell_count + :sell_count",
                                })
                                    .where("id = :id", {
                                    id: detail.product_id,
                                    quantity: detail.quantity,
                                    sell_count: detail.quantity,
                                })
                                    .execute();
                            }
                            else {
                                yield entityManager
                                    .createQueryBuilder()
                                    .update(shopProduct_1.ShopProduct)
                                    .set({
                                    quantity: () => "quantity - :quantity",
                                    sell_count: () => "sell_count + :sell_count",
                                })
                                    .where("product_id = :product_id AND shop_id = :shopId", {
                                    product_id: detail.product_id,
                                    shopId: shop_id,
                                    quantity: detail.quantity,
                                    sell_count: detail.quantity,
                                })
                                    .execute();
                                yield entityManager
                                    .createQueryBuilder()
                                    .update(product_1.Product)
                                    .set({
                                    quantity: () => "quantity - :quantity",
                                    sell_count: () => "sell_count + :sell_count",
                                })
                                    .where("id = :id", {
                                    id: detail.product_id,
                                    quantity: detail.quantity,
                                    sell_count: detail.quantity,
                                })
                                    .execute();
                            }
                            const newOrderDetail = orderDetailRepository.create(Object.assign(Object.assign({}, detail), { order_id: savedOrder.id, address_id: data.address_id, order_no: savedOrder.order_no, shop_id: shop_id === "system" ? null : shop_id, customer_id: customer_id, delivery_type: data.delivery_type, order_status: !isAdmin &&
                                    existingCustomerWallet.total_balance < totalOrderPrice
                                    ? types_1.OrderStatus.FAILED
                                    : types_1.OrderStatus.NO_PICKUP, payment_status: !isAdmin &&
                                    existingCustomerWallet.total_balance < totalOrderPrice
                                    ? types_1.PaymentStatus.FAILED
                                    : types_1.PaymentStatus.COMPLETED }));
                            return orderDetailRepository.save(newOrderDetail);
                        })));
                        savedOrder.order_details = savedOrderDetails;
                        orders.push(savedOrder);
                    }));
                    yield Promise.all(orderPromises);
                    if (!isAdmin) {
                        if (existingCustomerWallet.total_balance < totalOrderPrice) {
                            throw new Error(config_1.config.message.balance_not_enough);
                        }
                        existingCustomerWallet.total_balance -= totalOrderPrice;
                        yield entityManager.save(wallet_1.Wallet, existingCustomerWallet);
                    }
                    try {
                        if (orders === null || orders === void 0 ? void 0 : orders.length) {
                            const customerData = yield customerRepository.findOneBy({
                                id: customer_id,
                            });
                            orders.forEach((order) => __awaiter(this, void 0, void 0, function* () {
                                const details = {
                                    id: order.id,
                                    order_no: order.order_no,
                                    shop_id: order.shop_id,
                                    customer_id: order.customer_id,
                                    order_status: order.order_status,
                                };
                                const _data = {
                                    title: "New Order Received!",
                                    description: `${customerData === null || customerData === void 0 ? void 0 : customerData.firstName} ${(customerData === null || customerData === void 0 ? void 0 : customerData.lastName) || ""} has placed a new order from your shop. Please review and fulfill it promptly.`,
                                    shop_id: order.shop_id,
                                    reference_id: order.id,
                                    data: details,
                                    notification_type: notification_1.INotificationType.ORDER,
                                };
                                yield notification_1.NotificationService.createNotification({ data: _data });
                            }));
                        }
                    }
                    catch (error) {
                        console.error("Create notification error: ", { error });
                    }
                    return orders;
                }));
            }
            catch (error) {
                console.error({ error });
                throw new Error(error === null || error === void 0 ? void 0 : error.message);
            }
        });
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
    static payOrderFailed(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(entity_1.Order);
            const orderDetailRepository = (0, typeorm_1.getRepository)(orderDetail_1.OrderDetail);
            const walletRepository = (0, typeorm_1.getRepository)(wallet_1.Wallet);
            const customerRepository = (0, typeorm_1.getRepository)(customer_1.Customer);
            const transactionManager = (0, typeorm_1.getManager)();
            try {
                const customerDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                if (!customerDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const existOrder = yield orderRepository.findOne({
                    where: {
                        id: id,
                        is_active: true,
                        customer_id: customerDataFromToken.id,
                        order_status: types_1.OrderStatus.FAILED,
                        payment_status: types_1.PaymentStatus.FAILED,
                    },
                });
                if (!existOrder) {
                    return (0, error_handler_1.handleError)("Order not found", 404, null);
                }
                const orderDetails = yield orderDetailRepository.find({
                    where: {
                        order_id: id,
                        is_active: true,
                        customer_id: customerDataFromToken.id,
                        order_status: types_1.OrderStatus.FAILED,
                        payment_status: types_1.PaymentStatus.FAILED,
                    },
                });
                if (!orderDetails.length) {
                    return (0, error_handler_1.handleError)("Order details not found", 404, null);
                }
                const existingCustomerWallet = yield walletRepository.findOne({
                    where: { customer_id: customerDataFromToken.id, is_active: true },
                });
                if (!existingCustomerWallet) {
                    throw new Error("Customer's wallet not found.");
                }
                if (existingCustomerWallet.total_balance < existOrder.total_price) {
                    throw new Error("Insufficient balance. Please recharge and try again.");
                }
                return yield transactionManager.transaction((entityManager) => __awaiter(this, void 0, void 0, function* () {
                    // Update order status
                    existOrder.order_status = types_1.OrderStatus.NO_PICKUP;
                    existOrder.payment_status = types_1.PaymentStatus.COMPLETED;
                    yield entityManager.save(entity_1.Order, existOrder);
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
                    const updatedOrderDetails = yield Promise.all(orderDetails.map((orderDetail) => __awaiter(this, void 0, void 0, function* () {
                        if (!orderDetail.shop_id) {
                            yield entityManager
                                .createQueryBuilder()
                                .update(product_1.Product)
                                .set({
                                quantity: () => "quantity - :quantity",
                                sell_count: () => "sell_count + :sell_count",
                            })
                                .where("id = :id", {
                                id: orderDetail.product_id,
                                quantity: orderDetail.quantity,
                                sell_count: orderDetail.quantity,
                            })
                                .execute();
                        }
                        else {
                            yield entityManager
                                .createQueryBuilder()
                                .update(shopProduct_1.ShopProduct)
                                .set({
                                quantity: () => "quantity - :quantity",
                                sell_count: () => "sell_count + :sell_count",
                            })
                                .where("product_id = :product_id AND shop_id = :shopId", {
                                product_id: orderDetail.product_id,
                                shopId: orderDetail.shop_id,
                                quantity: orderDetail.quantity,
                                sell_count: orderDetail.quantity,
                            })
                                .execute();
                            yield entityManager
                                .createQueryBuilder()
                                .update(product_1.Product)
                                .set({
                                quantity: () => "quantity - :quantity",
                                sell_count: () => "sell_count + :sell_count",
                            })
                                .where("id = :id", {
                                id: orderDetail.product_id,
                                quantity: orderDetail.quantity,
                                sell_count: orderDetail.quantity,
                            })
                                .execute();
                        }
                        orderDetail.order_status = types_1.OrderStatus.NO_PICKUP;
                        orderDetail.payment_status = types_1.PaymentStatus.COMPLETED;
                        return orderDetail;
                    })));
                    // await Promise.all(updatePromises);
                    yield entityManager.save(orderDetail_1.OrderDetail, orderDetails);
                    if (!existOrder.shop_id) {
                        const systemWallet = yield entityManager
                            .createQueryBuilder(wallet_1.Wallet, "wallet")
                            .where("wallet.shop_id IS NULL")
                            .andWhere("wallet.customer_id IS NULL")
                            .andWhere("is_active = true")
                            .getOne();
                        if (!systemWallet)
                            throw new Error("System wallet not found.");
                        // systemWallet.total_frozen_balance +=
                        //   existOrder.total_price +
                        //   (existOrder.total_price * existOrder.profit) / 100;
                        yield entityManager.save(wallet_1.Wallet, systemWallet);
                    }
                    else {
                        const shopWallet = yield entityManager.findOne(wallet_1.Wallet, {
                            where: { shop_id: existOrder.shop_id, is_active: true },
                        });
                        if (!shopWallet)
                            throw new Error("Shop wallet not found.");
                        // shopWallet.total_frozen_balance +=
                        //   existOrder.total_price +
                        //   (existOrder.total_price * existOrder.profit) / 100;
                        yield entityManager.save(wallet_1.Wallet, shopWallet);
                    }
                    existingCustomerWallet.total_balance -= existOrder.total_price;
                    yield entityManager.save(wallet_1.Wallet, existingCustomerWallet);
                    try {
                        const customerData = yield customerRepository.findOneBy({
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
                            description: `${customerData === null || customerData === void 0 ? void 0 : customerData.firstName} ${(customerData === null || customerData === void 0 ? void 0 : customerData.lastName) || ""} has placed a new order from your shop. Please review and fulfill it promptly.`,
                            shop_id: existOrder.shop_id,
                            reference_id: existOrder.id,
                            data: details,
                            notification_type: notification_1.INotificationType.ORDER,
                        };
                        yield notification_1.NotificationService.createNotification({ data: _data });
                    }
                    catch (error) {
                        console.error("Error to create notification::", { error });
                    }
                    return (0, success_handler_1.handleSuccess)(Object.assign(Object.assign({}, existOrder), { order_details: updatedOrderDetails }));
                }));
            }
            catch (error) {
                console.error("Error in payOrderFailed:", error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static cancelOrderFailed(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(entity_1.Order);
            const transactionManager = (0, typeorm_1.getManager)();
            try {
                const customerDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                if (!customerDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const existOrder = yield orderRepository.findOne({
                    where: {
                        id: id,
                        is_active: true,
                        customer_id: customerDataFromToken.id,
                        order_status: types_1.OrderStatus.FAILED,
                        payment_status: types_1.PaymentStatus.FAILED,
                    },
                });
                if (!existOrder) {
                    return (0, error_handler_1.handleError)("Order not found", 404, null);
                }
                return yield transactionManager.transaction((entityManager) => __awaiter(this, void 0, void 0, function* () {
                    // Update order status
                    existOrder.order_status = types_1.OrderStatus.CANCELLED;
                    existOrder.payment_status = types_1.PaymentStatus.CANCELLED;
                    existOrder.sign_in_status = types_1.SignInStatus.CANCELLED;
                    existOrder.canelled_by_customer = customerDataFromToken.id;
                    yield entityManager.save(entity_1.Order, existOrder);
                    yield entityManager.update(orderDetail_1.OrderDetail, { order_id: existOrder.id }, // WHERE condition
                    {
                        order_status: types_1.OrderStatus.CANCELLED,
                        payment_status: types_1.PaymentStatus.CANCELLED,
                        sign_in_status: types_1.SignInStatus.CANCELLED,
                        canelled_by_customer: customerDataFromToken.id,
                    } // Update values
                    );
                    return (0, success_handler_1.handleSuccess)(Object.assign({}, existOrder));
                }));
            }
            catch (error) {
                console.error("Error in payOrderFailed:", error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopConfirmOrder(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(entity_1.Order);
            const walletRepository = (0, typeorm_1.getRepository)(wallet_1.Wallet);
            const transactionManager = (0, typeorm_1.getManager)();
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const existOrder = yield orderRepository.findOne({
                    where: {
                        id: id,
                        is_active: true,
                        shop_id: shopDataFromToken.id,
                        order_status: types_1.OrderStatus.NO_PICKUP,
                        payment_status: types_1.PaymentStatus.COMPLETED,
                    },
                });
                if (!existOrder) {
                    return (0, error_handler_1.handleError)("Order not found", 404, null);
                }
                const existingWallet = yield walletRepository.findOne({
                    where: { shop_id: shopDataFromToken.id, is_active: true },
                });
                if (!existingWallet) {
                    return (0, error_handler_1.handleError)(config_1.config.message.wallet_not_found, 404, null);
                }
                if ((existingWallet === null || existingWallet === void 0 ? void 0 : existingWallet.total_withdraw_able_balance) < (existOrder === null || existOrder === void 0 ? void 0 : existOrder.total_price)) {
                    return (0, error_handler_1.handleError)(config_1.config.message.balance_not_enough, 402, null);
                }
                return yield transactionManager.transaction((entityManager) => __awaiter(this, void 0, void 0, function* () {
                    // Update order status
                    existOrder.order_status = types_1.OrderStatus.PROCESSING;
                    existOrder.sign_in_status = types_1.SignInStatus.PACKING;
                    yield entityManager.save(entity_1.Order, existOrder);
                    yield entityManager.update(orderDetail_1.OrderDetail, { order_id: existOrder.id }, // WHERE condition
                    {
                        order_status: types_1.OrderStatus.PROCESSING,
                        sign_in_status: types_1.SignInStatus.PACKING,
                    } // Update values
                    );
                    // shopWallet.total_frozen_balance +=
                    // orderData.total_price +
                    // (orderData.total_price * orderData.profit) / 100;
                    yield entityManager
                        .createQueryBuilder()
                        .update(wallet_1.Wallet)
                        .set({
                        total_withdraw_able_balance: () => "total_withdraw_able_balance - :total_withdraw_able_balance",
                        total_frozen_balance: () => "total_frozen_balance + :total_frozen_balance",
                    })
                        .where("shop_id = :shop_id", {
                        shop_id: existOrder.shop_id,
                        total_withdraw_able_balance: ((existOrder === null || existOrder === void 0 ? void 0 : existOrder.total_price) * (100 - Number(existOrder.profit))) /
                            100,
                        total_frozen_balance: existOrder === null || existOrder === void 0 ? void 0 : existOrder.total_price,
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
                        pubsub_1.default.publish("UPDATE_ORDER_STATUS_SBUSCRIBE", {
                            subscribeUpdateOrderStatus: (0, success_handler_1.handleSuccess)({
                                order_status: types_1.OrderStatus.PROCESSING,
                                sign_in_status: types_1.SignInStatus.PACKING,
                            }, "success"),
                        });
                    }
                    catch (error) { }
                    return (0, success_handler_1.handleSuccess)(Object.assign({}, existOrder));
                }));
            }
            catch (error) {
                console.error("Error in payOrderFailed:", error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopCancelOrder(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(entity_1.Order);
            const orderDetailsRepository = (0, typeorm_1.getRepository)(orderDetail_1.OrderDetail);
            const transactionManager = (0, typeorm_1.getManager)();
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const existOrder = yield orderRepository.findOne({
                    where: {
                        id: id,
                        is_active: true,
                        shop_id: shopDataFromToken.id,
                        order_status: types_1.OrderStatus.NO_PICKUP,
                        payment_status: types_1.PaymentStatus.COMPLETED,
                    },
                });
                if (!existOrder) {
                    return (0, error_handler_1.handleError)("Order not found", 404, null);
                }
                return yield transactionManager.transaction((entityManager) => __awaiter(this, void 0, void 0, function* () {
                    // Update order status
                    existOrder.order_status = types_1.OrderStatus.CANCELLED;
                    existOrder.canelled_by_shop = shopDataFromToken.id;
                    yield entityManager.save(entity_1.Order, existOrder);
                    yield entityManager.update(orderDetail_1.OrderDetail, { order_id: existOrder.id }, // WHERE condition
                    {
                        order_status: types_1.OrderStatus.CANCELLED,
                        canelled_by_shop: shopDataFromToken.id,
                    } // Update values
                    );
                    const orderDetails = yield orderDetailsRepository.findBy({
                        order_id: existOrder.id,
                    });
                    const updatePromises = orderDetails.map((orderDetail) => __awaiter(this, void 0, void 0, function* () {
                        yield entityManager.increment(shopProduct_1.ShopProduct, {
                            shop_id: orderDetail.shop_id,
                            product_id: orderDetail.product_id,
                            is_active: true,
                        }, "quantity", orderDetail.quantity);
                    }));
                    yield Promise.all(updatePromises);
                    return (0, success_handler_1.handleSuccess)(Object.assign({}, existOrder));
                }));
            }
            catch (error) {
                console.error("Error in payOrderFailed:", error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminUpdateOrderWithStatus(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data, req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(entity_1.Order);
            const transactionManager = (0, typeorm_1.getManager)();
            try {
                // Verify staff token
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                const orderIds = data.ids;
                // Check if orders exist and are eligible for update
                let existOrders = yield orderRepository
                    .createQueryBuilder("order")
                    .where("order.id IN (:...ids)", { ids: orderIds }) // Use :...ids for array
                    .andWhere("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.order_status NOT IN (:...orderStatus)", {
                    orderStatus: [
                        types_1.OrderStatus.SUCCESS,
                        types_1.OrderStatus.FAILED,
                        types_1.OrderStatus.CANCELLED,
                    ],
                })
                    .getMany();
                if (!(existOrders === null || existOrders === void 0 ? void 0 : existOrders.length)) {
                    return (0, error_handler_1.handleError)("Order not found", 404, null);
                }
                // Prevent updating the ID
                if (data.ids)
                    delete data.ids;
                existOrders = existOrders.map((order) => {
                    return Object.assign(Object.assign({}, order), data);
                });
                // Start a transaction
                return yield transactionManager.transaction((entityManager) => __awaiter(this, void 0, void 0, function* () {
                    yield entityManager.update(entity_1.Order, { id: (0, typeorm_1.In)(orderIds) }, Object.assign({}, data));
                    // Use Promise.all to parallelize updates
                    yield Promise.all(existOrders.map((existOrder) => __awaiter(this, void 0, void 0, function* () {
                        // Update order status and set updated_by_admin
                        existOrder.updated_by_admin = staffDataFromToken.id;
                        // Update related order details
                        yield entityManager.update(orderDetail_1.OrderDetail, { order_id: existOrder.id }, Object.assign(Object.assign({}, data), { updated_by_admin: staffDataFromToken.id }));
                        // If the order status is SUCCESS, update the shop's wallet balance
                        if ((data === null || data === void 0 ? void 0 : data.order_status) === types_1.OrderStatus.SUCCESS &&
                            existOrder.shop_id) {
                            yield entityManager
                                .createQueryBuilder()
                                .update(wallet_1.Wallet)
                                .set({
                                total_balance: () => "total_balance + :total_balance",
                                total_withdraw_able_balance: () => "total_withdraw_able_balance + :total_withdraw_able_balance",
                                total_frozen_balance: () => "total_frozen_balance - :total_frozen_balance",
                            })
                                .where("shop_id = :shop_id", {
                                shop_id: existOrder.shop_id,
                                total_balance: (existOrder.total_price * existOrder.profit) / 100,
                                // total_balance:
                                //   (existOrder.total_price * existOrder.profit) / 100 +
                                //   existOrder?.total_price,
                                total_withdraw_able_balance: existOrder === null || existOrder === void 0 ? void 0 : existOrder.total_price,
                                // total_withdraw_able_balance:
                                //   (existOrder.total_price * existOrder.profit) / 100 +
                                //   existOrder?.total_price,
                                total_frozen_balance: existOrder === null || existOrder === void 0 ? void 0 : existOrder.total_price,
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
                                pubsub_1.default.publish(`UPDATE_ORDER_STATUS_SBUSCRIBE_${existOrder.shop_id}`, {
                                    subscribeUpdateOrderStatus: (0, success_handler_1.handleSuccess)(Object.assign(Object.assign({}, existOrders), data)),
                                });
                                // 2. Global channel (optional, for admin dashboards)
                                pubsub_1.default.publish("UPDATE_ORDER_STATUS_SBUSCRIBE", {
                                    subscribeUpdateOrderStatus: (0, success_handler_1.handleSuccess)(Object.assign(Object.assign({}, existOrders), data)),
                                });
                            }
                            catch (error) { }
                        }
                    })));
                    // Return success response
                    return (0, success_handler_1.handleSuccess)(existOrders);
                }));
            }
            catch (error) {
                console.error("Error in adminUpdateOrderWithStatus:", error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static buildOrderQuery(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, userType, info, }) {
            var _b, _c;
            const orderRepository = (0, typeorm_1.getRepository)(entity_1.Order);
            try {
                // Build the base query
                const queryBuilder = orderRepository.createQueryBuilder("order");
                // Verify token based on user type
                let userDataFromToken;
                const selectFields = (0, graphqlUtils_1.getRequestedFields)(info, "shopGetOrders.data");
                switch (userType) {
                    case "shop":
                        userDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                        // Add LEFT JOIN with Product
                        queryBuilder.leftJoinAndSelect("order.customerData", "customer");
                        queryBuilder.leftJoinAndSelect("order.shop", "shop");
                        queryBuilder.leftJoinAndSelect("order.logistics", "logistics");
                        if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                            const fields = selectFields
                                .filter((field) => field != "customerData")
                                .filter((field) => field != "shop")
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
                        userDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                        queryBuilder.leftJoinAndSelect("order.logistics", "logistics");
                        // if (selectFields?.length) {
                        //   const fields = selectFields
                        //     .filter((field) => field != "customerData")
                        //     .map((field) => `order.${field}`);
                        //   queryBuilder.select([
                        //     // Order fields
                        //     ...fields,
                        //   ]);
                        //   console.log(fields);
                        // }
                        if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                            const fields = selectFields
                                .filter((field) => field !== "customerData")
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
                        userDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                        // // Add LEFT JOIN with Product
                        queryBuilder.leftJoinAndSelect("order.customerData", "customer");
                        queryBuilder.leftJoinAndSelect("order.shop", "shop");
                        queryBuilder.leftJoinAndSelect("order.logistics", "logistics");
                        if (selectFields === null || selectFields === void 0 ? void 0 : selectFields.length) {
                            const fields = selectFields
                                .filter((field) => field != "customerData")
                                .filter((field) => field != "shop")
                                .map((field) => `order.${field}`);
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
                        return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                if (!userDataFromToken) {
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                }
                queryBuilder.where({ is_active: true });
                // Add user-specific conditions
                if (userType === "shop") {
                    queryBuilder.andWhere({ shop_id: userDataFromToken.id });
                }
                else if (userType === "customer") {
                    queryBuilder.andWhere({ customer_id: userDataFromToken.id });
                }
                // Add filters
                if (where === null || where === void 0 ? void 0 : where.order_no) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("order.order_no ILIKE :order_no", {
                            order_no: `%${where.order_no}%`,
                        });
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.keyword) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
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
                    }));
                }
                if (where === null || where === void 0 ? void 0 : where.order_status) {
                    queryBuilder.andWhere(new typeorm_1.Brackets((qb) => {
                        qb.where("order.order_status = :order_status", {
                            order_status: `${where.order_status}`,
                        });
                    }));
                }
                if (((_b = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _b === void 0 ? void 0 : _b.startDate) &&
                    ((_c = where === null || where === void 0 ? void 0 : where.createdAtBetween) === null || _c === void 0 ? void 0 : _c.endDate)) {
                    queryBuilder.andWhere("DATE(order.created_at) BETWEEN :startDate AND :endDate", {
                        startDate: where.createdAtBetween.startDate,
                        endDate: where.createdAtBetween.endDate,
                    });
                }
                // Add pagination and sorting
                const [orderField, orderDirection] = this.order(sortedBy);
                queryBuilder
                    .skip((page - 1) * limit)
                    .take(limit)
                    .orderBy(orderField, orderDirection);
                // Execute the query
                const [orders, total] = yield queryBuilder.getManyAndCount();
                return (0, success_handler_1.handleSuccessWithTotalData)(orders, total);
            }
            catch (error) {
                console.error(`Error in ${userType}GetOrders:`, error);
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    // Shop-specific orders
    static shopGetOrders(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, info, }) {
            return this.buildOrderQuery({
                where,
                page,
                limit,
                sortedBy,
                req,
                userType: "shop",
                info,
            });
        });
    }
    // Customer-specific orders
    static customerGetOrders(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, info, }) {
            return this.buildOrderQuery({
                where,
                page,
                limit,
                sortedBy,
                req,
                userType: "customer",
                info,
            });
        });
    }
    // Admin-specific orders
    static adminGetOrders(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, page, limit, sortedBy, req, info, }) {
            return this.buildOrderQuery({
                where,
                page,
                limit,
                sortedBy,
                req,
                userType: "admin",
                info,
            });
        });
    }
    static shopGetOrder(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(entity_1.Order);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const order = yield orderRepository.findOne({
                    where: { shop_id: shopDataFromToken === null || shopDataFromToken === void 0 ? void 0 : shopDataFromToken.id, is_active: true },
                });
                if (!order) {
                    return (0, error_handler_1.handleError)("Order not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(order);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static customerGetOrder(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(entity_1.Order);
            try {
                const customerDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                if (!customerDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const order = yield orderRepository.findOne({
                    where: {
                        id: id,
                        is_active: true,
                    },
                    relations: { logistics: true },
                });
                if (!order) {
                    return (0, error_handler_1.handleError)("Order not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(order);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static adminGetOrder(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(entity_1.Order);
            try {
                const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
                if (!staffDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const order = yield orderRepository.findOne({
                    where: { is_active: true },
                    relations: { logistics: true },
                });
                console.log(order);
                if (!order) {
                    return (0, error_handler_1.handleError)("Order not found", 404, null);
                }
                return (0, success_handler_1.handleSuccess)(order);
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    // Map `sortedBy` enum to TypeORM order format
    static order(sortedBy) {
        switch (sortedBy) {
            case baseType_1.BaseOrderByInput.created_at_ASC:
                return ["order.created_at", "ASC"];
            case baseType_1.BaseOrderByInput.created_at_DESC:
                return ["order.created_at", "DESC"];
            case baseType_1.BaseOrderByInput.updated_at_ASC:
                return ["order.updated_at", "ASC"];
            case baseType_1.BaseOrderByInput.updated_at_DESC:
                return ["order.updated_at", "DESC"];
            default:
                return ["order.created_at", "DESC"]; // Default order
        }
    }
}
exports.OrderService = OrderService;
OrderService.counter = 0;
