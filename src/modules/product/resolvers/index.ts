import { ProductMutation } from "./product.mutation";
import { ProductQuery } from "./product.query";

export const productResolvers = {
  Query: {
    ...ProductQuery,
  },
  Mutation: {
    ...ProductMutation,
  },
};
