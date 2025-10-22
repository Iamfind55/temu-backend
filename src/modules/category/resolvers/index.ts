import { categoryMutation } from "./category.mutation";
import { categoryQuery } from "./category.query";

export const categoryResolvers = {
  Query: {
    ...categoryQuery,
  },
  Mutation: {
    ...categoryMutation,
  },
};
