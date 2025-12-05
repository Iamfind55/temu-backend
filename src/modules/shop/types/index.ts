import { BaseType } from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";

export interface ShopModel extends BaseType {
  fullname: string;
  username: string;
  password: string | undefined;
  email: string;
  phone_number: String;
  dob: Date;
  status: ShopStatus;
  shop_vip: number;
  shop_star: number;
  profit: number;
  payment_method: [PaymentMethod];
  image: ShopImage;
  id_card_info: ShopIdCardInfo;
  store_name: string;
  remark: string;
  shop_address: string;
}
export interface ShopResetPassword {
  new_password: string;
  otp: string;
  email: string;
}

export interface ShopWhereInput {
  shop_id: string;
  status: ShopStatus;
  keyword: string;
  shop_vip: number;
  createdAtBetween: DateBetween;
}

export interface ShopWhereLoginInput {
  username: string;
  password: string;
}

export interface ShopLoginResponse {
  token: string;
  data: ShopModel;
}

export enum ShopRole {
  Shop = "Shop",
  ADMIN = "ADMIN",
}

export interface ShopImage {
  logo: string;
  cover: string;
}

export interface ShopIdCardInfo {
  id_card_number: string;
  id_card_image_front: string;
  id_card_image_back: string;
  id_card_image: string;
}

export interface PaymentMethod {
  id: string;
  code: string;
  bank_name: string;
  bank_account_name: string;
  bank_account_number: string;
  is_enable: boolean;
}

export enum ShopStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  FROZEN = "FROZEN",
  INACTIVE = "INACTIVE",
}

export enum ShopRequestStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  FAILED = "FAILED",
}

export interface ShopRequestVIPData {
  request_vip: string;
  profit: number;
  balance: number;
  add_balance_amount: number;
  request_status: ShopRequestStatus;
  payment_slip: string;
  requested_at: Date;
}

export interface ResendOtpShopInput{
  email: string;
}
export interface ShopVerifyOTPInput {
  email: string;
  otp: string;
}