import { BaseStatus, BaseType } from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";

export interface ShopSocialModel extends BaseType {
  name: string;
  image: string;
  shop_id: string;
  link: string;
  status: BaseStatus;
}

export interface ShopSocialWhereInput {
  keyword: string;
  status: BaseStatus;
  createdAtBetween: DateBetween;
}
