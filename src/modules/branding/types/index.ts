import { DateBetween } from "./../../shopProduct/types/index";
import {
  BaseStatus,
  BaseType,
  NameTranslateBase,
} from "../../../utils/base/baseType";

export interface BrandingModel extends BaseType {
  name: NameTranslateBase;
  image: string;
  status: BaseStatus;
}

export interface BrandingWhereInput {
  keyword: string;
  status: BaseStatus;
  createdAtBetween: DateBetween;
}
