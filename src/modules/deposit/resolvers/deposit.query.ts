import { Request } from "express";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { DepositService } from "../services";
import { DepositWhereInput } from "../types";

export const depositQuery = {
  getDeposit: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => DepositService.getDeposit({ id, req }),

  getDeposits: async (
    _: any,
    {
      where,
      page = 1,
      limit = 30,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: DepositWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request }
  ) => DepositService.getDeposits({ where, page, limit, sortedBy, req }),
};
