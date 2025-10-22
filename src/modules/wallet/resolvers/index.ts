import { walletMutation } from "./wallet.mutation";
import { walletQuery } from "./wallet.query";

export const walletResolvers = {
  Query: {
    ...walletQuery,
  },
  Mutation: {
    ...walletMutation,
  },
};
