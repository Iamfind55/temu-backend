import { shopMutation } from "./shop.mutation";
import { shopQuery } from "./shop.query";
import { shopSubscribe } from "./shop.subscribe";

export const shopResolvers = {
  Query: {
    ...shopQuery,
  },
  Mutation: {
    ...shopMutation,
  },
  Subscription: {
    ...shopSubscribe,
  },
};
