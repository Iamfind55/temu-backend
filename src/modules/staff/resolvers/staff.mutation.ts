import { StaffWhereLoginInput } from "./../types/index";
import { Request, Response } from "express";
import { StaffService } from "../services";
import { StaffModel } from "../types";

export const staffMutation = {
  createStaff: async (
    _: any,
    { data }: { data: StaffModel },
    { req }: { req: Request }
  ) => StaffService.createStaff({ data: data, req }),

  updateStaff: async (
    _: any,
    { data }: { data: StaffModel },
    { req }: { req: Request }
  ) => StaffService.updateStaff({ data: data, req }),

  deleteStaff: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => StaffService.deleteStaff({ id, req }),

  staffLogin: async (
    _: any,
    { where }: { where: StaffWhereLoginInput },
    { req }: { req: Request }
  ) => StaffService.staffLogin({ where }),
};
