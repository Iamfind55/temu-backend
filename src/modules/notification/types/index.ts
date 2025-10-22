import { BaseStatus, BaseType } from "../../../utils/base/baseType";

export interface NotificationModel extends BaseType {
  title: string;
  description: string;
  shop_id: string;
  customer_id: string;
  reference_id: string;
  is_read: boolean;
  data: JSON;
  status: BaseStatus;
  notification_type: INotificationType;
}

export interface NotificationWhereInput {
  keyword: string;
  status: BaseStatus;
  notification_type: INotificationType;
  createdAtBetween: DateBetween;
  shop_id: string;
  is_read: boolean | null;
}

export interface DateBetween {
  startDate: string;
  endDate: string;
}

export enum INotificationType {
  DEALER_APPLICATION = "DEALER_APPLICATION",
  PRODUCT_APPLICATION = "PRODUCT_APPLICATION",
  WITHDRAWAL = "WITHDRAWAL",
  RECHARGE = "RECHARGE",
  ORDER = "ORDER",
  INVENTORY_SHIPMENT = "INVENTORY_SHIPMENT",
  FUND_PUNISH = "FUND_PUNISH",
  SHOP_REQUEST_VIP = "SHOP_REQUEST_VIP",
}
