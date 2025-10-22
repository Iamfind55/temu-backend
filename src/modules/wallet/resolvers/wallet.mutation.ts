import { Request } from "express";
import { WalletService } from "../services";
import { ShopRechargeBallance, ShopWithdrawBallance } from "../types";

export const walletMutation = {
  customerRechargeBalance: async (
    _: any,
    { data }: { data: ShopRechargeBallance },
    { req }: { req: Request }
  ) => WalletService.shopCustomerRechargeBalance({ data: data, req }),
  customerWithdrawBalance: async (
    _: any,
    { data }: { data: ShopWithdrawBallance },
    { req }: { req: Request }
  ) => WalletService.shopCustomerWithdrawBalance({ data: data, req }),

  // Shop
  shopRechargeBalance: async (
    _: any,
    { data }: { data: ShopRechargeBallance },
    { req }: { req: Request }
  ) => WalletService.shopCustomerRechargeBalance({ data: data, req }),
  shopRechargeBalanceWithInactiveStatus: async (
    _: any,
    { data }: { data: ShopRechargeBallance },
    { req }: { req: Request }
  ) => WalletService.shopRechargeBalanceWithInactiveStatus({ data: data, req }),
  shopWithdrawBalance: async (
    _: any,
    { data }: { data: ShopWithdrawBallance },
    { req }: { req: Request }
  ) => WalletService.shopCustomerWithdrawBalance({ data: data, req }),

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
