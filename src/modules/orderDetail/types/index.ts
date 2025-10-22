import { BaseStatus, BaseType } from "../../../utils/base/baseType";
import { OrderStatus, PaymentStatus } from "../../order/types";
import { DateBetween } from "../../shopProduct";

export interface OrderDetailModel extends BaseType {
  order_no: string;
  product_name?: string;
  sku?: string;
  spu?: string;
  quantity: number;
  price: number;
  discount?: number;
  shop_id?: string | undefined;
  product_id: string;
  order_id: string;
  customer_id?: string;
  status?: BaseStatus;
  payment_status?: PaymentStatus;
  order_status?: OrderStatus;
  inventory?: Inventory;
}

export interface OrderDetailWhereInput {
  order_no: string;
  order_status: OrderStatus;
  createdAtBetween: DateBetween;
}

export interface Inventory {
  my_inventory: number;
  total_inventory: number;
}
