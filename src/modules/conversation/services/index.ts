import { Request } from "express";
import { GraphQLResolveInfo } from "graphql";
import { getManager, getRepository } from "typeorm";
import { config } from "../../../config";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import { handleSuccess, handleSuccessWithTotalData } from "../../../utils/response/success.handler";
import { Conversation } from "../entity";
import {
  ConversationStatus,
  ConversationWhereInput,
  CreateConversationInput
} from "../types";

export class ConversationService {
  static async createConversation({
    data,
    req,
  }: {
    data: CreateConversationInput;
    req: Request;
  }): Promise<Response<Conversation | null>> {

    const transactionManager = getManager();
    const conversationRepository = getRepository(Conversation);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(req);
      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      return await transactionManager.transaction(async (entityManager) => {
        // Create conversation
        const conversation = conversationRepository.create({
          title: data.title,
          created_by: shopDataFromToken.id,
          status: ConversationStatus.ACTIVE,
        });

        const savedConversation = await entityManager.save(Conversation, conversation);

        return handleSuccess(savedConversation);
      });
    } catch (error: any) {
      console.error("Error creating conversation:", error);
      return handleError(config.message.internal_server_error, 500, error.message);
    }
  }

  // static async getConversations({
  //   where,
  //   page,
  //   limit,
  //   sortedBy,
  //   req,
  // }: {
  //   where: Partial<ConversationWhereInput>;
  //   page: number;
  //   limit: number;
  //   sortedBy: BaseOrderByInput;
  //   req: Request;
  // }, info: GraphQLResolveInfo): Promise<Response<Conversation[] | null>> {
  //   const conversationRepository = getRepository(Conversation);

  //   try {
  //     const adminDataFromToken = new AuthMiddlewareService().verifyStaffToken(req);
  //     if (!adminDataFromToken)
  //       return handleError(config.message.invalid_token, 404, null);

  //     const queryBuilder = conversationRepository
  //       .createQueryBuilder("conversation")
  //       .leftJoinAndMapOne(
  //         "conversation.creator",
  //         "shop",
  //         "creator_shop",
  //         "conversation.created_by::uuid = creator_shop.id"
  //       )
  //       .leftJoin(
  //         subQ =>
  //           subQ
  //             .select("m.conversation_id", "conversation_id")
  //             .addSelect("m.text", "last_message")
  //             .addSelect("m.created_at", "last_message_at")
  //             .from("message", "m")
  //             .where(
  //               `m.created_at = (
  //               SELECT MAX(m2.created_at)
  //               FROM message m2
  //               WHERE m2.conversation_id = m.conversation_id
  //             )`
  //             ),
  //         "last_message",
  //         "last_message.conversation_id = conversation.id"
  //       )
  //       .leftJoin(
  //         subQ =>
  //           subQ
  //             .select("m.conversation_id", "conversation_id")
  //             .addSelect("COUNT(*)", "unread_count")
  //             .from("message", "m")
  //             .where("m.is_read = false")
  //             .groupBy("m.conversation_id"),
  //         "unread",
  //         "unread.conversation_id = conversation.id"
  //       )
  //       .addSelect("last_message.last_message", "last_message")
  //       .addSelect("last_message.last_message_at", "last_message_at")
  //       .addSelect("COALESCE(unread.unread_count, 0)", "unread_count")
  //       .addSelect([
  //         "creator_shop.id",
  //         "creator_shop.email",
  //         "creator_shop.fullname",
  //         "creator_shop.store_name",
  //         "creator_shop.image",
  //       ])
  //       .andWhere("conversation.is_active = :isActive", { isActive: true });

  //     if (where?.status) {
  //       queryBuilder.andWhere("conversation.status = :status", { status: where.status });
  //     }

  //     if (where?.keyword) {
  //       queryBuilder.andWhere("conversation.title ILIKE :keyword", {
  //         keyword: `%${where.keyword}%`,
  //       });
  //     }

  //     const [orderField, orderDirection] = this.order(sortedBy);
  //     queryBuilder
  //       .skip((page - 1) * limit)
  //       .take(limit)
  //       .orderBy(orderField, orderDirection);

  //     const [conversations, total] = await queryBuilder.getManyAndCount();
  //     console.log(conversations);

  //     return handleSuccessWithTotalData(conversations, total);
  //   } catch (error: any) {
  //     console.error("Error getting conversations:", error);
  //     return handleError(config.message.internal_server_error, 500, error.message);
  //   }
  // }

  static async getConversations(
    {
      where,
      page,
      limit,
      sortedBy,
      req,
    }: {
      where: Partial<ConversationWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
      req: Request;
    },
    info: GraphQLResolveInfo
  ): Promise<Response<Conversation[] | null>> {
    const conversationRepository = getRepository(Conversation);

    try {
      /** 🔐 Verify admin token */
      const adminDataFromToken =
        new AuthMiddlewareService().verifyStaffToken(req);

      if (!adminDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      /** 🧱 Base query */
      const queryBuilder = conversationRepository
        .createQueryBuilder("conversation")
        .leftJoinAndMapOne(
          "conversation.creator",
          "shop",
          "creator_shop",
          "conversation.created_by::uuid = creator_shop.id"
        )
        .leftJoin(
          subQ =>
            subQ
              .select("m.conversation_id", "conversation_id")
              .addSelect("m.text", "last_message")
              .addSelect("m.created_at", "last_message_at")
              .from("message", "m")
              .where(
                `m.created_at = (
                SELECT MAX(m2.created_at)
                FROM message m2
                WHERE m2.conversation_id = m.conversation_id
              )`
              ),
          "last_message",
          "last_message.conversation_id = conversation.id"
        )
        .leftJoin(
          subQ =>
            subQ
              .select("m.conversation_id", "conversation_id")
              .addSelect("COUNT(*)", "unread_count")
              .from("message", "m")
              .where("m.is_read = false")
              .groupBy("m.conversation_id"),
          "unread",
          "unread.conversation_id = conversation.id"
        )
        .addSelect("last_message.last_message", "last_message")
        .addSelect("last_message.last_message_at", "last_message_at")
        .addSelect("COALESCE(unread.unread_count, 0)", "unread_count")
        .addSelect([
          "creator_shop.id",
          "creator_shop.email",
          "creator_shop.fullname",
          "creator_shop.store_name",
          "creator_shop.image",
        ])
        .where("conversation.is_active = true");

      /** 🔎 Filters */
      if (where?.status) {
        queryBuilder.andWhere("conversation.status = :status", {
          status: where.status,
        });
      }

      if (where?.keyword) {
        queryBuilder.andWhere("conversation.title ILIKE :keyword", {
          keyword: `%${where.keyword}%`,
        });
      }

      /** ↕ Sorting + pagination */
      const [orderField, orderDirection] = this.order(sortedBy);

      queryBuilder
        .orderBy(orderField, orderDirection)
        .skip((page - 1) * limit)
        .take(limit);

      /** 📦 Fetch data */
      const { entities, raw } = await queryBuilder.getRawAndEntities();

      /** 🧠 Merge computed fields */
      const conversations = entities.map((conversation, index) => ({
        ...conversation,
        last_message: raw[index]?.last_message ?? null,
        last_message_at: raw[index]?.last_message_at ?? null,
        unread_count: Number(raw[index]?.unread_count ?? 0),
      }));

      /** 🔢 Total count */
      const total = await queryBuilder.getCount();
      console.log(conversations);

      return handleSuccessWithTotalData(conversations, total);
    } catch (error: any) {
      console.error("Error getting conversations:", error);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async getConversation({
    id,
    req,
  }: {
    id: string;
    req: Request;
  }): Promise<Response<Conversation | null>> {
    const conversationRepository = getRepository(Conversation);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(req);
      if (!shopDataFromToken)
        return handleError(config.message.invalid_token, 404, null);

      const conversation = await conversationRepository
        .createQueryBuilder("conversation")
        .leftJoinAndSelect("conversation.members", "members")
        .leftJoinAndSelect("members.shop", "shop")
        .leftJoinAndSelect("members.staff", "staff")
        .where("conversation.id = :id", { id })
        .andWhere("conversation.is_active = :isActive", { isActive: true })
        .andWhere("members.user_id = :userId", { userId: shopDataFromToken.id })
        .getOne();

      if (!conversation) {
        return handleError("Conversation not found", 404, null);
      }

      return handleSuccess(conversation);
    } catch (error: any) {
      console.error("Error getting conversation:", error);
      return handleError(config.message.internal_server_error, 500, error.message);
    }
  }

  static order(sortedBy: BaseOrderByInput): [string, "ASC" | "DESC"] {
    switch (sortedBy) {
      case BaseOrderByInput.created_at_ASC:
        return ["conversation.created_at", "ASC"];
      case BaseOrderByInput.created_at_DESC:
        return ["conversation.created_at", "DESC"];
      case BaseOrderByInput.updated_at_ASC:
        return ["conversation.updated_at", "ASC"];
      case BaseOrderByInput.updated_at_DESC:
        return ["conversation.updated_at", "DESC"];
      default:
        return ["conversation.last_message_at", "DESC"];
    }
  }
}
