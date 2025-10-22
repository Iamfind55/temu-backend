import { Request } from "express";
import { config } from "../../../config";
import { handleError } from "../../../utils/response/error.handler";
import { Response } from "../../../utils/response/response.types";
import {
  handleSuccess,
  handleSuccessWithTotalData,
} from "../../../utils/response/success.handler";
import { Brackets, getRepository } from "typeorm";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { AuthMiddlewareService } from "../../../middlewares/auth.middleware";
import { Notification } from "../entity";
import { INotificationType, NotificationWhereInput } from "../types";
import { GraphQLResolveInfo } from "graphql";
import { getRequestedFields } from "../../../utils/graphqlUtils";
import pubsub from "../../../utils/pubsub";

export class NotificationService {
  static async createNotification({
    data,
  }: {
    data: Notification;
  }): Promise<Response<Notification | null>> {
    console.log("===== starting to createNotification");
    const notificationRepository = getRepository(Notification);

    try {
      const newNotification = notificationRepository.create({
        ...data,
      });

      const savedNotification = await notificationRepository.save(
        newNotification
      );

      if (data.notification_type === INotificationType.ORDER) {
        // Publish to:
        // 1. Shop-specific channel
        pubsub.publish(`NEW_ORDER_SUBSCRIBE_${data.shop_id}`, {
          subscribeNewOrder: data,
        });
        // 2. Global channel (optional, for admin dashboards)
        pubsub.publish("NEW_ORDER_SUBSCRIBE", {
          subscribeNewOrder: data,
        });
      } else if (
        [INotificationType.RECHARGE, INotificationType?.WITHDRAWAL].includes(
          data.notification_type
        )
      ) {
        // 2. Global channel (optional, for admin dashboards)
        pubsub.publish("NEW_TRANSACTION_SUBSCRIBE", {
          transactionSubscribe: data,
        });
      } else if (
        data?.notification_type === INotificationType.SHOP_REQUEST_VIP
      ) {
        // 2. Global channel (optional, for admin dashboards)
        pubsub.publish("NEW_SHOP_REQUEST_VIP_SUBSCRIBE", {
          subscribeNewRequestVIP: data,
        });
      }

      return handleSuccess(savedNotification);
    } catch (error: any) {
      console.log({ error });
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopReadNotification({
    req,
    id,
  }: {
    req: Request;
    id: string;
  }): Promise<Response<Notification | null>> {
    const notificationRepository = getRepository(Notification);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );
      const existNotification = await notificationRepository.findOne({
        where: { id, shop_id: shopDataFromToken?.id },
      });

      if (!existNotification)
        return handleError("Notification not found", 404, null);

      if (existNotification.is_read) return handleSuccess(existNotification);

      notificationRepository.merge(existNotification, { is_read: true });

      const updatedNotification = await notificationRepository.save(
        existNotification
      );

      return handleSuccess(updatedNotification);
    } catch (error: any) {
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  static async shopGetNotifications(
    {
      req,
      where,
      page,
      limit,
      sortedBy,
    }: {
      req: Request;
      where: Partial<NotificationWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    info: GraphQLResolveInfo
  ): Promise<Response<Notification[] | null>> {
    const notificationRepository = getRepository(Notification);

    try {
      const shopDataFromToken = new AuthMiddlewareService().verifyShopToken(
        req
      );
      const order = this.order(sortedBy);

      const queryBuilder = notificationRepository
        .createQueryBuilder("notification")
        .where({ is_active: true, shop_id: shopDataFromToken?.id });

      // Apply field selection
      // Extract requested fields dynamically
      const selectFields = getRequestedFields(info, "notifications.data");
      if (selectFields?.length) {
        const fields = selectFields.map((field) => `notification.${field}`);
        queryBuilder.select(fields);
      }

      if (where?.keyword) {
        queryBuilder.andWhere(
          new Brackets((qb) => {
            qb.where("notification.title ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            }).orWhere("notification.description ILIKE :keyword", {
              keyword: `%${where.keyword}%`,
            });
          })
        );
      }

      if (where.is_read != null)
        queryBuilder.andWhere("notification.is_read = :is_read", {
          is_read: where.is_read,
        });

      if (where?.notification_type) {
        queryBuilder.andWhere(
          "notification.notification_type = :notification_type",
          {
            notification_type: where.notification_type,
          }
        );
      }

      if (where?.status) {
        queryBuilder.andWhere("notification.status = :status", {
          status: where.status,
        });
      }

      if (
        where?.createdAtBetween?.startDate &&
        where?.createdAtBetween?.endDate
      ) {
        queryBuilder.andWhere(
          "DATE(notification.created_at) BETWEEN :startDate AND :endDate",
          {
            startDate: where.createdAtBetween.startDate,
            endDate: where?.createdAtBetween?.endDate,
          }
        );
      }

      // Pagination and sorting
      queryBuilder
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy(order as any);

      if (selectFields?.length <= 0) {
        const _total = await queryBuilder.getCount();
        return handleSuccessWithTotalData([], _total);
      }

      const [notifications, total] = await queryBuilder.getManyAndCount();

      return handleSuccessWithTotalData(notifications, total);
    } catch (error: any) {
      console.error({ error });
      return handleError(
        config.message.internal_server_error,
        500,
        error.message
      );
    }
  }

  // Map `sortedBy` enum to TypeORM order format
  static order(sortedBy: BaseOrderByInput) {
    switch (sortedBy) {
      case BaseOrderByInput.created_at_ASC:
        return { "notification.created_at": "ASC" };
      case BaseOrderByInput.created_at_DESC:
        return { "notification.created_at": "DESC" };
      case BaseOrderByInput.updated_at_ASC:
        return { "notification.updated_at": "ASC" };
      case BaseOrderByInput.updated_at_DESC:
        return { "notification.updated_at": "DESC" };
      default:
        return { "notification.created_at": "DESC" }; // Default order
    }
  }
}
