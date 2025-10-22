import { Request, Response } from "express";
import { ShopSocialService } from "../services";
import { ShopSocialModel } from "../types";

export const shopSocialMutation = {
  createShopSocial: async (
    _: any,
    { data }: { data: ShopSocialModel },
    { req }: { req: Request }
  ) => ShopSocialService.createShopSocial({ data: data, req }),

  updateShopSocial: async (
    _: any,
    { data }: { data: ShopSocialModel },
    { req }: { req: Request }
  ) => ShopSocialService.updateShopSocial({ data: data, req }),

  deleteShopSocial: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ShopSocialService.deleteShopSocial({ id, req }),
};
