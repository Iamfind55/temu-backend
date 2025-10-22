import { dashboardMutation } from "./dashboard.mutation";
import { dashboardlQuery } from "./dashboard.query";

export const dashboardResolvers = {
  Query: {
    ...dashboardlQuery,
  },
  Mutation: {
    ...dashboardMutation,
  },
};
