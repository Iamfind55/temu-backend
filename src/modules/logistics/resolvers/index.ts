import { logisticsMutation } from "./logistic.mutation";
import { logisticQuery } from "./logistic.query";

export const logisticsResolvers = {
  Query: {
    ...logisticQuery,
  },
  Mutation: {
    ...logisticsMutation,
  },
};
