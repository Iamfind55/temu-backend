import { Request } from "express";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { StaffService } from "../services";
import { StaffWhereInput } from "../types";
import { GraphQLResolveInfo } from "graphql";

export const staffQuery = {
  getStaffs: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: StaffWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => StaffService.getStaffs({ where, page, limit, sortedBy, req }, info),
  getStaff: async (_: any, { id }: { id: string }, { req }: { req: Request }) =>
    StaffService.getStaff({ id, req }),
};
