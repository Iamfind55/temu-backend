import { Request } from "express";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import {
  ETransactionHistoryIdentifier,
  TransactionHistoryWhereInput,
} from "../types";
import { TransactionHistoryService } from "../services";

export const transactionHistoryQuery = {
  shopGetTransactionHistories: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: TransactionHistoryWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request }
  ) =>
    TransactionHistoryService.shopCustomerGetTransactionHistories({
      where,
      page,
      limit,
      sortedBy,
      req,
    }),
  shopGetTransactionHistory: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => TransactionHistoryService.shopGetTransactionHistory({ id, req }),

  // customer
  customerGetTransactionHistories: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: TransactionHistoryWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request }
  ) =>
    TransactionHistoryService.shopCustomerGetTransactionHistories({
      where,
      page,
      limit,
      sortedBy,
      req,
    }),
  customerGetTransactionHistory: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => TransactionHistoryService.customerGetTransactionHistory({ id, req }),

  // admin
  adminGetTransactionHistories: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: TransactionHistoryWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request }
  ) =>
    TransactionHistoryService.adminGetTransactionHistories({
      where,
      page,
      limit,
      sortedBy,
      req,
    }),
  adminGetTransactionHistory: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => TransactionHistoryService.adminGetTransactionHistory({ id, req }),
  countNewTransaction: async (
    _: any,
    { identifier }: { identifier: ETransactionHistoryIdentifier },
    { req }: { req: Request }
  ) => TransactionHistoryService.countNewTransaction({ req, identifier }),
};
