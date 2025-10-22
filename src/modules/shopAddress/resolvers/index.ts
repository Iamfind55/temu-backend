import { shopAddressMutation } from "./shopAddress.mutation";
import { shopAddressQuery } from "./shopAddress.query";

export const shopAddressResolvers = {
  Query: {
    ...shopAddressQuery,
  },
  Mutation: {
    ...shopAddressMutation,
  },
};
