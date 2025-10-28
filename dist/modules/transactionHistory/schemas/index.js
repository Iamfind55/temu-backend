"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionHistorySchema = void 0;
exports.transactionHistorySchema = ` 
  enum CoinTypeEnum {
    ERC20 
    TRC20 
    BTC
  }

  enum TransactionIdentifierEnum {
    RECHARGE
    WITHDRAW
  }

  enum TransactionStatusEnum {
    FAILED
    PENDING
    APPROVED
    REJECTED
  }

  type TransactionHistory {
    id: ID
    identifier: TransactionIdentifierEnum
    amount: Float
    coin_type: CoinTypeEnum
    payment_slip: String
    wallet_id: String
    status: BaseStatus
    transaction_status: TransactionStatusEnum
    shop_id: String
    shop: Shop
    customer_id: String
    account_number: String
    customer: Customer
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  } 

  input TransactionHistoryWhereInput {
    identifier: TransactionIdentifierEnum
    coin_type: CoinTypeEnum
    createdAtBetween: DateBetweenInput
  }

  type SuccessTransactionHistoryResponseOne {
    success: Boolean!
    data: TransactionHistory
    error: Error
  }

  type SuccessTransactionHistoryResponseMany {
    success: Boolean!
    total: Int
    data: [TransactionHistory]
    error: Error
  } 

  type Query {
    shopGetTransactionHistories(where: TransactionHistoryWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessTransactionHistoryResponseMany!
    shopGetTransactionHistory(id: ID!): SuccessTransactionHistoryResponseOne!


    customerGetTransactionHistories(where: TransactionHistoryWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessTransactionHistoryResponseMany!
    customerGetTransactionHistory(id: ID!): SuccessTransactionHistoryResponseOne!

    adminGetTransactionHistories(where: TransactionHistoryWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessTransactionHistoryResponseMany!
    adminGetTransactionHistory(id: ID!): SuccessTransactionHistoryResponseOne!

    countNewTransaction(identifier: TransactionIdentifierEnum): SuccessCountResponseOne!
  }

 type Mutation {
   adminApproveRechargeTransactionHistory(id: ID!): SuccessTransactionHistoryResponseOne! 
   adminRejectTransactionHistory(id: ID!): SuccessTransactionHistoryResponseOne! 
 }

  type Subscription {
    transactionSubscribe: Notification!
  }
`;
