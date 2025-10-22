import { Request } from "express";
import { OrderService } from "../services";
import { WhereOrderDashboardInput } from "../types";

export const dashboardlQuery = {
  customerGetOrderDashboard: async (
    _: any,
    {
      where,
    }: {
      where: WhereOrderDashboardInput;
      limit: number;
    },
    { req }: { req: Request }
  ) => OrderService.customerGetOrderDashboard({ where, req }),

  // shop
  shopGetProductDashboard: async (_: any, {}, { req }: { req: Request }) =>
    OrderService.shopGetProductDashboard({ req }),
  shopGetUnreadMessageDashboard: async (
    _: any,
    {},
    { req }: { req: Request }
  ) => OrderService.shopGetUnreadMessageDashboard({ req }),
  shopGetTotalIncomeDashboard: async (_: any, {}, { req }: { req: Request }) =>
    OrderService.shopGetTotalIncomeDashboard({ req }),
  shopGetTotalExpenseDashboard: async (_: any, {}, { req }: { req: Request }) =>
    OrderService.shopGetTotalExpenseDashboard({ req }),
  shopGetTotalOrderDashboard: async (_: any, {}, { req }: { req: Request }) =>
    OrderService.shopGetTotalOrderDashboard({ req }),
  shopGetTotalNewOrderDashboard: async (
    _: any,
    {},
    { req }: { req: Request }
  ) => OrderService.shopGetTotalNewOrderDashboard({ req }),
  shopGetTotalCanceledOrderDashboard: async (
    _: any,
    {},
    { req }: { req: Request }
  ) => OrderService.shopGetTotalCanceledOrderDashboard({ req }),
  shopGetTotalTodayIncomeDashboard: async (
    _: any,
    {},
    { req }: { req: Request }
  ) => OrderService.shopGetTotalTodayIncomeDashboard({ req }),
  shopGetTotalTodayProfitDashboard: async (
    _: any,
    {},
    { req }: { req: Request }
  ) => OrderService.shopGetTotalTodayProfitDashboard({ req }),

  // admin
  adminGetProductDashboard: async (_: any, {}, { req }: { req: Request }) =>
    OrderService.adminGetProductDashboard({ req }),
  // adminGetUnreadMessageDashboard: async (
  //   _: any,
  //   {},
  //   { req }: { req: Request }
  // ) => OrderService.adminGetUnreadMessageDashboard({ req }),
  adminGetTotalIncomeDashboard: async (_: any, {}, { req }: { req: Request }) =>
    OrderService.adminGetTotalIncomeDashboard({ req }),
  // adminGetTotalExpenseDashboard: async (
  //   _: any,
  //   {},
  //   { req }: { req: Request }
  // ) => OrderService.adminGetTotalExpenseDashboard({ req }),
  adminGetTotalOrderDashboard: async (_: any, {}, { req }: { req: Request }) =>
    OrderService.adminGetTotalOrderDashboard({ req }),
  adminGetTotalNewOrderDashboard: async (
    _: any,
    {},
    { req }: { req: Request }
  ) => OrderService.adminGetTotalNewOrderDashboard({ req }),
  adminGetTotalCanceledOrderDashboard: async (
    _: any,
    {},
    { req }: { req: Request }
  ) => OrderService.adminGetTotalCanceledOrderDashboard({ req }),
  adminGetTotalTodayIncomeDashboard: async (
    _: any,
    {},
    { req }: { req: Request }
  ) => OrderService.adminGetTotalTodayIncomeDashboard({ req }),
  // adminGetTotalTodayProfitDashboard: async (
  //   _: any,
  //   {},
  //   { req }: { req: Request }
  // ) => OrderService.adminGetTotalTodayProfitDashboard({ req }),
};
