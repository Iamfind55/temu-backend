import { Request } from "express";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { OrderService } from "../services";
import { OrderStatus, OrderWhereInput } from "../types";
import { GraphQLResolveInfo } from "graphql";

export const orderQuery = {
  shopGetOrders: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: OrderWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => OrderService.shopGetOrders({ where, page, limit, sortedBy, req, info }),
  customerGetOrders: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: OrderWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) =>
    OrderService.customerGetOrders({ where, page, limit, sortedBy, req, info }),
  adminGetOrders: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: OrderWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => OrderService.adminGetOrders({ where, page, limit, sortedBy, req, info }),

  shopGetOrder: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => OrderService.shopGetOrder({ id, req }),
  customerGetOrder: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => OrderService.customerGetOrder({ id, req }),
  adminGetOrder: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => OrderService.adminGetOrder({ id, req }),
  countNewOrder: async (
    _: any,
    { order_status }: { order_status: OrderStatus },
    { req }: { req: Request }
  ) => OrderService.countNewOrder({ req, order_status }),
};
