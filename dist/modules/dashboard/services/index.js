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
const typeorm_1 = require("typeorm");
const order_1 = require("../../order");
const auth_middleware_1 = require("../../../middlewares/auth.middleware");
const notification_1 = require("../../notification");
const shopProduct_1 = require("../../shopProduct");
const transactionHistory_1 = require("../../transactionHistory");
const success_handler_1 = require("../../../utils/response/success.handler");
const error_handler_1 = require("../../../utils/response/error.handler");
const product_1 = require("../../product");
class OrderService {
    static verifyShopToken(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const shopDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyShopToken(req);
            if (!shopDataFromToken)
                throw new Error(config_1.config.message.invalid_token);
            return shopDataFromToken;
        });
    }
    static verifyStaffToken(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const staffDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyStaffToken(req);
            if (!staffDataFromToken)
                throw new Error(config_1.config.message.invalid_token);
            return staffDataFromToken;
        });
    }
    static verifyCustomerToken(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const customerDataFromToken = new auth_middleware_1.AuthMiddlewareService().verifyCustomerToken(req);
            if (!customerDataFromToken)
                throw new Error(config_1.config.message.invalid_token);
            return customerDataFromToken;
        });
    }
    static getDateRange() {
        const now = (0, moment_1.default)();
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
    static calculateIncrease(current, last) {
        if (last > 0)
            return (((current - last) / last) * 100).toFixed(2);
        if (current > 0)
            return "100";
        return "0";
    }
    static fetchCount(repository, conditions, dateRange) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = repository.createQueryBuilder().where(conditions);
            if (dateRange) {
                query.andWhere("DATE(created_at) BETWEEN :start AND :end", dateRange);
            }
            return query.getCount();
        });
    }
    static fetchSum(repository, conditions, sumField, dateRange) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = repository
                .createQueryBuilder()
                .select(`SUM(${sumField})`, "totalSum")
                .where(conditions);
            if (dateRange) {
                query.andWhere("DATE(updated_at) BETWEEN :start AND :end", dateRange);
            }
            const result = yield query.getRawOne();
            return parseFloat(result.totalSum) || 0;
        });
    }
    static customerGetOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ where, req, }) {
            try {
                const customerDataFromToken = yield this.verifyCustomerToken(req);
                const orderCount = yield this.fetchCount((0, typeorm_1.getRepository)(order_1.Order), {
                    is_active: true,
                    order_status: where === null || where === void 0 ? void 0 : where.order_status,
                    customer_id: customerDataFromToken.id,
                });
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
            const shopDataFromToken = yield this.verifyShopToken(req);
            return this.getProductDashboard({ shop_id: shopDataFromToken.id });
        });
    }
    static adminGetProductDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            yield this.verifyStaffToken(req);
            return this.getProductDashboard({ shop_id: null });
        });
    }
    static getProductDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ shop_id, }) {
            try {
                const { startOfCurrentMonth, endOfCurrentMonth, startOfLastMonth, endOfLastMonth, } = this.getDateRange();
                let condition = { is_active: true };
                if (shop_id)
                    condition.shop_id = shop_id;
                const currentMonthShopProducts = yield this.fetchCount(shop_id ? (0, typeorm_1.getRepository)(shopProduct_1.ShopProduct) : (0, typeorm_1.getRepository)(product_1.Product), condition, { start: startOfCurrentMonth, end: endOfCurrentMonth });
                const lastMonthShopProducts = yield this.fetchCount(shop_id ? (0, typeorm_1.getRepository)(shopProduct_1.ShopProduct) : (0, typeorm_1.getRepository)(product_1.Product), condition, { start: startOfLastMonth, end: endOfLastMonth });
                const increase = this.calculateIncrease(currentMonthShopProducts, lastMonthShopProducts);
                const shopProductCount = yield this.fetchCount(shop_id ? (0, typeorm_1.getRepository)(shopProduct_1.ShopProduct) : (0, typeorm_1.getRepository)(product_1.Product), condition);
                return (0, success_handler_1.handleSuccess)({ total: shopProductCount.toString(), increase });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetUnreadMessageDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            try {
                const shopDataFromToken = yield this.verifyShopToken(req);
                const { startOfCurrentMonth, endOfCurrentMonth, startOfLastMonth, endOfLastMonth, } = this.getDateRange();
                const currentMonthNotifications = yield this.fetchCount((0, typeorm_1.getRepository)(notification_1.Notification), {
                    is_active: true,
                    shop_id: shopDataFromToken.id,
                    is_read: false,
                }, { start: startOfCurrentMonth, end: endOfCurrentMonth });
                const lastMonthNotifications = yield this.fetchCount((0, typeorm_1.getRepository)(notification_1.Notification), {
                    is_active: true,
                    shop_id: shopDataFromToken.id,
                    is_read: false,
                }, { start: startOfLastMonth, end: endOfLastMonth });
                const increase = this.calculateIncrease(currentMonthNotifications, lastMonthNotifications);
                const notificationUnreadCount = yield this.fetchCount((0, typeorm_1.getRepository)(notification_1.Notification), {
                    is_active: true,
                    is_read: false,
                    shop_id: shopDataFromToken.id,
                });
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
            const shopDataFromToken = yield this.verifyShopToken(req);
            return this.getTotalOrderDashboard({ shop_id: shopDataFromToken.id });
        });
    }
    static adminGetTotalOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            yield this.verifyStaffToken(req);
            return this.getTotalOrderDashboard({ shop_id: null });
        });
    }
    static getTotalOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ shop_id, }) {
            try {
                const { startOfCurrentMonth, endOfCurrentMonth, startOfLastMonth, endOfLastMonth, } = this.getDateRange();
                let condition = { is_active: true };
                if (shop_id)
                    condition.shop_id = shop_id;
                const currentMonthOrders = yield this.fetchCount((0, typeorm_1.getRepository)(order_1.Order), condition, { start: startOfCurrentMonth, end: endOfCurrentMonth });
                const lastMonthOrders = yield this.fetchCount((0, typeorm_1.getRepository)(order_1.Order), condition, { start: startOfLastMonth, end: endOfLastMonth });
                const increase = this.calculateIncrease(currentMonthOrders, lastMonthOrders);
                const orderCount = yield this.fetchCount((0, typeorm_1.getRepository)(order_1.Order), condition);
                return (0, success_handler_1.handleSuccess)({ total: orderCount.toString(), increase });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalCanceledOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const shopDataFromToken = yield this.verifyShopToken(req);
            return this.getTotalCanceledOrderDashboard({
                shop_id: shopDataFromToken.id,
            });
        });
    }
    static adminGetTotalCanceledOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            yield this.verifyStaffToken(req);
            return this.getTotalCanceledOrderDashboard({
                shop_id: null,
            });
        });
    }
    static getTotalCanceledOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ shop_id, }) {
            try {
                const { startOfCurrentMonth, endOfCurrentMonth, startOfLastMonth, endOfLastMonth, } = this.getDateRange();
                let condition = {
                    is_active: true,
                    order_status: order_1.OrderStatus.CANCELLED,
                    payment_status: order_1.PaymentStatus.COMPLETED,
                };
                if (shop_id)
                    condition.shop_id = shop_id;
                const currentMonthOrders = yield this.fetchCount((0, typeorm_1.getRepository)(order_1.Order), condition, { start: startOfCurrentMonth, end: endOfCurrentMonth });
                const lastMonthOrders = yield this.fetchCount((0, typeorm_1.getRepository)(order_1.Order), condition, { start: startOfLastMonth, end: endOfLastMonth });
                const increase = this.calculateIncrease(currentMonthOrders, lastMonthOrders);
                const orderCount = yield this.fetchCount((0, typeorm_1.getRepository)(order_1.Order), condition);
                return (0, success_handler_1.handleSuccess)({ total: orderCount.toString(), increase });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalNewOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const shopDataFromToken = yield this.verifyShopToken(req);
            return this.getTotalNewOrderDashboard({ shop_id: shopDataFromToken.id });
        });
    }
    static adminGetTotalNewOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            yield this.verifyStaffToken(req);
            return this.getTotalNewOrderDashboard({ shop_id: null });
        });
    }
    static getTotalNewOrderDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ shop_id, }) {
            try {
                const { startOfCurrentMonth, endOfCurrentMonth, startOfLastMonth, endOfLastMonth, } = this.getDateRange();
                let condition = {
                    is_active: true,
                    order_status: order_1.OrderStatus.NO_PICKUP,
                    payment_status: order_1.PaymentStatus.COMPLETED,
                };
                if (shop_id)
                    condition.shop_id = shop_id;
                const currentMonthOrders = yield this.fetchCount((0, typeorm_1.getRepository)(order_1.Order), condition, { start: startOfCurrentMonth, end: endOfCurrentMonth });
                const lastMonthOrders = yield this.fetchCount((0, typeorm_1.getRepository)(order_1.Order), condition, { start: startOfLastMonth, end: endOfLastMonth });
                const increase = this.calculateIncrease(currentMonthOrders, lastMonthOrders);
                const orderCount = yield this.fetchCount((0, typeorm_1.getRepository)(order_1.Order), condition);
                return (0, success_handler_1.handleSuccess)({ total: orderCount.toString(), increase });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalIncomeDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const shopDataFromToken = yield this.verifyShopToken(req);
            return this.getTotalIncomeDashboard({ shop_id: shopDataFromToken.id });
        });
    }
    static adminGetTotalIncomeDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            yield this.verifyStaffToken(req);
            return this.getTotalIncomeDashboard({ shop_id: null });
        });
    }
    static getTotalIncomeDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ shop_id, }) {
            try {
                const { startOfCurrentMonth, endOfCurrentMonth, startOfLastMonth, endOfLastMonth, } = this.getDateRange();
                let condition = {
                    is_active: true,
                    payment_status: order_1.PaymentStatus.COMPLETED,
                    order_status: order_1.OrderStatus.SUCCESS,
                };
                if (shop_id)
                    condition.shop_id = shop_id;
                const currentMonthIncome = yield this.fetchSum((0, typeorm_1.getRepository)(order_1.Order), condition, "total_price - total_discount", { start: startOfCurrentMonth, end: endOfCurrentMonth });
                const lastMonthIncome = yield this.fetchSum((0, typeorm_1.getRepository)(order_1.Order), condition, "total_price - total_discount", { start: startOfLastMonth, end: endOfLastMonth });
                const increase = this.calculateIncrease(currentMonthIncome, lastMonthIncome);
                const totalIncome = yield this.fetchSum((0, typeorm_1.getRepository)(order_1.Order), condition, "total_price - total_discount");
                return (0, success_handler_1.handleSuccess)({ total: totalIncome.toString(), increase });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalTodayIncomeDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const shopDataFromToken = yield this.verifyShopToken(req);
            return this.getTotalTodayIncomeDashboard({ shop_id: shopDataFromToken.id });
        });
    }
    static adminGetTotalTodayIncomeDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            yield this.verifyStaffToken(req);
            return this.getTotalTodayIncomeDashboard({ shop_id: null });
        });
    }
    static getTotalTodayIncomeDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ shop_id, }) {
            try {
                const today = (0, moment_1.default)().format("YYYY-MM-DD");
                const yesterday = (0, moment_1.default)().subtract(1, "day").format("YYYY-MM-DD");
                let condition = {
                    is_active: true,
                    payment_status: order_1.PaymentStatus.COMPLETED,
                    order_status: order_1.OrderStatus.SUCCESS,
                };
                if (shop_id)
                    condition.shop_id = shop_id;
                const todayIncome = yield this.fetchSum((0, typeorm_1.getRepository)(order_1.Order), condition, "total_price - total_discount", { start: today, end: today });
                const yesterdayIncome = yield this.fetchSum((0, typeorm_1.getRepository)(order_1.Order), condition, "total_price - total_discount", { start: yesterday, end: yesterday });
                const increase = this.calculateIncrease(todayIncome, yesterdayIncome);
                return (0, success_handler_1.handleSuccess)({ total: todayIncome.toString(), increase });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalTodayProfitDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const shopDataFromToken = yield this.verifyShopToken(req);
            return this.getTotalTodayProfitDashboard({ shop_id: shopDataFromToken.id });
        });
    }
    static adminGetTotalTodayProfitDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            yield this.verifyStaffToken(req);
            return this.getTotalTodayProfitDashboard({ shop_id: null });
        });
    }
    static getTotalTodayProfitDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ shop_id, }) {
            try {
                const today = (0, moment_1.default)().format("YYYY-MM-DD");
                const yesterday = (0, moment_1.default)().subtract(1, "day").format("YYYY-MM-DD");
                let condition = {
                    is_active: true,
                    payment_status: order_1.PaymentStatus.COMPLETED,
                    order_status: order_1.OrderStatus.SUCCESS,
                };
                if (shop_id)
                    condition.shop_id = shop_id;
                const todayProfit = yield this.fetchSum((0, typeorm_1.getRepository)(order_1.Order), condition, "total_price * (profit / 100)", { start: today, end: today });
                const yesterdayProfit = yield this.fetchSum((0, typeorm_1.getRepository)(order_1.Order), condition, "total_price * (profit / 100)", { start: yesterday, end: yesterday });
                const increase = this.calculateIncrease(todayProfit, yesterdayProfit);
                return (0, success_handler_1.handleSuccess)({ total: todayProfit.toString(), increase });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
    static shopGetTotalExpenseDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            const shopDataFromToken = yield this.verifyShopToken(req);
            return this.getTotalExpenseDashboard({ shop_id: shopDataFromToken.id });
        });
    }
    static adminGetTotalExpenseDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ req, }) {
            yield this.verifyStaffToken(req);
            return this.getTotalExpenseDashboard({ shop_id: null });
        });
    }
    static getTotalExpenseDashboard(_a) {
        return __awaiter(this, arguments, void 0, function* ({ shop_id, }) {
            try {
                const { startOfCurrentMonth, endOfCurrentMonth, startOfLastMonth, endOfLastMonth, } = this.getDateRange();
                let condition = {
                    is_active: true,
                    identifier: transactionHistory_1.ETransactionHistoryIdentifier.RECHARGE,
                    transaction_status: transactionHistory_1.ETransactionStatus.APPROVED,
                };
                if (shop_id)
                    condition.shop_id = shop_id;
                const currentMonthExpense = yield this.fetchSum((0, typeorm_1.getRepository)(transactionHistory_1.TransactionHistory), condition, "amount", { start: startOfCurrentMonth, end: endOfCurrentMonth });
                const lastMonthExpense = yield this.fetchSum((0, typeorm_1.getRepository)(transactionHistory_1.TransactionHistory), condition, "amount", { start: startOfLastMonth, end: endOfLastMonth });
                const increase = this.calculateIncrease(currentMonthExpense, lastMonthExpense);
                const totalExpense = yield this.fetchSum((0, typeorm_1.getRepository)(transactionHistory_1.TransactionHistory), condition, "amount");
                return (0, success_handler_1.handleSuccess)({ total: totalExpense.toString(), increase });
            }
            catch (error) {
                return (0, error_handler_1.handleError)(config_1.config.message.internal_server_error, 500, error.message);
            }
        });
    }
}
exports.OrderService = OrderService;
