import pubsub, { SUBSCRIPTION_EVENTS } from "../../../utils/pubsub";

export const messageSubscribe = {
  sendMessage: {
    subscribe: (_: any, { conversationId }: { conversationId: string }) => {
      return pubsub.asyncIterator([`${SUBSCRIPTION_EVENTS.MESSAGE_ADDED}_${conversationId}`]);
    },
  },
  messageStatusUpdated: {
    subscribe: (_: any, args: any) => {
      const { conversationId } = args;
      return pubsub.asyncIterator([`${SUBSCRIPTION_EVENTS.MESSAGE_STATUS_UPDATED}_${conversationId}`]);
    },
  },
  messageDeleted: {
    subscribe: (_: any, args: any) => {
      const { conversationId } = args;
      return pubsub.asyncIterator([`${SUBSCRIPTION_EVENTS.MESSAGE_DELETED}_${conversationId}`]);
    },
  },
  newMessageForAdmin: {
    subscribe: () => {
      return pubsub.asyncIterator([SUBSCRIPTION_EVENTS.NEW_MESSAGE_FOR_ADMIN]);
    },
  },
};