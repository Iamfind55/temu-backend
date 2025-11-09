import {
  BaseStatus,
  BaseType
} from "../../../utils/base/baseType";
import { DateBetween } from "./../../shopProduct/types/index";

export interface BrandingModel extends BaseType {
  name: string;
  image: string;
  status: BaseStatus;
}

export interface BrandingWhereInput {
  keyword: string;
  status: BaseStatus;
  createdAtBetween: DateBetween;
}
