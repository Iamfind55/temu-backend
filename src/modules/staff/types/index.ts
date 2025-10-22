import { BaseStatus, BaseType } from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";

export interface StaffModel extends BaseType {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  dob: Date;
  image: string;
  status: BaseStatus;
}

export interface StaffWhereInput {
  status: BaseStatus;
  keyword: string;
  createdAtBetween: DateBetween;
}

export interface StaffWhereLoginInput {
  username: string;
  password: string;
}

export interface StaffLoginResponse {
  token: string;
  data: StaffModel;
}

export enum StaffRole {
  STAFF = "STAFF",
  ADMIN = "ADMIN",
}
