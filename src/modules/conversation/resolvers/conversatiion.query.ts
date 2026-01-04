import { GraphQLResolveInfo } from "graphql";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { ConversationWhereInput } from "../types";
import { ConversationService } from "../services";
import { Request } from "express";

export const conversationQuery = {
  getConversations: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: ConversationWhereInput;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) =>
    ConversationService.getConversations({ where, page, limit, sortedBy, req }, info),
  getConversation: async (
    _: any,
    { id }: { id: string },
    { req }: { req: Request }
  ) => ConversationService.getConversation({ id, req }),

};
