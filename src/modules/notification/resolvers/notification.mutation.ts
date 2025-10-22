import { Request } from "express";
import { NotificationService } from "../services";

export const notificationMutation = {
  shopReadNotification: async (
    _: any,
    {
      id,
    }: {
      id: string;
    },
    { req }: { req: Request }
  ) => NotificationService.shopReadNotification({ req, id }),
};
