import { Request } from "express";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { CustomerService } from "../services";
import { CustomerWhereInput } from "../types";
import { GraphQLResolveInfo } from "graphql";

export const customerQuery = {
  getCustomers: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: CustomerWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) =>
    CustomerService.getCustomers({ where, page, limit, sortedBy, req }, info),
  getCustomer: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => CustomerService.getCustomer({ id, req }),

  getCustomerInformation: async (_: any, {}, { req }: { req: Request }) =>
    CustomerService.getCustomerInformation({ req }),
};
