import { BaseOrderByInput } from "../../../utils/base/baseType";
import { BannerService } from "../services";
import { BannerWhereInput } from "../types";

export const bannerQuery = {
  getBanners: async (
    _: any,
    {
      where,
      page = 1,
      limit = 30,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: BannerWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    }
  ) => BannerService.getBanners({ where, page, limit, sortedBy }),
  getBanner: async (_: any, { id }: { id: string }) =>
    BannerService.getBanner({ id }),
};
