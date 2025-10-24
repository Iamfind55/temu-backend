import { NameTranslateBase } from "./../../../utils/base/baseType";
import { BaseStatus, BaseType } from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";

export interface ProductModel extends BaseType {
  name: NameTranslateBase;
  description: NameTranslateBase;
  images: [string];
  cover_image: string;
  price: number;
  discount: number;
  quantity: number;
  sku: string;
  spu: string;
  total_star: number;
  total_comment: number;
  sell_count: number;
  category_id: string;
  brand_id: string;
  status: BaseStatus;
  recommended: boolean;
  product_top: number;
  product_vip: number;
}

export interface ProductWhereInput {
  keyword: string;
  category_id: string;
  category_ids: [string];
  brand_id: string;
  status: BaseStatus;
  price_between: [number, number];
  product_vip: number;
  product_top: number;
  quantity?: number;
  discount?: number;
  offer?: boolean;
  star_top?: boolean;
  createdAtBetween: DateBetween;
  within?: number;
}

export interface SimilarProductWhereInput extends ProductWhereInput {
  product_id: string;
}

export interface ProductBestSellingWhereInput {
  category_id: string;
  within: number;
}
