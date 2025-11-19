import { BaseType, EDeposit, EUserType } from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";
import { ECoinType } from "../../transactionHistory";

export interface DepositModel extends BaseType {
  amount: number;
  coin_type?: ECoinType;
  status: EDeposit;
  image: string;
  note?: string;
  customer_id?: string;
  shop_id?: string;
  transaction_id?: string;
  approved_by?: string;
  approved_at?: Date;
  rejection_reason?: string;
}

export interface CreateDepositInput {
  amount: number;
  coin_type: ECoinType;
  walled_id: string;
  payment_slip: string;
  note?: string;
  customer_id?: string;
  shop_id?: string;
  status?: EDeposit;
}


export interface ApprovDepositInput {
  id: string;
}
export interface UpdateDepositInput {
  id: string;
  amount?: number;
  image?: string;
  note?: string;
  customer_id?: string;
  shop_id?: string;
  transaction_id?: string;
  status?: EDeposit;
  approved_by?: string;
  approved_at?: Date;
  rejection_reason?: string;
}

export interface DepositWhereInput {
  customer_id?: string;
  shop_id?: string;
  status?: EDeposit;
  createdAtBetween?: DateBetween;
  type?: EUserType
}
