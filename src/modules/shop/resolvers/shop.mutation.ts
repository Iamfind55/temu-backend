import {
  ShopRequestVIPData,
  ShopResetPassword,
  ShopWhereLoginInput,
} from "../types/index";
import { Request } from "express";
import { ShopService } from "../services";
import { ShopModel } from "../types";
import { Shop } from "../entity";

export const shopMutation = {
  createShop: async (
    _: any,
    { data }: { data: Shop },
    { req }: { req: Request }
  ) => ShopService.createShop({ data: data, req }),

  shopRegister: async (
    _: any,
    { data }: { data: Shop },
    { req }: { req: Request }
  ) => ShopService.shopRegister({ data: data, req }),

  adminUpdateShop: async (
    _: any,
    { data }: { data: Shop },
    { req }: { req: Request }
  ) => ShopService.adminUpdateShop({ data: data, req }),

  adminApproveShop: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ShopService.adminApproveShop({ id: id, req }),

  updateShopInformation: async (
    _: any,
    { data }: { data: Shop },
    { req }: { req: Request }
  ) => ShopService.updateShopInformation({ data: data, req }),

  deleteShop: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ShopService.deleteShop({ id, req }),

  shopLogin: async (
    _: any,
    { where }: { where: ShopWhereLoginInput },
    { req }: { req: Request }
  ) => ShopService.shopLogin({ where }),

  shopForgotPassword: async (
    _: any,
    { email }: { email: string },
    { req }: { req: Request }
  ) => ShopService.shopForgotPassword({ email }),
  shopResetPassword: async (
    _: any,
    { data }: { data: ShopResetPassword },
    { req }: { req: Request }
  ) => ShopService.shopResetPassword({ data: data, req }),

  shopRequestVIP: async (
    _: any,
    { data }: { data: ShopRequestVIPData },
    { req }: { req: Request }
  ) => ShopService.shopRequestVIP({ data: data, req }),
  adminApproveShopRequestVIP: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ShopService.adminApproveShopRequestVIP({ id: id, req }),
};
