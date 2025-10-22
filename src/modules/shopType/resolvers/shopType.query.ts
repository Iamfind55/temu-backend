import { BaseOrderByInput } from "../../../utils/base/baseType";
import { ShopTypeService } from "../services";
import { ShopTypeWhereInput } from "../types";

export const shopTypeQuery = {
  getShopTypes: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ShopTypeWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    }
  ) => ShopTypeService.getShopTypes({ where, page, limit, sortedBy }),
  getShopType: async (_: any, { id }: { id: string }) =>
    ShopTypeService.getShopType({ id }),
};
