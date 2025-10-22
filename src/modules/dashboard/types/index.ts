import { OrderStatus } from "../../order";

export interface OrderDashboard {
  total_order: number;
  order_status: OrderStatus;
}

export interface ShopDashboard {
  total: string;
  increase: string;
}

export interface WhereOrderDashboardInput {
  order_status: OrderStatus;
}
