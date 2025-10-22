import { GraphQLResolveInfo } from "graphql";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { ProductService } from "../services";
import { ProductBestSellingWhereInput, ProductWhereInput, SimilarProductWhereInput } from "../types";
import { Request } from "express";

export const ProductQuery = {
  getProducts: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ProductWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => {
    return ProductService.getProducts(
      { req, where, page, limit, sortedBy },
      info
    );
  },
  adminGetProducts: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ProductWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => {
    return ProductService.adminGetProducts(
      { where, page, limit, sortedBy, req },
      info
    );
  },
  getBestSellingProducts: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ProductWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => {
    return ProductService.getBestSellingProducts(
      { where, page, limit, sortedBy, req },
      info
    );
  },
  getSimilarProducts: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
    }: {
      where: SimilarProductWhereInput;
      page: number;
      limit: number;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) => {
    return ProductService.getSimilarProducts({ where, page, limit, req }, info);
  },
  searchProducts: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ProductWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    }
  ) => ProductService.searchProducts({ where, page, limit, sortedBy }),

  getProduct: async (_: any, { id }: { id: string }) =>
    ProductService.getProduct({ id }),
};
