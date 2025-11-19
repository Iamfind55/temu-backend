import { BaseType, EDeposit, EUserType } from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";
import { ECoinType } from "../../transactionHistory";

export interface WithdrawModel extends BaseType {
  amount: number;
  coin_type?: ECoinType;
  status: EDeposit;
  accountName: string;
  accountNumber: string;
  note?: string;
  customer_id?: string;
  shop_id?: string;
  transaction_id?: string;
  approved_by?: string;
  approved_at?: Date;
  rejection_reason?: string;
}

export interface CreateWithdrawInput {
  amount: number;
  coin_type: ECoinType;
  wallet_id: string;
  accountName: string;
  accountNumber: string;
  note?: string;
  customer_id?: string;
  shop_id?: string;
  status?: EDeposit;
}

export interface ApproveWithdrawInput {
  id: string;
}

export interface RejectWithdrawInput {
  id: string;
  rejection_reason: string;
}

export interface UpdateWithdrawInput {
  id: string;
  amount?: number;
  accountName?: string;
  accountNumber?: string;
  note?: string;
  customer_id?: string;
  shop_id?: string;
  transaction_id?: string;
  status?: EDeposit;
  approved_by?: string;
  approved_at?: Date;
  rejection_reason?: string;
}

export interface WithdrawWhereInput {
  customer_id?: string;
  shop_id?: string;
  status?: EDeposit;
  createdAtBetween?: DateBetween;
  type?: EUserType;
}
