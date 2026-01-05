import { MessageService } from "../services";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import pubsub, { SUBSCRIPTION_EVENTS } from "../../../utils/pubsub";
import { messageSubscribe } from "./message.subscribe";

export const messageResolvers = {
  Query: {
    getMessages: async (_: any, args: any, context: any) => {
      const { where, page = 1, limit = 50, sortedBy = BaseOrderByInput.created_at_ASC } = args;
      return await MessageService.getMessages({
        where,
        page,
        limit,
        sortedBy,
        req: context.req,
      });
    },
    getUnreadMessage: async (_: any, args: any, context: any) => {
      const { req } = context;
      return await MessageService.getUnreadMessages({ req });
    },
  },

  Mutation: {
    sendMessage: async (_: any, args: any, context: any) => {
      const { data } = args;
      return await MessageService.sendMessage({
        data,
        req: context.req,
      });
    },

    replyToMessage: async (_: any, args: any, context: any) => {
      const { data } = args;
      return await MessageService.replyToMessage({
        data,
        req: context.req,
      });
    },

    markMessageAsRead: async (_: any, args: any, context: any) => {
      const { conversationId } = args;
      return await MessageService.markAsRead({
        conversationId,
        req: context.req,
      });
    },

    deleteMessage: async (_: any, args: any, context: any) => {
      const { messageId } = args;
      return await MessageService.deleteMessage({
        messageId,
        req: context.req,
      });
    },
  },

  Subscription: {
    ...messageSubscribe,
  },
};
