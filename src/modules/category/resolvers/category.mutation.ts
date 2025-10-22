import { Request, Response } from "express";
import { CategoryService } from "../services";
import { CategoryModel } from "../types";

export const categoryMutation = {
  createCategory: async (
    _: any,
    { data }: { data: CategoryModel },
    { req }: { req: Request }
  ) => CategoryService.createCategory({ data: data, req }),

  updateCategory: async (
    _: any,
    { data }: { data: CategoryModel },
    { req }: { req: Request }
  ) => CategoryService.updateCategory({ data: data, req }),

  deleteCategory: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => CategoryService.deleteCategory({ id, req }),
};
