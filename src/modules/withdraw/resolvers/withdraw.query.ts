import { Request } from "express";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { WithdrawService } from "../services";
import { WithdrawWhereInput } from "../types";

export const withdrawQuery = {
  getWithdraw: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => WithdrawService.getWithdraw({ id, req }),

  getWithdraws: async (
    _: any,
    {
      where,
      page = 1,
      limit = 30,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: WithdrawWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request }
  ) => WithdrawService.getWithdraws({ where, page, limit, sortedBy, req }),
};
