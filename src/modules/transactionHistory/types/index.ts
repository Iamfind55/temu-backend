import { BaseStatus, BaseType } from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";

export interface TransactionHistoryModel extends BaseType {
  identifier: ETransactionHistoryIdentifier;
  amount: number;
  coin_type: ECoinType;
  shop_id: string;
  custoemr_id: string;
  wallet_id: string;
  payment_slip: string;
  account_number: string;
  status?: BaseStatus;
}

export interface TransactionHistoryWhereInput {
  identifier: ETransactionHistoryIdentifier;
  coin_type: ECoinType;
  createdAtBetween: DateBetween;
  shop_id: string;
  customer_id?: string | null;
  wallet_id?: string | null;
}

export enum ETransactionHistoryIdentifier {
  RECHARGE = "RECHARGE",
  WITHDRAW = "WITHDRAW",
  DEPOSIT = "DEPOSIT",
}

export enum ECoinType {
  ETH = "ETH",
  TRX_USDT = "TRX/USDT",
  BTC = "BTC",
}

export enum ETransactionStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}
