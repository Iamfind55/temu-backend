import { transactionHistoryMutation } from "./transactionHistory.mutation";
import { transactionHistoryQuery } from "./transactionHistory.query";
import { transactionHistorySubscribe } from "./transactionHistory.subscribe";

export const transactionHistoryResolvers = {
  Query: {
    ...transactionHistoryQuery,
  },
  Mutation: {
    ...transactionHistoryMutation,
  },
  Subscription: {
    ...transactionHistorySubscribe,
  },
};
