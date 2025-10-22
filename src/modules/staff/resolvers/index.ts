import { staffMutation } from "./staff.mutation";
import { staffQuery } from "./staff.query";

export const staffResolvers = {
  Query: {
    ...staffQuery,
  },
  Mutation: {
    ...staffMutation,
  },
};
