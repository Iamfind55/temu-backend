import { ConversationService } from "../services";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { conversationMutation } from "./conversation.mutation";
import { conversationQuery } from "./conversatiion.query";

export const conversationResolvers = {
  Query: {
    ...conversationQuery
  },

  Mutation: {
    ...conversationMutation
  },
};
