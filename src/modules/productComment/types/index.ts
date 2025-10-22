import { BaseStatus, BaseType } from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";

export interface ProductCommentModel extends BaseType {
  comment: string;
  customer_id: string;
  product_id: string;
  status: BaseStatus;
}

export interface ProductCommentWhereInput {
  comment: string;
  status: BaseStatus;
  createdAtBetween: DateBetween;
}
