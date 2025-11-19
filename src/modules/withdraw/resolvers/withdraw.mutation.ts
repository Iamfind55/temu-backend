import { Request } from "express";
import { WithdrawService } from "../services";
import { ApproveWithdrawInput, CreateWithdrawInput, RejectWithdrawInput, UpdateWithdrawInput } from "../types";

export const withdrawMutation = {
  createWithdraw: async (
    _: any,
    { data }: { data: CreateWithdrawInput },
    { req }: { req: Request }
  ) => WithdrawService.createWithdraw({ data, req }),

  updateWithdraw: async (
    _: any,
    { data }: { data: UpdateWithdrawInput },
    { req }: { req: Request }
  ) => WithdrawService.updateWithdraw({ data, req }),

  approveWithdraw: async (
    _: any,
    { data }: { data: ApproveWithdrawInput },
    { req }: { req: Request }
  ) => WithdrawService.approveWithdraw({ data, req }),

  rejectWithdraw: async (
    _: any,
    { data }: { data: RejectWithdrawInput },
    { req }: { req: Request }
  ) => WithdrawService.rejectWithdraw({ data, req }),

  deleteWithdraw: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => WithdrawService.deleteWithdraw({ id, req }),
};
