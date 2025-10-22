import { brandingMutation } from "./branding.mutation";
import { brandingQuery } from "./branding.query";

export const brandingResolvers = {
  Query: {
    ...brandingQuery,
  },
  Mutation: {
    ...brandingMutation,
  },
};
