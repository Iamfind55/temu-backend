import { BaseStatus, BaseType } from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";

export interface ShopTypeModel extends BaseType {
  name: string;
  image: string;
  register_fee: number;
  commission_percent: number;
  status: BaseStatus;
}

export interface ShopTypeWhereInput {
  name: string;
  status: BaseStatus;
  createdAtBetween: DateBetween;
}
