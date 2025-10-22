import { Request } from "express";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { WalletService } from "../services";
import { WalletWhereInput } from "../types";

export const walletQuery = {
  adminGetWallets: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: WalletWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request }
  ) => WalletService.adminGetWallets({ where, page, limit, sortedBy, req }),
  adminGetWallet: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => WalletService.adminGetWallet({ id, req }),

  getShopWallet: async (_: any, {}, { req }: { req: Request }) =>
    WalletService.getShopWallet({ req }),
  getCustomerWallet: async (_: any, {}, { req }: { req: Request }) =>
    WalletService.getShopWallet({ req }),
};
