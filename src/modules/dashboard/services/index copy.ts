import { Request } from "express";
import moment from "moment";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import { handleSuccess } from "../../../utils/response/success.handler";
import { getRepository } from "typeorm";
import { Order, OrderStatus, PaymentStatus } from "../../order";
import {
  OrderDashboard,
  ShopDashboard,
  WhereOrderDashboardInput,
} from "../types";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { Product } from "../../product";
import { Notification } from "../../notification";
import { ShopProduct } from "../../shopProduct";
import {
  ETransactionHistoryIdentifier,
  ETransactionStatus,
  TransactionHistory,
} from "../../transactionHistory";

export class OrderService {
  static async customerGetOrderDashboard({
    where,
    req,
  }: {
    where: WhereOrderDashboardInput;
    req: Request;
  }): Promise<Response<OrderDashboard | null>> {
    const orderDetailRepository = getRepository(Order);

    try {
      const customerDataFromToken =
        new AuthMiddlewareService().verifyCustomerToken(req);

      if (!customerDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const orderCount = await orderDetailRepository
        .createQueryBuilder("order")
        .where({ is_active: true, order_status: where?.order_status })
        .andWhere({ customer_id: customerDataFromToken.id })
        .getCount();

      return handleSuccess({
        total_order: orderCount,
        order_status: where?.order_status,
      });
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopGetProductDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    const shopProductRepository = getRepository(ShopProduct);
    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopId = shopDataFromToken.id;
      const now = moment();

      // Get the first and last day of the current month
      const startOfCurrentMonth = now.startOf("month").format("YYYY-MM-DD");
      const endOfCurrentMonth = now.endOf("month").format("YYYY-MM-DD");

      // Get the first and last day of the previous month
      const startOfLastMonth = now
        .subtract(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      const endOfLastMonth = now.endOf("month").format("YYYY-MM-DD");

      // Fetch order count for the current month
      const currentMonthShopProducts = await shopProductRepository
        .createQueryBuilder("shop_product")
        .where("shop_product.is_active = :isActive", { isActive: true })
        .andWhere("shop_product.shop_id = :shopId", { shopId })
        .andWhere("DATE(shop_product.created_at) BETWEEN :start AND :end", {
          start: startOfCurrentMonth,
          end: endOfCurrentMonth,
        })
        .getCount();

      // Fetch shop_product count for the previous month
      const lastMonthShopProducts = await shopProductRepository
        .createQueryBuilder("shop_product")
        .where("shop_product.is_active = :isActive", { isActive: true })
        .andWhere("shop_product.shop_id = :shopId", { shopId })
        .andWhere("DATE(shop_product.created_at) BETWEEN :start AND :end", {
          start: startOfLastMonth,
          end: endOfLastMonth,
        })
        .getCount();

      // Calculate percentage increase/decrease
      let increase = "0";
      if (lastMonthShopProducts > 0) {
        const difference = currentMonthShopProducts - lastMonthShopProducts;
        increase = ((difference / lastMonthShopProducts) * 100).toFixed(2); // Percentage increase
      } else if (currentMonthShopProducts > 0) {
        increase = "100"; // If last month had zero orders but current month has some, set increase to 100%
      }

      const shopProductCount = await shopProductRepository
        .createQueryBuilder("shop_product")
        .where({ is_active: true, shop_id: shopDataFromToken.id })
        .getCount();

      return handleSuccess({
        total: shopProductCount.toString(),
        increase: increase,
      });
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopGetUnreadMessageDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    const notificationRepository = getRepository(Notification);
    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopId = shopDataFromToken.id;
      const now = moment();

      // Get the first and last day of the current month
      const startOfCurrentMonth = now.startOf("month").format("YYYY-MM-DD");
      const endOfCurrentMonth = now.endOf("month").format("YYYY-MM-DD");

      // Get the first and last day of the previous month
      const startOfLastMonth = now
        .subtract(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      const endOfLastMonth = now.endOf("month").format("YYYY-MM-DD");

      // Fetch order count for the current month
      const currentMonthNotifications = await notificationRepository
        .createQueryBuilder("notification")
        .where("notification.is_active = :isActive", { isActive: true })
        .andWhere("notification.shop_id = :shopId", { shopId })
        .andWhere("notification.is_read = :isRead", { isRead: false })
        .andWhere("DATE(notification.created_at) BETWEEN :start AND :end", {
          start: startOfCurrentMonth,
          end: endOfCurrentMonth,
        })
        .getCount();

      // Fetch notification count for the previous month
      const lastMonthNotifications = await notificationRepository
        .createQueryBuilder("notification")
        .where("notification.is_active = :isActive", { isActive: true })
        .andWhere("notification.shop_id = :shopId", { shopId })
        .andWhere("notification.is_read = :isRead", { isRead: false })
        .andWhere("DATE(notification.created_at) BETWEEN :start AND :end", {
          start: startOfLastMonth,
          end: endOfLastMonth,
        })
        .getCount();

      // Calculate percentage increase/decrease
      let increase = "0";
      if (lastMonthNotifications > 0) {
        const difference = currentMonthNotifications - lastMonthNotifications;
        increase = ((difference / lastMonthNotifications) * 100).toFixed(2); // Percentage increase
      } else if (currentMonthNotifications > 0) {
        increase = "100"; // If last month had zero orders but current month has some, set increase to 100%
      }

      const notificationUnreadCount = await notificationRepository
        .createQueryBuilder("notification")
        .where({
          is_active: true,
          is_read: false,
          shop_id: shopDataFromToken.id,
        })
        .getCount();

      return handleSuccess({
        total: notificationUnreadCount.toString(),
        increase,
      });
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopGetTotalOrderDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    const orderRepository = getRepository(Order);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopId = shopDataFromToken.id;
      const now = moment();

      // Get the first and last day of the current month
      const startOfCurrentMonth = now.startOf("month").format("YYYY-MM-DD");
      const endOfCurrentMonth = now.endOf("month").format("YYYY-MM-DD");

      // Get the first and last day of the previous month
      const startOfLastMonth = now
        .subtract(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      const endOfLastMonth = now.endOf("month").format("YYYY-MM-DD");

      // Fetch order count for the current month
      const currentMonthOrders = await orderRepository
        .createQueryBuilder("order")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId })
        .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
          start: startOfCurrentMonth,
          end: endOfCurrentMonth,
        })
        .getCount();

      // Fetch order count for the previous month
      const lastMonthOrders = await orderRepository
        .createQueryBuilder("order")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId })
        .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
          start: startOfLastMonth,
          end: endOfLastMonth,
        })
        .getCount();

      // Calculate percentage increase/decrease
      let increase = "0";
      if (lastMonthOrders > 0) {
        const difference = currentMonthOrders - lastMonthOrders;
        increase = ((difference / lastMonthOrders) * 100).toFixed(2); // Percentage increase
      } else if (currentMonthOrders > 0) {
        increase = "100"; // If last month had zero orders but current month has some, set increase to 100%
      }

      const orderCount = await orderRepository
        .createQueryBuilder("order")
        .where({
          is_active: true,
          shop_id: shopDataFromToken.id,
        })
        .getCount();

      return handleSuccess({
        total: orderCount.toString(),
        increase,
      });
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopGetTotalCanceledOrderDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    const orderRepository = getRepository(Order);
    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopId = shopDataFromToken.id;
      const now = moment();

      // Get the first and last day of the current month
      const startOfCurrentMonth = now.startOf("month").format("YYYY-MM-DD");
      const endOfCurrentMonth = now.endOf("month").format("YYYY-MM-DD");

      // Get the first and last day of the previous month
      const startOfLastMonth = now
        .subtract(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      const endOfLastMonth = now.endOf("month").format("YYYY-MM-DD");

      // Fetch order count for the current month
      const currentMonthOrders = await orderRepository
        .createQueryBuilder("order")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId })
        .andWhere("order.order_status = :orderStatus", {
          orderStatus: OrderStatus.CANCELLED,
        })
        .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
          start: startOfCurrentMonth,
          end: endOfCurrentMonth,
        })
        .getCount();

      // Fetch order count for the previous month
      const lastMonthOrders = await orderRepository
        .createQueryBuilder("order")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId })
        .andWhere("order.order_status = :orderStatus", {
          orderStatus: OrderStatus.CANCELLED,
        })
        .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
          start: startOfLastMonth,
          end: endOfLastMonth,
        })
        .getCount();

      // Calculate percentage increase/decrease
      let increase = "0";
      if (lastMonthOrders > 0) {
        const difference = currentMonthOrders - lastMonthOrders;
        increase = ((difference / lastMonthOrders) * 100).toFixed(2); // Percentage increase
      } else if (currentMonthOrders > 0) {
        increase = "100"; // If last month had zero orders but current month has some, set increase to 100%
      }

      const orderCount = await orderRepository
        .createQueryBuilder("order")
        .where({
          is_active: true,
          shop_id: shopDataFromToken.id,
          order_status: OrderStatus.CANCELLED,
          payment_status: PaymentStatus.COMPLETED,
        })
        .getCount();

      return handleSuccess({
        total: orderCount.toString(),
        increase,
      });
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopGetTotalNewOrderDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    const orderRepository = getRepository(Order);
    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopId = shopDataFromToken.id;
      const now = moment();

      // Get the first and last day of the current month
      const startOfCurrentMonth = now.startOf("month").format("YYYY-MM-DD");
      const endOfCurrentMonth = now.endOf("month").format("YYYY-MM-DD");

      // Get the first and last day of the previous month
      const startOfLastMonth = now
        .subtract(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      const endOfLastMonth = now.endOf("month").format("YYYY-MM-DD");

      // Fetch order count for the current month
      const currentMonthOrders = await orderRepository
        .createQueryBuilder("order")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId })
        .andWhere("order.order_status = :orderStatus", {
          orderStatus: OrderStatus.NO_PICKUP,
        })
        .andWhere("order.payment_status = :paymentStatus", {
          paymentStatus: PaymentStatus.COMPLETED,
        })
        .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
          start: startOfCurrentMonth,
          end: endOfCurrentMonth,
        })
        .getCount();

      // Fetch order count for the previous month
      const lastMonthOrders = await orderRepository
        .createQueryBuilder("order")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId })
        .andWhere("order.order_status = :orderStatus", {
          orderStatus: OrderStatus.NO_PICKUP,
        })
        .andWhere("order.payment_status = :paymentStatus", {
          paymentStatus: PaymentStatus.COMPLETED,
        })
        .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
          start: startOfLastMonth,
          end: endOfLastMonth,
        })
        .getCount();

      // Calculate percentage increase/decrease
      let increase = "0";
      if (lastMonthOrders > 0) {
        const difference = currentMonthOrders - lastMonthOrders;
        increase = ((difference / lastMonthOrders) * 100).toFixed(2); // Percentage increase
      } else if (currentMonthOrders > 0) {
        increase = "100"; // If last month had zero orders but current month has some, set increase to 100%
      }

      const orderCount = await orderRepository
        .createQueryBuilder("order")
        .where({
          is_active: true,
          shop_id: shopDataFromToken.id,
          order_status: OrderStatus.NO_PICKUP,
          payment_status: PaymentStatus.COMPLETED,
        })
        .getCount();

      return handleSuccess({
        total: orderCount.toString(),
        increase,
      });
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopGetTotalIncomeDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    const orderRepository = getRepository(Order);
    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopId = shopDataFromToken.id;
      const now = moment();

      // Get the first and last day of the current month
      const startOfCurrentMonth = now.startOf("month").format("YYYY-MM-DD");
      const endOfCurrentMonth = now.endOf("month").format("YYYY-MM-DD");

      // Get the first and last day of the previous month
      const startOfLastMonth = now
        .subtract(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      const endOfLastMonth = now.endOf("month").format("YYYY-MM-DD");

      // Fetch order count for the current month
      interface ICountType {
        netTotalSum: number;
      }
      const currentMonthOrders = (await orderRepository
        .createQueryBuilder("order")
        .select("SUM(order.total_price - order.total_discount)", "netTotalSum")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId })
        .andWhere("order.payment_status = :paymentStatus", {
          paymentStatus: PaymentStatus.COMPLETED,
        })
        .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
          start: startOfCurrentMonth,
          end: endOfCurrentMonth,
        })
        .getRawOne()) as ICountType;

      // Fetch order count for the previous month
      const lastMonthOrders = (await orderRepository
        .createQueryBuilder("order")
        .select("SUM(order.total_price - order.total_discount)", "netTotalSum")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId })
        .andWhere("order.payment_status = :paymentStatus", {
          paymentStatus: PaymentStatus.COMPLETED,
        })
        .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
          start: startOfLastMonth,
          end: endOfLastMonth,
        })
        .getRawOne()) as ICountType;

      // Calculate percentage increase/decrease
      let increase = "0";
      if (lastMonthOrders.netTotalSum > 0) {
        const difference =
          currentMonthOrders.netTotalSum - lastMonthOrders.netTotalSum;
        increase = ((difference / lastMonthOrders.netTotalSum) * 100).toFixed(
          2
        ); // Percentage increase
      } else if (currentMonthOrders.netTotalSum > 0) {
        increase = "100"; // If last month had zero orders but current month has some, set increase to 100%
      }

      const orderSum = await orderRepository
        .createQueryBuilder("order")
        .select("SUM(order.total_price - order.total_discount)", "netTotalSum")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId: shopDataFromToken.id })
        .andWhere("order.payment_status = :paymentStatus", {
          paymentStatus: PaymentStatus.COMPLETED,
        })
        .getRawOne();

      return handleSuccess({
        total: orderSum.netTotalSum.toString(),
        increase,
      });
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopGetTotalTodayIncomeDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    const orderRepository = getRepository(Order);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopId = shopDataFromToken.id;
      const today = moment().format("YYYY-MM-DD");
      const yesterday = moment().subtract(1, "day").format("YYYY-MM-DD");

      // Fetch today's income
      const todayIncome = await orderRepository
        .createQueryBuilder("order")
        .select("SUM(order.total_price - order.total_discount)", "netTotalSum")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId })
        .andWhere("order.payment_status = :paymentStatus", {
          paymentStatus: PaymentStatus.COMPLETED,
        })
        .andWhere("DATE(order.created_at) = :date", { date: today })
        .getRawOne();

      // Fetch yesterday's income
      const yesterdayIncome = await orderRepository
        .createQueryBuilder("order")
        .select("SUM(order.total_price - order.total_discount)", "netTotalSum")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId })
        .andWhere("order.payment_status = :paymentStatus", {
          paymentStatus: PaymentStatus.COMPLETED,
        })
        .andWhere("DATE(order.created_at) = :date", { date: yesterday })
        .getRawOne();

      // Convert to numbers and handle null values
      const todayTotal = parseFloat(todayIncome.netTotalSum) || 0;
      const yesterdayTotal = parseFloat(yesterdayIncome.netTotalSum) || 0;

      // Calculate percentage increase
      let increase = "0";
      if (yesterdayTotal > 0) {
        increase = (
          ((todayTotal - yesterdayTotal) / yesterdayTotal) *
          100
        ).toFixed(2);
      } else if (todayTotal > 0) {
        increase = "100"; // If no sales yesterday but sales today, set increase to 100%
      }

      return handleSuccess({
        total: todayTotal.toString(),
        increase,
      });
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopGetTotalTodayProfitDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    const orderRepository = getRepository(Order);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopId = shopDataFromToken.id;
      const today = moment().format("YYYY-MM-DD");
      const yesterday = moment().subtract(1, "day").format("YYYY-MM-DD");

      // Fetch today's profit
      const todayProfit = await orderRepository
        .createQueryBuilder("order")
        .select("SUM(order.total_price * (order.profit / 100))", "netTotalSum")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId })
        .andWhere("order.payment_status = :paymentStatus", {
          paymentStatus: PaymentStatus.COMPLETED,
        })
        .andWhere("DATE(order.created_at) = :date", { date: today })
        .getRawOne();

      // Fetch yesterday's profit
      const yesterdayProfit = await orderRepository
        .createQueryBuilder("order")
        .select("SUM(order.total_price * (order.profit / 100))", "netTotalSum")
        .where("order.is_active = :isActive", { isActive: true })
        .andWhere("order.shop_id = :shopId", { shopId })
        .andWhere("order.payment_status = :paymentStatus", {
          paymentStatus: PaymentStatus.COMPLETED,
        })
        .andWhere("DATE(order.created_at) = :date", { date: yesterday })
        .getRawOne();

      // Convert to numbers and handle null values
      const todayTotal = parseFloat(todayProfit.netTotalSum) || 0;
      const yesterdayTotal = parseFloat(yesterdayProfit.netTotalSum) || 0;

      // Calculate percentage increase
      let increase = "0";
      if (yesterdayTotal > 0) {
        increase = (
          ((todayTotal - yesterdayTotal) / yesterdayTotal) *
          100
        ).toFixed(2);
      } else if (todayTotal > 0) {
        increase = "100"; // If no profit yesterday but profit today, set increase to 100%
      }

      return handleSuccess({
        total: todayTotal.toString(),
        increase,
      });
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopGetTotalExpenseDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    const transactionHistoryRepository = getRepository(TransactionHistory);
    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );

      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const shopId = shopDataFromToken.id;
      const now = moment();

      // Get the first and last day of the current month
      const startOfCurrentMonth = now.startOf("month").format("YYYY-MM-DD");
      const endOfCurrentMonth = now.endOf("month").format("YYYY-MM-DD");

      // Get the first and last day of the previous month
      const startOfLastMonth = now
        .subtract(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD");
      const endOfLastMonth = now.endOf("month").format("YYYY-MM-DD");

      interface ITransactionHistory {
        totalSum: number;
      }

      // Fetch transactionHistory count for the current month
      const currentMonthtransactionHistorys =
        (await transactionHistoryRepository
          .createQueryBuilder("transaction_history")
          .select("SUM(transaction_history.amount)", "totalSum") // Ensuring correct calculation
          .where("transaction_history.is_active = :isActive", {
            isActive: true,
          })
          .andWhere("transaction_history.identifier = :identifier", {
            identifier: ETransactionHistoryIdentifier.RECHARGE,
          })
          .andWhere(
            "transaction_history.transaction_status = :transaction_status",
            { transaction_status: ETransactionStatus.APPROVED }
          )
          .andWhere(
            "DATE(transaction_history.created_at) BETWEEN :start AND :end",
            {
              start: startOfCurrentMonth,
              end: endOfCurrentMonth,
            }
          )
          .getRawOne()) as ITransactionHistory;

      // Fetch transactionHistory count for the previous month
      const lastMonthtransactionHistorys = (await transactionHistoryRepository
        .createQueryBuilder("transaction_history")
        .select("SUM(transaction_history.amount)", "totalSum") // Ensuring correct calculation
        .where("transaction_history.is_active = :isActive", { isActive: true })
        .andWhere("transaction_history.shop_id = :shopId", { shopId })
        .andWhere("transaction_history.identifier = :identifier", {
          identifier: ETransactionHistoryIdentifier.RECHARGE,
        })
        .andWhere(
          "transaction_history.transaction_status = :transaction_status",
          { transaction_status: ETransactionStatus.APPROVED }
        )
        .andWhere(
          "DATE(transaction_history.created_at) BETWEEN :start AND :end",
          {
            start: startOfLastMonth,
            end: endOfLastMonth,
          }
        )
        .getRawOne()) as ITransactionHistory;

      // Calculate percentage increase/decrease
      let increase = "0";
      if (lastMonthtransactionHistorys.totalSum > 0) {
        const difference =
          currentMonthtransactionHistorys.totalSum -
          lastMonthtransactionHistorys.totalSum;
        increase = (
          (difference / lastMonthtransactionHistorys.totalSum) *
          100
        ).toFixed(2); // Percentage increase
      } else if (currentMonthtransactionHistorys.totalSum > 0) {
        increase = "100"; // If last month had zero transactionHistorys but current month has some, set increase to 100%
      }

      const transactionHistorySum = await transactionHistoryRepository
        .createQueryBuilder("transaction_history")
        .select("SUM(transaction_history.amount)", "totalSum") // Ensuring correct calculation
        .where("transaction_history.is_active = :isActive", { isActive: true })
        .andWhere("transaction_history.shop_id = :shopId", {
          shopId: shopDataFromToken.id,
        })
        .andWhere("transaction_history.identifier = :identifier", {
          identifier: ETransactionHistoryIdentifier.RECHARGE,
        })
        .andWhere(
          "transaction_history.transaction_status = :transaction_status",
          { transaction_status: ETransactionStatus.APPROVED }
        )
        .getRawOne();

      return handleSuccess({
        total: transactionHistorySum.totalSum.toString(),
        increase,
      });
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }
}
