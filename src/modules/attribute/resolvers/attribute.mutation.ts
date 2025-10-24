import { Request } from "express";
import { EAttribute } from "../types";
import { AttributeService } from "../services";

export const attributeMutation = {
  createAttribute: async (
    _: any,
    { data }: { data: EAttribute },
    { req }: { req: Request }
  ) => AttributeService.create({ data: data, req }),

  updateAttribute: async (
    _: any,
    { id, data }: { id: string; data: EAttribute },
    { req }: { req: Request }
  ) => AttributeService.update({ id, data: data, req }),

  deletAttribute: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => AttributeService.delete({ id, req }),
};
