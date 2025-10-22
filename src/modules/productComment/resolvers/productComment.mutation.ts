import { Request, Response } from "express";
import { ProductCommentService } from "../services";
import { ProductCommentModel } from "../types";

export const productCommentMutation = {
  createProductComment: async (
    _: any,
    { data }: { data: ProductCommentModel },
    { req }: { req: Request }
  ) => ProductCommentService.createProductComment({ data: data, req }),

  updateProductComment: async (
    _: any,
    { data }: { data: ProductCommentModel },
    { req }: { req: Request }
  ) => ProductCommentService.updateProductComment({ data: data, req }),

  deleteProductComment: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ProductCommentService.deleteProductComment({ id, req }),
};
