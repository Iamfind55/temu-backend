import { Request } from "express";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { ShopService } from "../services";
import { ShopWhereInput } from "../types";
import { GraphQLResolveInfo } from "graphql";

export const shopQuery = {
  getShops: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ShopWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => ShopService.getShops({ where, page, limit, sortedBy, req }, info),
  adminGetShops: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ShopWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => ShopService.adminGetShops({ where, page, limit, sortedBy, req }, info),

  getShop: async (_: any, { id }: { id: string }, { req }: { req: Request }) =>
    ShopService.getShop({ id, req }),
  adminGetShop: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ShopService.adminGetShop({ id, req }),

  getShopInformation: async (_: any, {}, { req }: { req: Request }) =>
    ShopService.getShopInformation({ req }),

  countShopRequestVIP: async (_: any, {}, { req }: { req: Request }) =>
    ShopService.countShopRequestVIP({ req }),
};
