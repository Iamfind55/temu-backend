import { Request } from "express";
import { ConversationService } from "../services";
import { CreateConversationInput } from "../types";

export const conversationMutation = {
    createConversation: async (
        _: any,
        { data }: { data: CreateConversationInput },
        { req }: { req: Request }
      ) => ConversationService.createConversation({ data: data, req }),
}