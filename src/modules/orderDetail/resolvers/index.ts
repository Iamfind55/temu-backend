import { orderDetailMutation } from "./orderDetail.mutation";
import { orderDetailQuery } from "./orderDetail.query";

export const orderDetailResolvers = {
  Query: {
    ...orderDetailQuery,
  },
  Mutation: {
    ...orderDetailMutation,
  },
};
