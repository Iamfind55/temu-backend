import { Request } from "express";
import { ShopAddressService } from "../services";
import { ShopAddressModel } from "../types";

export const shopAddressMutation = {
  // Shop
  createShopAddress: async (
    _: any,
    { data }: { data: ShopAddressModel },
    { req }: { req: Request }
  ) => ShopAddressService.createShopAddress({ data: data, req }),

  updateShopAddress: async (
    _: any,
    { data }: { data: ShopAddressModel },
    { req }: { req: Request }
  ) => ShopAddressService.updateShopAddress({ data: data, req }),

  setShopAddressDefaultToUse: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ShopAddressService.setShopAddressDefaultToUse({ id, req }),

  deleteShopAddress: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ShopAddressService.deleteShopAddress({ id, req }),

  // Customer
  createCustomerAddress: async (
    _: any,
    { data }: { data: ShopAddressModel },
    { req }: { req: Request }
  ) => ShopAddressService.createShopAddress({ data: data, req }),

  updateCustomerAddress: async (
    _: any,
    { data }: { data: ShopAddressModel },
    { req }: { req: Request }
  ) => ShopAddressService.updateShopAddress({ data: data, req }),

  setCustomerAddressDefaultToUse: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ShopAddressService.setShopAddressDefaultToUse({ id, req }),

  deleteCustomerAddress: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ShopAddressService.deleteShopAddress({ id, req }),
};
