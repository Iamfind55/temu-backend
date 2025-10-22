import { Request, Response } from "express";
import { ProductService } from "../services";
import { ProductModel } from "../types";

export const ProductMutation = {
  createProduct: async (
    _: any,
    { data }: { data: ProductModel },
    { req }: { req: Request }
  ) => ProductService.createProduct({ data: data, req }),

  updateProduct: async (
    _: any,
    { data }: { data: ProductModel },
    { req }: { req: Request }
  ) => ProductService.updateProduct({ data: data, req }),

  deleteProduct: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ProductService.deleteProduct({ id, req }),
};
