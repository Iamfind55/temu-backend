import {
  BaseStatus,
  BaseType,
  NameTranslateBase,
} from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";

export interface CategoryModel extends BaseType {
  name: NameTranslateBase;
  image: string;
  status: BaseStatus;
  attributes?: string[];
}

export interface CategoryWhereInput {
  keyword: string;
  status: BaseStatus;
  parent_id: string;
  createdAtBetween: DateBetween;
}
