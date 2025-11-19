import { Request } from "express";
import { DepositService } from "../services";
import { ApprovDepositInput, CreateDepositInput, UpdateDepositInput } from "../types";
import { RejectWithdrawInput } from "../../withdraw";

export const depositMutation = {
  createDeposit: async (
    _: any,
    { data }: { data: CreateDepositInput },
    { req }: { req: Request }
  ) => DepositService.createDeposit({ data, req }),

  updateDeposit: async (
    _: any,
    { data }: { data: UpdateDepositInput },
    { req }: { req: Request }
  ) => DepositService.updateDeposit({ data, req }),

  approvalDeposit: async (
    _: any,
    { data }: { data: ApprovDepositInput },
    { req }: { req: Request }
  ) => DepositService.approval({ data, req }),
  rejectDeposit: async (
    _: any,
    { data }: { data: RejectWithdrawInput },
    { req }: { req: Request }
  ) => DepositService.reject({ data, req }),

  deleteDeposit: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => DepositService.deleteDeposit({ id, req }),
};
