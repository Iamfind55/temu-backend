import { BaseOrderByInput } from "../../../utils/base/baseType";
import { BrandingService } from "../services";
import { BrandingWhereInput } from "../types";

export const brandingQuery = {
  getBrandings: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: BrandingWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    }
  ) => BrandingService.getBrandings({ where, page, limit, sortedBy }),
  getBranding: async (_: any, { id }: { id: string }) =>
    BrandingService.getBranding({ id }),
};
