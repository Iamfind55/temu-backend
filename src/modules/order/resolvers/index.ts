import { orderMutation } from "./order.mutation";
import { orderQuery } from "./order.query";
import { orderSubscribe } from "./order.subscribe";

export const orderResolvers = {
  Query: {
    ...orderQuery,
  },
  Mutation: {
    ...orderMutation,
  },
  Subscription: {
    ...orderSubscribe,
  },
};
