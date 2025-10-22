import { GraphQLResolveInfo } from "graphql";
import { BaseOrderByInput } from "../../../utils/base/baseType";
import { NotificationWhereInput } from "../types";
import { NotificationService } from "../services";
import { Request } from "express";

export const notificationQuery = {
  shopGetNotifications: async (
    _: any,
    {
      where,
      page = 1,
      limit = 10,
      sortedBy = BaseOrderByInput.created_at_DESC,
    }: {
      where: Partial<NotificationWhereInput>;
      page: number;
      limit: number;
      sortedBy: BaseOrderByInput;
    },
    { req }: { req: Request },
    info: GraphQLResolveInfo
  ) =>
    NotificationService.shopGetNotifications(
      { req, where, page, limit, sortedBy },
      info
    ),
};
