import { GraphQLResolveInfo } from "graphql";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { CategoryService } from "../services";
import { CategoryWhereInput } from "../types";

export const categoryQuery = {
  getCategories: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: CategoryWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    context: any,
    info: GraphQLResolveInfo
  ) => CategoryService.getCategories({ where, page, limit, sortedBy }, info),
  adminGetCategories: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: CategoryWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    context: any,
    info: GraphQLResolveInfo
  ) => CategoryService.adminGetCategories({ where, page, limit, sortedBy }, info),
  getAllCategories: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: CategoryWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    context: any,
    info: GraphQLResolveInfo
  ) => CategoryService.getAllCategories({ where, page, limit, sortedBy }, info),
  getCategory: async (_: any, { id }: { id: string }) =>
    CategoryService.getCategory({ id }),
};
