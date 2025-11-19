import { withdrawMutation } from "./withdraw.mutation";
import { withdrawQuery } from "./withdraw.query";

export const withdrawResolvers = {
  Query: {
    ...withdrawQuery,
  },
  Mutation: {
    ...withdrawMutation,
  },
};
