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
export interface RegisterCustomerInput extends BaseType {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  phone_number: string;
  dob: Date;
  image: string;
}
export interface VerifyOtpCustomerInput extends BaseType {
  otp: string;
  email: string;
}
export interface ResendOtpCustomerInput extends BaseType {
  email: string;
}
export interface CreatePasswordCustomerInput extends BaseType {
  password: string;
  email: string;
}

export interface CustomerWhereInput {
  status: BaseStatus;
  customer_type: CustomerType;
  keyword: string;
  createdAtBetween: DateBetween;
}

export interface CustomerWhereLoginInput {
  email: string;
  password: string;
}

export interface CustomerLoginResponse {
  token?: string;
  data: CustomerModel;
}


export enum CustomerType {
  REAL = "REAL",
  FAKE = "FAKE",
}
