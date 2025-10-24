import { attributeMutation } from "./attribute.mutation";
import { attributeQuery } from "./attribute.query";

export const attributeResolvers = {
  Mutation: {
    ...attributeMutation,
  },
  Query: {
    ...attributeQuery,
  },
};
