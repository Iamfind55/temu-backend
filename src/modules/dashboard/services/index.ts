import { Request } from "express";
import moment from "moment";
import { config } from "../../../config";
import { getRepository } from "typeorm";
import { Order, OrderStatus, PaymentStatus } from "../../order";
import {
  OrderDashboard,
  ShopDashboard,
  WhereOrderDashboardInput,
} from "../types";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { Notification } from "../../notification";
import { ShopProduct } from "../../shopProduct";
import {
  ETransactionHistoryIdentifier,
  ETransactionStatus,
  TransactionHistory,
} from "../../transactionHistory";
import { Response } from "../../../utils/response/response.types";
import { handleSuccess } from "../../../utils/response/success.handler";
import { handleError } from "../../../utils/response/error.handler";
import { Product } from "../../product";

export class OrderService {
  private static async verifyShopToken(req: Request) {
    const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(req);
    if (!shopDataFromToken) throw new Error(config.message.invalid_token);
    return shopDataFromToken;
  }

  private static async verifyStaffToken(req: Request) {
    const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(
      req
    );
    if (!staffDataFromToken) throw new Error(config.message.invalid_token);
    return staffDataFromToken;
  }

  private static async verifyCustomerToken(req: Request) {
    const customerDataFromToken =
      new AuthMiddlewareService().verifyCustomerToken(req);
    if (!customerDataFromToken) throw new Error(config.message.invalid_token);
    return customerDataFromToken;
  }

  private static getDateRange() {
    const now = moment();
    return {
      startOfCurrentMonth: now.startOf("month").format("YYYY-MM-DD"),
      endOfCurrentMonth: now.endOf("month").format("YYYY-MM-DD"),
      startOfLastMonth: now
        .subtract(1, "month")
        .startOf("month")
        .format("YYYY-MM-DD"),
      endOfLastMonth: now.endOf("month").format("YYYY-MM-DD"),
    };
  }

  private static calculateIncrease(current: number, last: number): string {
    if (last > 0) return (((current - last) / last) * 100).toFixed(2);
    if (current > 0) return "100";
    return "0";
  }

  private static async fetchCount<T>(
    repository: any,
    conditions: Record<string, any>,
    dateRange?: { start: string; end: string }
  ): Promise<number> {
    const query = repository.createQueryBuilder().where(conditions);
    if (dateRange) {
      query.andWhere("DATE(created_at) BETWEEN :start AND :end", dateRange);
    }
    return query.getCount();
  }

  private static async fetchSum<T>(
    repository: any,
    conditions: Record<string, any>,
    sumField: string,
    dateRange?: { start: string; end: string }
  ): Promise<number> {
    const query = repository
      .createQueryBuilder()
      .select(`SUM(${sumField})`, "totalSum")
      .where(conditions);
    if (dateRange) {
      query.andWhere("DATE(updated_at) BETWEEN :start AND :end", dateRange);
    }
    const result = await query.getRawOne();
    return parseFloat(result.totalSum) || 0;
  }

  static async customerGetOrderDashboard({
    where,
    req,
  }: {
    where: WhereOrderDashboardInput;
    req: Request;
  }): Promise<Response<OrderDashboard | null>> {
    try {
      const customerDataFromToken = await this.verifyCustomerToken(req);
      const orderCount = await this.fetchCount(getRepository(Order), {
        is_active: true,
        order_status: where?.order_status,
        customer_id: customerDataFromToken.id,
      });
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
    const shopDataFromToken = await this.verifyShopToken(req);
    return this.getProductDashboard({ shop_id: shopDataFromToken.id });
  }
  static async adminGetProductDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    await this.verifyStaffToken(req);
    return this.getProductDashboard({ shop_id: null });
  }
  static async getProductDashboard({
    shop_id,
  }: {
    shop_id: string | null;
  }): Promise<Response<ShopDashboard | null>> {
    try {
      const {
        startOfCurrentMonth,
        endOfCurrentMonth,
        startOfLastMonth,
        endOfLastMonth,
      } = this.getDateRange();

      let condition: Record<string, any> = { is_active: true };
      if (shop_id) condition.shop_id = shop_id;

      const currentMonthShopProducts = await this.fetchCount(
        shop_id ? getRepository(ShopProduct) : getRepository(Product),
        condition,
        { start: startOfCurrentMonth, end: endOfCurrentMonth }
      );

      const lastMonthShopProducts = await this.fetchCount(
        shop_id ? getRepository(ShopProduct) : getRepository(Product),
        condition,
        { start: startOfLastMonth, end: endOfLastMonth }
      );

      const increase = this.calculateIncrease(
        currentMonthShopProducts,
        lastMonthShopProducts
      );
      const shopProductCount = await this.fetchCount(
        shop_id ? getRepository(ShopProduct) : getRepository(Product),
        condition
      );

      return handleSuccess({ total: shopProductCount.toString(), increase });
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
    try {
      const shopDataFromToken = await this.verifyShopToken(req);
      const {
        startOfCurrentMonth,
        endOfCurrentMonth,
        startOfLastMonth,
        endOfLastMonth,
      } = this.getDateRange();

      const currentMonthNotifications = await this.fetchCount(
        getRepository(Notification),
        {
          is_active: true,
          shop_id: shopDataFromToken.id,
          is_read: false,
        },
        { start: startOfCurrentMonth, end: endOfCurrentMonth }
      );

      const lastMonthNotifications = await this.fetchCount(
        getRepository(Notification),
        {
          is_active: true,
          shop_id: shopDataFromToken.id,
          is_read: false,
        },
        { start: startOfLastMonth, end: endOfLastMonth }
      );

      const increase = this.calculateIncrease(
        currentMonthNotifications,
        lastMonthNotifications
      );
      const notificationUnreadCount = await this.fetchCount(
        getRepository(Notification),
        {
          is_active: true,
          is_read: false,
          shop_id: shopDataFromToken.id,
        }
      );

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
    const shopDataFromToken = await this.verifyShopToken(req);

    return this.getTotalOrderDashboard({ shop_id: shopDataFromToken.id });
  }
  static async adminGetTotalOrderDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    await this.verifyStaffToken(req);

    return this.getTotalOrderDashboard({ shop_id: null });
  }

  static async getTotalOrderDashboard({
    shop_id,
  }: {
    shop_id?: string | null;
  }): Promise<Response<ShopDashboard | null>> {
    try {
      const {
        startOfCurrentMonth,
        endOfCurrentMonth,
        startOfLastMonth,
        endOfLastMonth,
      } = this.getDateRange();

      let condition: Record<string, any> = { is_active: true };
      if (shop_id) condition.shop_id = shop_id;

      const currentMonthOrders = await this.fetchCount(
        getRepository(Order),
        condition,
        { start: startOfCurrentMonth, end: endOfCurrentMonth }
      );

      const lastMonthOrders = await this.fetchCount(
        getRepository(Order),
        condition,
        { start: startOfLastMonth, end: endOfLastMonth }
      );

      const increase = this.calculateIncrease(
        currentMonthOrders,
        lastMonthOrders
      );
      const orderCount = await this.fetchCount(getRepository(Order), condition);

      return handleSuccess({ total: orderCount.toString(), increase });
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
    const shopDataFromToken = await this.verifyShopToken(req);

    return this.getTotalCanceledOrderDashboard({
      shop_id: shopDataFromToken.id,
    });
  }
  static async adminGetTotalCanceledOrderDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    await this.verifyStaffToken(req);

    return this.getTotalCanceledOrderDashboard({
      shop_id: null,
    });
  }

  static async getTotalCanceledOrderDashboard({
    shop_id,
  }: {
    shop_id: string | null;
  }): Promise<Response<ShopDashboard | null>> {
    try {
      const {
        startOfCurrentMonth,
        endOfCurrentMonth,
        startOfLastMonth,
        endOfLastMonth,
      } = this.getDateRange();

      let condition: Record<string, any> = {
        is_active: true,
        order_status: OrderStatus.CANCELLED,
        payment_status: PaymentStatus.COMPLETED,
      };
      if (shop_id) condition.shop_id = shop_id;

      const currentMonthOrders = await this.fetchCount(
        getRepository(Order),
        condition,
        { start: startOfCurrentMonth, end: endOfCurrentMonth }
      );

      const lastMonthOrders = await this.fetchCount(
        getRepository(Order),
        condition,
        { start: startOfLastMonth, end: endOfLastMonth }
      );

      const increase = this.calculateIncrease(
        currentMonthOrders,
        lastMonthOrders
      );
      const orderCount = await this.fetchCount(getRepository(Order), condition);

      return handleSuccess({ total: orderCount.toString(), increase });
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
    const shopDataFromToken = await this.verifyShopToken(req);
    return this.getTotalNewOrderDashboard({ shop_id: shopDataFromToken.id });
  }

  static async adminGetTotalNewOrderDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    await this.verifyStaffToken(req);
    return this.getTotalNewOrderDashboard({ shop_id: null });
  }

  static async getTotalNewOrderDashboard({
    shop_id,
  }: {
    shop_id: string | null;
  }): Promise<Response<ShopDashboard | null>> {
    try {
      const {
        startOfCurrentMonth,
        endOfCurrentMonth,
        startOfLastMonth,
        endOfLastMonth,
      } = this.getDateRange();
      let condition: Record<string, any> = {
        is_active: true,
        order_status: OrderStatus.NO_PICKUP,
        payment_status: PaymentStatus.COMPLETED,
      };

      if (shop_id) condition.shop_id = shop_id;

      const currentMonthOrders = await this.fetchCount(
        getRepository(Order),
        condition,
        { start: startOfCurrentMonth, end: endOfCurrentMonth }
      );

      const lastMonthOrders = await this.fetchCount(
        getRepository(Order),
        condition,
        { start: startOfLastMonth, end: endOfLastMonth }
      );

      const increase = this.calculateIncrease(
        currentMonthOrders,
        lastMonthOrders
      );
      const orderCount = await this.fetchCount(getRepository(Order), condition);

      return handleSuccess({ total: orderCount.toString(), increase });
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
    const shopDataFromToken = await this.verifyShopToken(req);
    return this.getTotalIncomeDashboard({ shop_id: shopDataFromToken.id });
  }

  static async adminGetTotalIncomeDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    await this.verifyStaffToken(req);
    return this.getTotalIncomeDashboard({ shop_id: null });
  }

  static async getTotalIncomeDashboard({
    shop_id,
  }: {
    shop_id: string | null;
  }): Promise<Response<ShopDashboard | null>> {
    try {
      const {
        startOfCurrentMonth,
        endOfCurrentMonth,
        startOfLastMonth,
        endOfLastMonth,
      } = this.getDateRange();

      let condition: Record<string, any> = {
        is_active: true,
        payment_status: PaymentStatus.COMPLETED,
        order_status: OrderStatus.SUCCESS,
      };
      if (shop_id) condition.shop_id = shop_id;

      const currentMonthIncome = await this.fetchSum(
        getRepository(Order),
        condition,
        "total_price - total_discount",
        { start: startOfCurrentMonth, end: endOfCurrentMonth }
      );

      const lastMonthIncome = await this.fetchSum(
        getRepository(Order),
        condition,
        "total_price - total_discount",
        { start: startOfLastMonth, end: endOfLastMonth }
      );

      const increase = this.calculateIncrease(
        currentMonthIncome,
        lastMonthIncome
      );
      const totalIncome = await this.fetchSum(
        getRepository(Order),
        condition,
        "total_price - total_discount"
      );

      return handleSuccess({ total: totalIncome.toString(), increase });
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
    const shopDataFromToken = await this.verifyShopToken(req);
    return this.getTotalTodayIncomeDashboard({ shop_id: shopDataFromToken.id });
  }
  static async adminGetTotalTodayIncomeDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    await this.verifyStaffToken(req);
    return this.getTotalTodayIncomeDashboard({ shop_id: null });
  }

  static async getTotalTodayIncomeDashboard({
    shop_id,
  }: {
    shop_id: string | null;
  }): Promise<Response<ShopDashboard | null>> {
    try {
      const today = moment().format("YYYY-MM-DD");
      const yesterday = moment().subtract(1, "day").format("YYYY-MM-DD");

      let condition: Record<string, any> = {
        is_active: true,
        payment_status: PaymentStatus.COMPLETED,
        order_status: OrderStatus.SUCCESS,
      };
      if (shop_id) condition.shop_id = shop_id;

      const todayIncome = await this.fetchSum(
        getRepository(Order),
        condition,
        "total_price - total_discount",
        { start: today, end: today }
      );

      const yesterdayIncome = await this.fetchSum(
        getRepository(Order),
        condition,
        "total_price - total_discount",
        { start: yesterday, end: yesterday }
      );

      const increase = this.calculateIncrease(todayIncome, yesterdayIncome);
      return handleSuccess({ total: todayIncome.toString(), increase });
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
    const shopDataFromToken = await this.verifyShopToken(req);
    return this.getTotalTodayProfitDashboard({ shop_id: shopDataFromToken.id });
  }
  static async adminGetTotalTodayProfitDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    await this.verifyStaffToken(req);
    return this.getTotalTodayProfitDashboard({ shop_id: null });
  }

  static async getTotalTodayProfitDashboard({
    shop_id,
  }: {
    shop_id: string | null;
  }): Promise<Response<ShopDashboard | null>> {
    try {
      const today = moment().format("YYYY-MM-DD");
      const yesterday = moment().subtract(1, "day").format("YYYY-MM-DD");

      let condition: Record<string, any> = {
        is_active: true,
        payment_status: PaymentStatus.COMPLETED,
        order_status: OrderStatus.SUCCESS,
      };
      if (shop_id) condition.shop_id = shop_id;

      const todayProfit = await this.fetchSum(
        getRepository(Order),
        condition,
        "total_price * (profit / 100)",
        { start: today, end: today }
      );

      const yesterdayProfit = await this.fetchSum(
        getRepository(Order),
        condition,
        "total_price * (profit / 100)",
        { start: yesterday, end: yesterday }
      );

      const increase = this.calculateIncrease(todayProfit, yesterdayProfit);
      return handleSuccess({ total: todayProfit.toString(), increase });
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
    const shopDataFromToken = await this.verifyShopToken(req);
    return this.getTotalExpenseDashboard({ shop_id: shopDataFromToken.id });
  }
  static async adminGetTotalExpenseDashboard({
    req,
  }: {
    req: Request;
  }): Promise<Response<ShopDashboard | null>> {
    await this.verifyStaffToken(req);
    return this.getTotalExpenseDashboard({ shop_id: null });
  }

  static async getTotalExpenseDashboard({
    shop_id,
  }: {
    shop_id: string | null;
  }): Promise<Response<ShopDashboard | null>> {
    try {
      const {
        startOfCurrentMonth,
        endOfCurrentMonth,
        startOfLastMonth,
        endOfLastMonth,
      } = this.getDateRange();

      let condition: Record<string, any> = {
        is_active: true,
        identifier: ETransactionHistoryIdentifier.RECHARGE,
        transaction_status: ETransactionStatus.APPROVED,
      };
      if (shop_id) condition.shop_id = shop_id;

      const currentMonthExpense = await this.fetchSum(
        getRepository(TransactionHistory),
        condition,
        "amount",
        { start: startOfCurrentMonth, end: endOfCurrentMonth }
      );

      const lastMonthExpense = await this.fetchSum(
        getRepository(TransactionHistory),
        condition,
        "amount",
        { start: startOfLastMonth, end: endOfLastMonth }
      );

      const increase = this.calculateIncrease(
        currentMonthExpense,
        lastMonthExpense
      );
      const totalExpense = await this.fetchSum(
        getRepository(TransactionHistory),
        condition,
        "amount"
      );

      return handleSuccess({ total: totalExpense.toString(), increase });
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }
}
