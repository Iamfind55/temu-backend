import { Request, Response } from "express";
import { OrderService } from "../services";
import { AdminUpdateOrderByStatusInput, OrderModel } from "../types";

export const orderMutation = {
  createOrder: async (
    _: any,
    { data }: { data: OrderModel },
    { req }: { req: Request }
  ) => OrderService.createOrder({ data: data, req }),

  adminCreateOrderForCustomer: async (
    _: any,
    { customer_id, data }: { customer_id: string; data: OrderModel },
    { req }: { req: Request }
  ) =>
    OrderService.adminCreateOrderForCustomer({ customer_id, data: data, req }),

  payOrderFailed: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => OrderService.payOrderFailed({ id, req }),

  cancelOrderFailed: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => OrderService.cancelOrderFailed({ id, req }),

  shopCancelOrder: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => OrderService.shopCancelOrder({ id, req }),
  shopConfirmOrder: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => OrderService.shopConfirmOrder({ id, req }),
  adminUpdateOrderWithStatus: async (
    _: any,
    { data }: { data: AdminUpdateOrderByStatusInput },
    { req }: { req: Request }
  ) => OrderService.adminUpdateOrderWithStatus({ data, req }),

  deleteOrder: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => OrderService.deleteOrder({ id, req }),

};
