import { shopTypeMutation } from "./shopType.mutation";
import { shopTypeQuery } from "./shopType.query";

export const shopTypeResolvers = {
  Query: {
    ...shopTypeQuery,
  },
  Mutation: {
    ...shopTypeMutation,
  },
};
