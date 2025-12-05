import { BaseOrderByInput } from "../../../utils/base/baseType";
import { ProductCommentService } from "../services";
import { ProductCommentWhereInput, CommentByProductWhereInput } from "../types";

export const productCommentQuery = {
  getProductComments: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ProductCommentWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    }
  ) => ProductCommentService.getProductComments({ where, page, limit, sortedBy }),
  getProductComment: async (_: any, { id }: { id: string }) =>
    ProductCommentService.getProductComment({ id }),
  getProductCommentProductID: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: CommentByProductWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    }
  ) => ProductCommentService.getProductCommentProductID({ where, page, limit, sortedBy }),
};
