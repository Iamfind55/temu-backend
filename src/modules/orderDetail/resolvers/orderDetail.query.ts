import { Request } from "express";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { OrderService } from "../services";
import { OrderDetailWhereInput } from "../types";

export const orderDetailQuery = {
  shopGetOrderDetails: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: OrderDetailWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request }
  ) => OrderService.shopGetOrderDetails({ where, page, limit, sortedBy, req }),
  customerGetOrderDetails: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: OrderDetailWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request }
  ) =>
    OrderService.customerGetOrderDetails({ where, page, limit, sortedBy, req }),
  adminGetOrderDetails: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: OrderDetailWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request }
  ) => OrderService.adminGetOrderDetails({ where, page, limit, sortedBy, req }),

  // getOrder: async (_: any, { id }: { id: string }, { req }: { req: Request }) =>
  //   OrderService.getOrder({ id, req }),
};
