import { Request } from "express";
import { ELogistics } from "../types";
import { LogisticsService } from "../services";

export const logisticsMutation = {
  createLogistics: async (
    _: any,
    { data }: { data: ELogistics },
    { req }: { req: Request }
  ) => LogisticsService.create({ data: data, req }),

  updateLogictics: async (
    _: any,
    { id, data }: { id: string; data: ELogistics },
    { req }: { req: Request }
  ) => LogisticsService.update({id, data: data, req }),

    deletLogictics: async (
      _: any,
      { id }: { id: string },
      { req }: { req: Request }
    ) => LogisticsService.delete({ id, req }),
};
