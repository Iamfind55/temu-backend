import { BaseStatus, BaseType } from "../../../utils/base/baseType";
import { DateBetween } from "../../shopProduct";
import {
  ECoinType,
  ETransactionHistoryIdentifier,
} from "../../transactionHistory";

export interface WalletModel extends BaseType {
  name: string;
  total_balance: number;
  total_withdraw: number;
  total_recharged: number;
  total_frozen_balance: number;
  total_withdraw_able_balance: number;
  shop_id: string;
  customer_id: string;
  status: BaseStatus;
}
export interface ShopRechargeBallance {
  amount_recharged: number;
  shop_id: string;
  customer_id: string;
  coin_type: ECoinType;
  identifier: ETransactionHistoryIdentifier;
  payment_slip: string;
  account_number: string;
  email: string;
  image: string;
}

export interface ShopWithdrawBallance {
  amount_withdraw: number;
  shop_id: string;
  customer_id: string;
  coin_type: ECoinType;
  identifier: ETransactionHistoryIdentifier;
  payment_slip: string;
  account_number: string;
}

export enum EWalletOwnerType {
  CUSTOMER = "CUSTOMER",
  SHOP = "SHOP",
}

export interface WalletWhereInput {
  keyword: string;
  status: BaseStatus;
  createdAtBetween: DateBetween;
  owner_type: EWalletOwnerType;
}
