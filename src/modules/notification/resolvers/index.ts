import { notificationMutation } from "./notification.mutation";
import { notificationQuery } from "./notification.query";

export const notificationResolvers = {
  Query: {
    ...notificationQuery,
  },
  Mutation: {
    ...notificationMutation,
  },
};
