import pubsub from "../../../utils/pubsub";

export const transactionHistorySubscribe = {
  transactionSubscribe: {
    subscribe: (_: any) => {
      return pubsub.asyncIterator(`NEW_TRANSACTION_SUBSCRIBE`); // Global new order
    },
  },
};
