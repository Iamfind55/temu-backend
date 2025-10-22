import { aboutUsMutation } from "./banner.mutation";
import { aboutUsQuery } from "./banner.query";

export const aboutUsResolvers = {
  Query: {
    ...aboutUsQuery,
  },
  Mutation: {
    ...aboutUsMutation,
  },
};
