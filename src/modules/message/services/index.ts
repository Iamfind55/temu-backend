import { Request } from "express";
import { getManager, getRepository } from "typeorm";
import { config } from "../../../config";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import pubsub, { SUBSCRIPTION_EVENTS } from "../../../utils/pubsub";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import { handleSuccess, handleSuccessWithTotalData } from "../../../utils/response/success.handler";
import { Conversation } from "../../conversation";
import { Shop } from "../../shop";
import { Staff } from "../../staff";
import { Message } from "../entity";
import { MessageType, MessageWhereInput, ReplyToMessageInput, SenderType, SendMessageInput } from "../types";
import { log } from "util";

export class MessageService {
  static async sendMessage({
    data,
    req,
  }: {
    data: SendMessageInput | ReplyToMessageInput;
    req: Request;
  }): Promise<Response<Message | null>> {
    const transactionManager = getManager();
    const messageRepository = getRepository(Message);

    try {
      // Try to verify shop token first
      let shopDataFromToken = new AuthMiddlewareService().verifyShopToken(req);
      let staffDataFromToken = null;
      let senderId: string;
      let senderType: SenderType;

      if (shopDataFromToken) {
        senderId = shopDataFromToken.id;
        senderType = SenderType.SHOP;
      } else {
        staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(req);
        if (!staffDataFromToken) {
          return handleError(config.message.invalid_token, 404, null);
        }
        senderId = staffDataFromToken.id;
        senderType = SenderType.ADMIN;
      }

      return await transactionManager.transaction(async (entityManager) => {
        const message = messageRepository.create({
          conversation_id: data.conversation_id,
          sender_id: senderId,
          text: data.text,
          sender_type: senderType,
          reply_to_id: (data as any).reply_to_id || null,
          attachment: (data as any).attachment || null,
        });

        const savedMessage = await entityManager.save(Message, message);
        // Update conversation's last_message_at
        await entityManager.update(Conversation, data.conversation_id, {
          last_message_at: new Date(),
        });
        const messageId = savedMessage.id;

        const completeMessage = await entityManager.findOne(Message, {
          where: { id: messageId },
          relations: ["replyTo"],
        });
        if (completeMessage) {
          if (completeMessage.sender_type === SenderType.SHOP) {
            const shopSender = await getRepository(Shop)
              .createQueryBuilder("shop")
              .select([
                "shop.id",
                "shop.email",
                "shop.fullname",
                "shop.store_name",
                "shop.phone_number",
                "shop.image",
                "shop.shop_star",
                "shop.shop_vip",
              ])
              .where("shop.id = :id", { id: completeMessage.sender_id })
              .getOne();

            (completeMessage as any).shop_sender = shopSender || null;
          } else if (completeMessage.sender_type === SenderType.ADMIN) {
            const adminSender = await getRepository(Staff)
              .createQueryBuilder("staff")
              .select([
                "staff.id",
                "staff.email",
                "staff.image",
              ])
              .where("staff.id = :id", { id: completeMessage.sender_id })
              .getOne();

            (completeMessage as any).admin_sender = adminSender || null;
          }
        }


        // Publish to conversation-specific subscribers
        await pubsub.publish(`${SUBSCRIPTION_EVENTS.MESSAGE_ADDED}_${data.conversation_id}`, {
          sendMessage: { type: (data as any).reply_to_id ? MessageType.REPLY : MessageType.NEW, completeMessage },
        });

        // If message is from SHOP, notify admins
        if (senderType === SenderType.SHOP) {
          await pubsub.publish(SUBSCRIPTION_EVENTS.NEW_MESSAGE_FOR_ADMIN, {
            newMessageForAdmin: completeMessage,
          });
        }
        return handleSuccess(savedMessage);
      });
    } catch (error: any) {
      console.error("Error sending message:", error);
      return handleError(config.message.internal_server_error, 500, error.message);
    }
  }

  static async replyToMessage({
    data,
    req,
  }: {
    data: ReplyToMessageInput;
    req: Request;
  }): Promise<Response<Message | null>> {
    const messageRepository = getRepository(Message);

    try {
      // Verify the message being replied to exists
      const originalMessage = await messageRepository.findOne({
        where: { id: data.reply_to_id, is_active: true },
      });


      if (!originalMessage) {
        return handleError("Original message not found", 404, null);
      }

      // Send message with reply_to_id
      return await this.sendMessage({
        data: {
          conversation_id: data.conversation_id,
          text: data.text,
          attachments: data.attachments,
          reply_to_id: data.reply_to_id,
        },
        req,
      });
    } catch (error: any) {
      console.error("Error replying to message:", error);
      return handleError(config.message.internal_server_error, 500, error.message);
    }
  }



  static async getMessages({
    where,
    page,
    limit,
    sortedBy,
    req,
  }: {
    where: Partial<MessageWhereInput>;
    page: number;
    limit: number;
    sortedBy: BaseOrderByInput;
    req: Request;
  }): Promise<Response<Message[] | null>> {
    const messageRepository = getRepository(Message);

    try {
      const authService = new AuthMiddlewareService();

      const shop = authService.verifyShopToken(req);
      const staff = authService.verifyStaffToken(req);

      if (!shop && !staff) {
        return handleError(config.message.invalid_token, 401, null);
      }

      if (!where.conversation_id) {
        return handleError("Conversation ID is required", 400, null);
      }

      const queryBuilder = messageRepository
        .createQueryBuilder("message")

        // Reply first
        .leftJoinAndSelect("message.replyTo", "replyTo")
        .leftJoinAndMapOne(
          "message.shop_sender",
          "shop",
          "sender_shop",
          "message.sender_id::uuid = sender_shop.id AND message.sender_type = 'SHOP'"
        )
        .leftJoinAndMapOne(
          "message.admin_sender",
          "staff",
          "sender_staff",
          "message.sender_id::uuid = sender_staff.id AND message.sender_type = 'ADMIN'"
        )
        .addSelect([
          "sender_shop.id",
          "sender_shop.email",
          "sender_shop.store_name",
          "sender_shop.shop_vip",

          "sender_staff.id",
          "sender_staff.email",
          "sender_staff.firstName",
          "sender_staff.lastName",
          "sender_staff.image",
        ])

        .where("message.conversation_id = :conversationId", { conversationId: where.conversation_id })
        .andWhere("message.is_active = true")
        .andWhere("message.deleted_at IS NULL");

      if (where.keyword) {
        queryBuilder.andWhere("message.text ILIKE :keyword", { keyword: `%${where.keyword}%` });
      }

      const [orderField, orderDirection] = this.order(sortedBy);

      queryBuilder
        .orderBy(orderField, orderDirection)
        .skip((page - 1) * limit)
        .take(limit);

      const [messages, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(messages, total);
    } catch (error: any) {
      console.error("Error getting messages:", error);
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }


  static async markAsRead({
    conversationId,
    req,
  }: {
    conversationId: string;
    req: Request;
  }): Promise<Response<boolean>> {
    const messageRepository = getRepository(Message);

    try {
      // Verify either shop or staff token
      let sender_type
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(req);
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(req);

      if (!shopDataFromToken && !staffDataFromToken) {
        return handleError(config.message.invalid_token, 404, null) as unknown as Response<boolean>;
      }
      if (shopDataFromToken) {
        sender_type = SenderType.ADMIN;
      } else {
        sender_type = SenderType.SHOP;
      }

      // Get messages before updating to check if there are any to mark as read
      const messagesToUpdate = await messageRepository.find({
        where: { conversation_id: conversationId, sender_type, is_active: true, is_read: false },
        relations: ["replyTo"],
      });

      if (!messagesToUpdate || messagesToUpdate.length === 0) {
        return handleSuccess(false);
      }

      // Update messages to mark as read
      await messageRepository
        .createQueryBuilder()
        .update(Message)
        .set({ is_read: true, read_at: () => "NOW()" })
        .where("conversation_id = :conversationId", { conversationId })
        .andWhere("sender_type = :sender_type", { sender_type })
        .andWhere("is_active = true")
        .andWhere("is_read = false")
        .execute();

      // Map sender data to each message for subscription
      const messagesWithSenderData = await Promise.all(
        messagesToUpdate.map(async (msg) => {
          if (msg.sender_type === SenderType.SHOP) {
            const shopSender = await getRepository(Shop)
              .createQueryBuilder("shop")
              .select([
                "shop.id",
                "shop.email",
                "shop.fullname",
                "shop.store_name",
                "shop.phone_number",
                "shop.image",
                "shop.shop_star",
                "shop.shop_vip",
              ])
              .where("shop.id = :id", { id: msg.sender_id })
              .getOne();

            return { ...msg, shop_sender: shopSender || null, is_read: true, read_at: new Date() };
          } else if (msg.sender_type === SenderType.ADMIN) {
            const adminSender = await getRepository(Staff)
              .createQueryBuilder("staff")
              .select([
                "staff.id",
                "staff.email",
                "staff.image",
              ])
              .where("staff.id = :id", { id: msg.sender_id })
              .getOne();

            return { ...msg, admin_sender: adminSender || null, is_read: true, read_at: new Date() };
          }
          return { ...msg, is_read: true, read_at: new Date() };
        })
      );

      // Publish each updated message to conversation-specific subscribers using sendMessage event
      for (const message of messagesWithSenderData) {
        await pubsub.publish(`${SUBSCRIPTION_EVENTS.MESSAGE_ADDED}_${conversationId}`, {
          sendMessage: { type: MessageType.READ, message },
        });
      }

      return handleSuccess(true);
    } catch (error: any) {
      console.error("Error marking message as read:", error);
      return handleError(config.message.internal_server_error, 500, error.message) as unknown as Response<boolean>;
    }
  }

  static async setMessageStatus({
    messageId,
    req,
  }: {
    messageId: string;
    req: Request;
  }): Promise<Response<Message | null>> {
    const messageRepository = getRepository(Message);

    try {
      // Verify either shop or staff token
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(req);
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(req);

      if (!shopDataFromToken && !staffDataFromToken) {
        return handleError(config.message.invalid_token, 404, null);
      }

      const message = await messageRepository.findOne({
        where: { id: messageId, is_active: true },
      });

      if (!message) {
        return handleError("Message not found", 404, null);
      }

      message.is_read = true;
      message.read_at = new Date();

      const updatedMessage = await messageRepository.save(message);

      // Publish to message-specific subscribers
      await pubsub.publish(`${SUBSCRIPTION_EVENTS.MESSAGE_STATUS_UPDATED}_${messageId}`, {
        messageStatusUpdated: updatedMessage,
      });

      return handleSuccess(updatedMessage);
    } catch (error: any) {
      console.error("Error setting message status to read:", error);
      return handleError(config.message.internal_server_error, 500, error.message);
    }
  }
  static async deleteMessage({
    messageId,
    req,
  }: {
    messageId: string;
    req: Request;
  }): Promise<Response<boolean>> {
    const messageRepository = getRepository(Message);

    try {
      // Verify either shop or staff token
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(req);
      const staffDataFromToken = new AuthMiddlewareService().verifyStaffToken(req);

      if (!shopDataFromToken && !staffDataFromToken) {
        return handleError(config.message.invalid_token, 404, null) as unknown as Response<boolean>;
      }

      const senderId = shopDataFromToken ? shopDataFromToken.id : staffDataFromToken!.id;

      const message = await messageRepository.findOne({
        where: { id: messageId, is_active: true },
      });

      if (!message) {
        return handleError("Message not found or you don't have permission to delete it", 404, null) as unknown as Response<boolean>;
      }

      await messageRepository.update(messageId, { deleted_at: new Date(), is_active: false, is_deleted: true });

      // Publish to conversation-specific subscribers using sendMessage event
      await pubsub.publish(`${SUBSCRIPTION_EVENTS.MESSAGE_ADDED}_${message.conversation_id}`, {
        sendMessage: {
          type: MessageType.DELETE,
          id: messageId,
          conversation_id: message.conversation_id,
          deleted_at: new Date(),
          is_deleted: true,
          sender_id: senderId,
          sender_type: message.sender_type,
        },
      });

      return handleSuccess(true);
    } catch (error: any) {
      console.error("Error deleting message:", error);
      return handleError(config.message.internal_server_error, 500, error.message) as unknown as Response<boolean>;
    }
  }

  static order(sortedBy: BaseOrderByInput): [string, "ASC" | "DESC"] {
    switch (sortedBy) {
      case BaseOrderByInput.created_at_ASC:
        return ["message.created_at", "ASC"];
      case BaseOrderByInput.created_at_DESC:
        return ["message.created_at", "DESC"];
      case BaseOrderByInput.updated_at_ASC:
        return ["message.updated_at", "ASC"];
      case BaseOrderByInput.updated_at_DESC:
        return ["message.updated_at", "DESC"];
      default:
        return ["message.created_at", "ASC"];
    }
  }
}
