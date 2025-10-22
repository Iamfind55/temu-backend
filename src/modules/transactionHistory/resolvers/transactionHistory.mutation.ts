import { Request } from "express";
import { TransactionHistoryService } from "../services";

export const transactionHistoryMutation = {
  adminApproveRechargeTransactionHistory: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) =>
    TransactionHistoryService.adminApproveRechargeTransactionHistory({
      id,
      req,
    }),

  adminRejectTransactionHistory: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => TransactionHistoryService.adminRejectTransactionHistory({ id, req }),
};
