import {
  BaseStatus,
  BaseType
} from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";

export interface CategoryModel extends BaseType {
  name: string;
  image: string;
  oring_image_url:string
  status: BaseStatus;
  parent_id?: string;
  attributes?: string[];
}

export interface CategoryWhereInput {
  keyword: string;
  status: BaseStatus;
  parent_id: string;
  createdAtBetween: DateBetween;
}
