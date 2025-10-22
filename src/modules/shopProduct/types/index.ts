import { BaseStatus, BaseType } from "../../../utils/base/baseType";

export interface ShopProductModel extends BaseType {
  quantity: number;
  product_id: string;
  shop_id: string;
  status: BaseStatus;
  category_id: string;
  vip: number;
}

export interface ShopProductWhereInput {
  keyword: string;
  status: BaseStatus;
  shopProductStatus: ShopProductStatus;
  createdAtBetween: DateBetween;
  shop_id: string;
  quantity: number;
}

export interface DateBetween {
  startDate: string;
  endDate: string;
}

export enum ShopProductStatus {
  ON_SHELF = "ON_SHELF",
  UN_SHELF = "UN_SHELF",
}
