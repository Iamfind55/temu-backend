import { GraphQLResolveInfo } from "graphql";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { LogisticsWhereInput } from "../types";
import { LogisticsService } from "../services";

export const logisticQuery = {
  getLogistics: async (
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
  ) => LogisticsService.findAll({ where, page, limit, sortedBy }),

  getLogistic: async (_: any, { id }: { id: string }) =>
    LogisticsService.findOne({ id }),
};
