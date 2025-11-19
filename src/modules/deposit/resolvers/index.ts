import { depositMutation } from "./deposit.mutation";
import { depositQuery } from "./deposit.query";

export const depositResolvers = {
  Query: {
    ...depositQuery,
  },
  Mutation: {
    ...depositMutation,
  },
};
