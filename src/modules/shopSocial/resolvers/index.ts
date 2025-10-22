import { shopSocialMutation } from "./shopSocial.mutation";
import { shopSocialQuery } from "./shopSocial.query";

export const shopSocialResolvers = {
  Query: {
    ...shopSocialQuery,
  },
  Mutation: {
    ...shopSocialMutation,
  },
};
