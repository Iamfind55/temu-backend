import { Request, Response } from "express";
import { ShopTypeService } from "../services";
import { ShopTypeModel } from "../types";

export const shopTypeMutation = {
  createShopType: async (
    _: any,
    { data }: { data: ShopTypeModel },
    { req }: { req: Request }
  ) => ShopTypeService.createShopType({ data: data, req }),

  updateShopType: async (
    _: any,
    { data }: { data: ShopTypeModel },
    { req }: { req: Request }
  ) => ShopTypeService.updateShopType({ data: data, req }),

  deleteShopType: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ShopTypeService.deleteShopType({ id, req }),
};
