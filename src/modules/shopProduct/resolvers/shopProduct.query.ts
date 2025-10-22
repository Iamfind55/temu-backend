import { GraphQLResolveInfo } from "graphql";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { ShopProductService } from "../services";
import { ShopProductWhereInput } from "../types";

export const shopProductQuery = {
  getShopProducts: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ShopProductWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    context: any,
    info: GraphQLResolveInfo
  ) => ShopProductService.getShopProducts({ where, page, limit, sortedBy }, info),
  getShopProduct: async (_: any, { id }: { id: string }) =>
    ShopProductService.getShopProduct({ id }),
};
