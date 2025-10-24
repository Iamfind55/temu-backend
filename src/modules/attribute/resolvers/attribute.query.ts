import { BaseOrderByInput } from "../../../utils/base/baseType";
import { LogisticsWhereInput } from "../../logistics";
import { AttributeService } from "../services";

export const attributeQuery = {
  getAttributes: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: LogisticsWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    }
  ) => AttributeService.findAll({ where, page, limit, sortedBy }),

  getAttribute: async (_: any, { id }: { id: string }) =>
    AttributeService.findOne({ id }),
};
