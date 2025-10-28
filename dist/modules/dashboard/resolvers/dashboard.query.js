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
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardlQuery = void 0;
const services_1 = require("../services");
exports.dashboardlQuery = {
    customerGetOrderDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { where, }, { req }) { return services_1.OrderService.customerGetOrderDashboard({ where, req }); }),
    // shop
    shopGetProductDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.shopGetProductDashboard({ req }); }),
    shopGetUnreadMessageDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.shopGetUnreadMessageDashboard({ req }); }),
    shopGetTotalIncomeDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.shopGetTotalIncomeDashboard({ req }); }),
    shopGetTotalExpenseDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.shopGetTotalExpenseDashboard({ req }); }),
    shopGetTotalOrderDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.shopGetTotalOrderDashboard({ req }); }),
    shopGetTotalNewOrderDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.shopGetTotalNewOrderDashboard({ req }); }),
    shopGetTotalCanceledOrderDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.shopGetTotalCanceledOrderDashboard({ req }); }),
    shopGetTotalTodayIncomeDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.shopGetTotalTodayIncomeDashboard({ req }); }),
    shopGetTotalTodayProfitDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.shopGetTotalTodayProfitDashboard({ req }); }),
    // admin
    adminGetProductDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.adminGetProductDashboard({ req }); }),
    // adminGetUnreadMessageDashboard: async (
    //   _: any,
    //   {},
    //   { req }: { req: Request }
    // ) => OrderService.adminGetUnreadMessageDashboard({ req }),
    adminGetTotalIncomeDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.adminGetTotalIncomeDashboard({ req }); }),
    // adminGetTotalExpenseDashboard: async (
    //   _: any,
    //   {},
    //   { req }: { req: Request }
    // ) => OrderService.adminGetTotalExpenseDashboard({ req }),
    adminGetTotalOrderDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.adminGetTotalOrderDashboard({ req }); }),
    adminGetTotalNewOrderDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.adminGetTotalNewOrderDashboard({ req }); }),
    adminGetTotalCanceledOrderDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.adminGetTotalCanceledOrderDashboard({ req }); }),
    adminGetTotalTodayIncomeDashboard: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, {}, { req }) { return services_1.OrderService.adminGetTotalTodayIncomeDashboard({ req }); }),
    // adminGetTotalTodayProfitDashboard: async (
    //   _: any,
    //   {},
    //   { req }: { req: Request }
    // ) => OrderService.adminGetTotalTodayProfitDashboard({ req }),
};
