import { productCommentMutation } from "./productComment.mutation";
import { productCommentQuery } from "./productComment.query";

export const productCommentResolvers = {
  Query: {
    ...productCommentQuery,
  },
  Mutation: {
    ...productCommentMutation,
  },
};
