import { BaseStatus, BaseType } from "../../../utils/base/baseType";
import { PaymentMethod } from "../../shop";
import { DateBetween } from "../../shopProduct";

export interface CustomerModel extends BaseType {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phone_number: string;
  dob: Date;
  image: string;
  customer_address: string;
  status: BaseStatus;
  payment_method: [PaymentMethod];
}

export interface CustomerWhereInput {
  status: BaseStatus;
  customer_type: CustomerType;
  keyword: string;
  createdAtBetween: DateBetween;
}

export interface CustomerWhereLoginInput {
  username: string;
  password: string;
}

export interface CustomerLoginResponse {
  token: string;
  data: CustomerModel;
}

export enum CustomerType {
  REAL = "REAL",
  FAKE = "FAKE",
}
