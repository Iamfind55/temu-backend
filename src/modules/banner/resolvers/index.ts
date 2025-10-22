import { bannerMutation } from "./banner.mutation";
import { bannerQuery } from "./banner.query";

export const bannerResolvers = {
  Query: {
    ...bannerQuery,
  },
  Mutation: {
    ...bannerMutation,
  },
};
