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
const moment_1 = __importDefault(require("moment"));
const config_1 = require("../../../config");
const error_handler_1 = require("../../../utils/response/error.handler");
const success_handler_1 = require("../../../utils/response/success.handler");
const typeorm_1 = require("typeorm");
const order_1 = require("../../order");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const notification_1 = require("../../notification");
const shopProduct_1 = require("../../shopProduct");
const transactionHistory_1 = require("../../transactionHistory");
class OrderService {
    static customerGetOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, req, }) {
            const orderDetailRepository = (0, typeorm_1.getRepository)(order_1.Order);
            try {
                const customerDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
                if (!customerDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const orderCount = yield orderDetailRepository
                    .createQueryBuilder("order")
                    .where({ is_active: true, order_status: where === null || where === void 0 ? void 0 : where.order_status })
                    .andWhere({ customer_id: customerDataFromToken.id })
                    .getCount();
                return (0, success_handler_1.handleSuccess)({
                    total_order: orderCount,
                    order_status: where === null || where === void 0 ? void 0 : where.order_status,
                });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetProductDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const shopProductRepository = (0, typeorm_1.getRepository)(shopProduct_1.ShopProduct);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopId = shopDataFromToken.id;
                const now = (0, moment_1.default)();
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
                const currentMonthShopProducts = yield shopProductRepository
                    .createQueryBuilder("shop_product")
                    .where("shop_product.is_active = :isActive", { isActive: true })
                    .andWhere("shop_product.shop_id = :shopId", { shopId })
                    .andWhere("DATE(shop_product.created_at) BETWEEN :start AND :end", {
                    start: startOfCurrentMonth,
                    end: endOfCurrentMonth,
                })
                    .getCount();
                // Fetch shop_product count for the previous month
                const lastMonthShopProducts = yield shopProductRepository
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
                }
                else if (currentMonthShopProducts > 0) {
                    increase = "100"; // If last month had zero orders but current month has some, set increase to 100%
                }
                const shopProductCount = yield shopProductRepository
                    .createQueryBuilder("shop_product")
                    .where({ is_active: true, shop_id: shopDataFromToken.id })
                    .getCount();
                return (0, success_handler_1.handleSuccess)({
                    total: shopProductCount.toString(),
                    increase: increase,
                });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetUnreadMessageDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const notificationRepository = (0, typeorm_1.getRepository)(notification_1.Notification);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopId = shopDataFromToken.id;
                const now = (0, moment_1.default)();
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
                const currentMonthNotifications = yield notificationRepository
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
                const lastMonthNotifications = yield notificationRepository
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
                }
                else if (currentMonthNotifications > 0) {
                    increase = "100"; // If last month had zero orders but current month has some, set increase to 100%
                }
                const notificationUnreadCount = yield notificationRepository
                    .createQueryBuilder("notification")
                    .where({
                    is_active: true,
                    is_read: false,
                    shop_id: shopDataFromToken.id,
                })
                    .getCount();
                return (0, success_handler_1.handleSuccess)({
                    total: notificationUnreadCount.toString(),
                    increase,
                });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(order_1.Order);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopId = shopDataFromToken.id;
                const now = (0, moment_1.default)();
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
                const currentMonthOrders = yield orderRepository
                    .createQueryBuilder("order")
                    .where("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.shop_id = :shopId", { shopId })
                    .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
                    start: startOfCurrentMonth,
                    end: endOfCurrentMonth,
                })
                    .getCount();
                // Fetch order count for the previous month
                const lastMonthOrders = yield orderRepository
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
                }
                else if (currentMonthOrders > 0) {
                    increase = "100"; // If last month had zero orders but current month has some, set increase to 100%
                }
                const orderCount = yield orderRepository
                    .createQueryBuilder("order")
                    .where({
                    is_active: true,
                    shop_id: shopDataFromToken.id,
                })
                    .getCount();
                return (0, success_handler_1.handleSuccess)({
                    total: orderCount.toString(),
                    increase,
                });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalCanceledOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(order_1.Order);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopId = shopDataFromToken.id;
                const now = (0, moment_1.default)();
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
                const currentMonthOrders = yield orderRepository
                    .createQueryBuilder("order")
                    .where("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.shop_id = :shopId", { shopId })
                    .andWhere("order.order_status = :orderStatus", {
                    orderStatus: order_1.OrderStatus.CANCELLED,
                })
                    .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
                    start: startOfCurrentMonth,
                    end: endOfCurrentMonth,
                })
                    .getCount();
                // Fetch order count for the previous month
                const lastMonthOrders = yield orderRepository
                    .createQueryBuilder("order")
                    .where("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.shop_id = :shopId", { shopId })
                    .andWhere("order.order_status = :orderStatus", {
                    orderStatus: order_1.OrderStatus.CANCELLED,
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
                }
                else if (currentMonthOrders > 0) {
                    increase = "100"; // If last month had zero orders but current month has some, set increase to 100%
                }
                const orderCount = yield orderRepository
                    .createQueryBuilder("order")
                    .where({
                    is_active: true,
                    shop_id: shopDataFromToken.id,
                    order_status: order_1.OrderStatus.CANCELLED,
                    payment_status: order_1.PaymentStatus.COMPLETED,
                })
                    .getCount();
                return (0, success_handler_1.handleSuccess)({
                    total: orderCount.toString(),
                    increase,
                });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalNewOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(order_1.Order);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopId = shopDataFromToken.id;
                const now = (0, moment_1.default)();
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
                const currentMonthOrders = yield orderRepository
                    .createQueryBuilder("order")
                    .where("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.shop_id = :shopId", { shopId })
                    .andWhere("order.order_status = :orderStatus", {
                    orderStatus: order_1.OrderStatus.NO_PICKUP,
                })
                    .andWhere("order.payment_status = :paymentStatus", {
                    paymentStatus: order_1.PaymentStatus.COMPLETED,
                })
                    .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
                    start: startOfCurrentMonth,
                    end: endOfCurrentMonth,
                })
                    .getCount();
                // Fetch order count for the previous month
                const lastMonthOrders = yield orderRepository
                    .createQueryBuilder("order")
                    .where("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.shop_id = :shopId", { shopId })
                    .andWhere("order.order_status = :orderStatus", {
                    orderStatus: order_1.OrderStatus.NO_PICKUP,
                })
                    .andWhere("order.payment_status = :paymentStatus", {
                    paymentStatus: order_1.PaymentStatus.COMPLETED,
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
                }
                else if (currentMonthOrders > 0) {
                    increase = "100"; // If last month had zero orders but current month has some, set increase to 100%
                }
                const orderCount = yield orderRepository
                    .createQueryBuilder("order")
                    .where({
                    is_active: true,
                    shop_id: shopDataFromToken.id,
                    order_status: order_1.OrderStatus.NO_PICKUP,
                    payment_status: order_1.PaymentStatus.COMPLETED,
                })
                    .getCount();
                return (0, success_handler_1.handleSuccess)({
                    total: orderCount.toString(),
                    increase,
                });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalIncomeDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(order_1.Order);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopId = shopDataFromToken.id;
                const now = (0, moment_1.default)();
                // Get the first and last day of the current month
                const startOfCurrentMonth = now.startOf("month").format("YYYY-MM-DD");
                const endOfCurrentMonth = now.endOf("month").format("YYYY-MM-DD");
                // Get the first and last day of the previous month
                const startOfLastMonth = now
                    .subtract(1, "month")
                    .startOf("month")
                    .format("YYYY-MM-DD");
                const endOfLastMonth = now.endOf("month").format("YYYY-MM-DD");
                const currentMonthOrders = (yield orderRepository
                    .createQueryBuilder("order")
                    .select("SUM(order.total_price - order.total_discount)", "netTotalSum")
                    .where("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.shop_id = :shopId", { shopId })
                    .andWhere("order.payment_status = :paymentStatus", {
                    paymentStatus: order_1.PaymentStatus.COMPLETED,
                })
                    .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
                    start: startOfCurrentMonth,
                    end: endOfCurrentMonth,
                })
                    .getRawOne());
                // Fetch order count for the previous month
                const lastMonthOrders = (yield orderRepository
                    .createQueryBuilder("order")
                    .select("SUM(order.total_price - order.total_discount)", "netTotalSum")
                    .where("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.shop_id = :shopId", { shopId })
                    .andWhere("order.payment_status = :paymentStatus", {
                    paymentStatus: order_1.PaymentStatus.COMPLETED,
                })
                    .andWhere("DATE(order.created_at) BETWEEN :start AND :end", {
                    start: startOfLastMonth,
                    end: endOfLastMonth,
                })
                    .getRawOne());
                // Calculate percentage increase/decrease
                let increase = "0";
                if (lastMonthOrders.netTotalSum > 0) {
                    const difference = currentMonthOrders.netTotalSum - lastMonthOrders.netTotalSum;
                    increase = ((difference / lastMonthOrders.netTotalSum) * 100).toFixed(2); // Percentage increase
                }
                else if (currentMonthOrders.netTotalSum > 0) {
                    increase = "100"; // If last month had zero orders but current month has some, set increase to 100%
                }
                const orderSum = yield orderRepository
                    .createQueryBuilder("order")
                    .select("SUM(order.total_price - order.total_discount)", "netTotalSum")
                    .where("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.shop_id = :shopId", { shopId: shopDataFromToken.id })
                    .andWhere("order.payment_status = :paymentStatus", {
                    paymentStatus: order_1.PaymentStatus.COMPLETED,
                })
                    .getRawOne();
                return (0, success_handler_1.handleSuccess)({
                    total: orderSum.netTotalSum.toString(),
                    increase,
                });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalTodayIncomeDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(order_1.Order);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopId = shopDataFromToken.id;
                const today = (0, moment_1.default)().format("YYYY-MM-DD");
                const yesterday = (0, moment_1.default)().subtract(1, "day").format("YYYY-MM-DD");
                // Fetch today's income
                const todayIncome = yield orderRepository
                    .createQueryBuilder("order")
                    .select("SUM(order.total_price - order.total_discount)", "netTotalSum")
                    .where("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.shop_id = :shopId", { shopId })
                    .andWhere("order.payment_status = :paymentStatus", {
                    paymentStatus: order_1.PaymentStatus.COMPLETED,
                })
                    .andWhere("DATE(order.created_at) = :date", { date: today })
                    .getRawOne();
                // Fetch yesterday's income
                const yesterdayIncome = yield orderRepository
                    .createQueryBuilder("order")
                    .select("SUM(order.total_price - order.total_discount)", "netTotalSum")
                    .where("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.shop_id = :shopId", { shopId })
                    .andWhere("order.payment_status = :paymentStatus", {
                    paymentStatus: order_1.PaymentStatus.COMPLETED,
                })
                    .andWhere("DATE(order.created_at) = :date", { date: yesterday })
                    .getRawOne();
                // Convert to numbers and handle null values
                const todayTotal = parseFloat(todayIncome.netTotalSum) || 0;
                const yesterdayTotal = parseFloat(yesterdayIncome.netTotalSum) || 0;
                // Calculate percentage increase
                let increase = "0";
                if (yesterdayTotal > 0) {
                    increase = (((todayTotal - yesterdayTotal) / yesterdayTotal) *
                        100).toFixed(2);
                }
                else if (todayTotal > 0) {
                    increase = "100"; // If no sales yesterday but sales today, set increase to 100%
                }
                return (0, success_handler_1.handleSuccess)({
                    total: todayTotal.toString(),
                    increase,
                });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalTodayProfitDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const orderRepository = (0, typeorm_1.getRepository)(order_1.Order);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopId = shopDataFromToken.id;
                const today = (0, moment_1.default)().format("YYYY-MM-DD");
                const yesterday = (0, moment_1.default)().subtract(1, "day").format("YYYY-MM-DD");
                // Fetch today's profit
                const todayProfit = yield orderRepository
                    .createQueryBuilder("order")
                    .select("SUM(order.total_price * (order.profit / 100))", "netTotalSum")
                    .where("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.shop_id = :shopId", { shopId })
                    .andWhere("order.payment_status = :paymentStatus", {
                    paymentStatus: order_1.PaymentStatus.COMPLETED,
                })
                    .andWhere("DATE(order.created_at) = :date", { date: today })
                    .getRawOne();
                // Fetch yesterday's profit
                const yesterdayProfit = yield orderRepository
                    .createQueryBuilder("order")
                    .select("SUM(order.total_price * (order.profit / 100))", "netTotalSum")
                    .where("order.is_active = :isActive", { isActive: true })
                    .andWhere("order.shop_id = :shopId", { shopId })
                    .andWhere("order.payment_status = :paymentStatus", {
                    paymentStatus: order_1.PaymentStatus.COMPLETED,
                })
                    .andWhere("DATE(order.created_at) = :date", { date: yesterday })
                    .getRawOne();
                // Convert to numbers and handle null values
                const todayTotal = parseFloat(todayProfit.netTotalSum) || 0;
                const yesterdayTotal = parseFloat(yesterdayProfit.netTotalSum) || 0;
                // Calculate percentage increase
                let increase = "0";
                if (yesterdayTotal > 0) {
                    increase = (((todayTotal - yesterdayTotal) / yesterdayTotal) *
                        100).toFixed(2);
                }
                else if (todayTotal > 0) {
                    increase = "100"; // If no profit yesterday but profit today, set increase to 100%
                }
                return (0, success_handler_1.handleSuccess)({
                    total: todayTotal.toString(),
                    increase,
                });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalExpenseDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const transactionHistoryRepository = (0, typeorm_1.getRepository)(transactionHistory_1.TransactionHistory);
            try {
                const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
                if (!shopDataFromToken)
                    return (0, error_handler_1.handleError)(config_1.config.message.invalid_token, 404, null);
                const shopId = shopDataFromToken.id;
                const now = (0, moment_1.default)();
                // Get the first and last day of the current month
                const startOfCurrentMonth = now.startOf("month").format("YYYY-MM-DD");
                const endOfCurrentMonth = now.endOf("month").format("YYYY-MM-DD");
                // Get the first and last day of the previous month
                const startOfLastMonth = now
                    .subtract(1, "month")
                    .startOf("month")
                    .format("YYYY-MM-DD");
                const endOfLastMonth = now.endOf("month").format("YYYY-MM-DD");
                // Fetch transactionHistory count for the current month
                const currentMonthtransactionHistorys = (yield transactionHistoryRepository
                    .createQueryBuilder("transaction_history")
                    .select("SUM(transaction_history.amount)", "totalSum") // Ensuring correct calculation
                    .where("transaction_history.is_active = :isActive", {
                    isActive: true,
                })
                    .andWhere("transaction_history.identifier = :identifier", {
                    identifier: transactionHistory_1.ETransactionHistoryIdentifier.RECHARGE,
                })
                    .andWhere("transaction_history.transaction_status = :transaction_status", { transaction_status: transactionHistory_1.ETransactionStatus.APPROVED })
                    .andWhere("DATE(transaction_history.created_at) BETWEEN :start AND :end", {
                    start: startOfCurrentMonth,
                    end: endOfCurrentMonth,
                })
                    .getRawOne());
                // Fetch transactionHistory count for the previous month
                const lastMonthtransactionHistorys = (yield transactionHistoryRepository
                    .createQueryBuilder("transaction_history")
                    .select("SUM(transaction_history.amount)", "totalSum") // Ensuring correct calculation
                    .where("transaction_history.is_active = :isActive", { isActive: true })
                    .andWhere("transaction_history.shop_id = :shopId", { shopId })
                    .andWhere("transaction_history.identifier = :identifier", {
                    identifier: transactionHistory_1.ETransactionHistoryIdentifier.RECHARGE,
                })
                    .andWhere("transaction_history.transaction_status = :transaction_status", { transaction_status: transactionHistory_1.ETransactionStatus.APPROVED })
                    .andWhere("DATE(transaction_history.created_at) BETWEEN :start AND :end", {
                    start: startOfLastMonth,
                    end: endOfLastMonth,
                })
                    .getRawOne());
                // Calculate percentage increase/decrease
                let increase = "0";
                if (lastMonthtransactionHistorys.totalSum > 0) {
                    const difference = currentMonthtransactionHistorys.totalSum -
                        lastMonthtransactionHistorys.totalSum;
                    increase = ((difference / lastMonthtransactionHistorys.totalSum) *
                        100).toFixed(2); // Percentage increase
                }
                else if (currentMonthtransactionHistorys.totalSum > 0) {
                    increase = "100"; // If last month had zero transactionHistorys but current month has some, set increase to 100%
                }
                const transactionHistorySum = yield transactionHistoryRepository
                    .createQueryBuilder("transaction_history")
                    .select("SUM(transaction_history.amount)", "totalSum") // Ensuring correct calculation
                    .where("transaction_history.is_active = :isActive", { isActive: true })
                    .andWhere("transaction_history.shop_id = :shopId", {
                    shopId: shopDataFromToken.id,
                })
                    .andWhere("transaction_history.identifier = :identifier", {
                    identifier: transactionHistory_1.ETransactionHistoryIdentifier.RECHARGE,
                })
                    .andWhere("transaction_history.transaction_status = :transaction_status", { transaction_status: transactionHistory_1.ETransactionStatus.APPROVED })
                    .getRawOne();
                return (0, success_handler_1.handleSuccess)({
                    total: transactionHistorySum.totalSum.toString(),
                    increase,
                });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
}
exports.OrderService = OrderService;
