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
exports.walletMutation = void 0;
const services_1 = require("../services");
exports.walletMutation = {
    customerRechargeBalance: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.WalletService.shopCustomerRechargeBalance({ data: data, req }); }),
    customerWithdrawBalance: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.WalletService.shopCustomerWithdrawBalance({ data: data, req }); }),
    // Shop
    shopRechargeBalance: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.WalletService.shopCustomerRechargeBalance({ data: data, req }); }),
    shopRechargeBalanceWithInactiveStatus: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.WalletService.shopRechargeBalanceWithInactiveStatus({ data: data, req }); }),
    shopWithdrawBalance: (_1, _a, _b) => __awaiter(void 0, [_1, _a, _b], void 0, function* (_, { data }, { req }) { return services_1.WalletService.shopCustomerWithdrawBalance({ data: data, req }); }),
    // shopCreateWallet: async (_: any, {}, { req }: { req: Request }) =>
    //   WalletService.createShopCustomerWallet({ req }),
    // updateWallet: async (
    //   _: any,
    //   { data }: { data: WalletModel },
    //   { req }: { req: Request }
    // ) => WalletService.updateWalle,t({ data: data, req }),
    // deleteWallet: async (
    //   _: any,
    //   { id }: { id: string },
    //   { req }: { req: Request }
    // ) => WalletService.deleteWallet({ id, req })
};
