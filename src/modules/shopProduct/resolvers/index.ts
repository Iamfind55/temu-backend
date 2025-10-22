import { shopProductMutation } from "./shopProduct.mutation";
import { shopProductQuery } from "./shopProduct.query";

export const shopProductResolvers = {
  Query: {
    ...shopProductQuery,
  },
  Mutation: {
    ...shopProductMutation,
  },
};
