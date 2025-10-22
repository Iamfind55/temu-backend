import { customerMutation } from "./customer.mutation";
import { customerQuery } from "./customer.query";

export const customerResolvers = {
  Query: {
    ...customerQuery,
  },
  Mutation: {
    ...customerMutation,
  },
};
