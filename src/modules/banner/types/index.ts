import { BaseStatus, BaseType } from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";

export interface BannerModel extends BaseType {
  name: string;
  image: string;
  link_url: string;
  position: string;
  status: BaseStatus;
}

export interface BannerWhereInput {
  name: string;
  position: string;
  status: BaseStatus;
  createdAtBetween: DateBetween;
}
