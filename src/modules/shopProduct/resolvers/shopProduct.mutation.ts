import { Request, Response } from "express";
import { ShopProductService } from "../services";
import { ShopProductModel } from "../types";

export const shopProductMutation = {
  createManyShopProducts: async (
    _: any,
    { data }: { data: ShopProductModel[] },
    { req }: { req: Request }
  ) => ShopProductService.createShopProducts({ data: data, req }),

  createShopProductsWithCategory: async (
    _: any,
    { data }: { data: ShopProductModel },
    { req }: { req: Request }
  ) => ShopProductService.createShopProductsWithCategory({ data: data, req }),

  createShopProductsWithVIPLevel: async (
    _: any,
    { data }: { data: ShopProductModel },
    { req }: { req: Request }
  ) => ShopProductService.createShopProductsWithVIPLevel({ data: data, req }),

  createShopProduct: async (
    _: any,
    { data }: { data: ShopProductModel },
    { req }: { req: Request }
  ) => ShopProductService.createShopProduct({ data: data, req }),

  updateShopProduct: async (
    _: any,
    { data }: { data: ShopProductModel },
    { req }: { req: Request }
  ) => ShopProductService.updateShopProduct({ data: data, req }),

  deleteShopProduct: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ShopProductService.deleteShopProduct({ id, req }),
};
