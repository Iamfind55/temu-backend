import { Request } from "express";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { ShopSocialService } from "../services";
import { ShopSocialWhereInput } from "../types";

export const shopSocialQuery = {
  getShopSocials: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ShopSocialWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request }
  ) => ShopSocialService.getShopSocials({ where, page, limit, sortedBy, req }),
  getShopSocial: async (_: any, { id }: { id: string }) =>
    ShopSocialService.getShopSocial({ id }),
};
