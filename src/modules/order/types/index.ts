import { EDeliveryType } from "../../../utils/base/baseEnum";
import { BaseStatus, BaseType } from "../../../utils/base/baseType";
import { Logistics } from "../../logistics";
import { OrderDetailModel } from "../../orderDetail";
import { DateBetween } from "../../shopProduct";

export interface OrderModel extends BaseType {
  order_no: string;
  total_quantity: number;
  total_price: number;
  total_products: number;
  total_discount: number;
  expected_revenue: number;
  profit: number;
  shop_id: string;
  customer_id: string;
  address_id: string;
  payment_slip: string;
  status: BaseStatus;
  order_status: OrderStatus;
  payment_status: PaymentStatus;
  delivery_type: EDeliveryType;
  order_details: [OrderDetailModel];
  // logistics_id: string
}

export interface OrderWhereInput {
  order_no: string;
  keyword: string;
  order_status: OrderStatus;
  createdAtBetween: DateBetween;
}

export enum OrderStatus {
  NO_PICKUP = "NO_PICKUP",
  PROCESSING = "PROCESSING",
  PACKING = "PACKING",
  SHIPPING = "SHIPPING",
  CANCELLED = "CANCELLED",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export enum SignInStatus {
  NOT_DELIVERY = "NOT_DELIVERY",
  PACKING = "PACKING",
  ON_THE_WAY = "ON_THE_WAY",
  CANCELLED = "CANCELLED",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export enum PaymentStatus {
  FAILED = "FAILED",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export interface AdminUpdateOrderByStatusInput {
  ids: [string];
  order_status: OrderStatus;
  sign_in_status: SignInStatus;
}
