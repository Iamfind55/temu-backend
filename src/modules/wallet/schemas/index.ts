export const walletSchema = `
  enum WalletOwnerType {
    CUSTOMER
    SHOP
  }
  
  input WalletWhereInput {
    keyword: String
    status: BaseStatus
    createdAtBetween: DateBetweenInput
    owner_type: WalletOwnerType
  }

  type Wallet {
    id: ID
    name: String
    total_balance: Float
    total_withdraw: Float
    total_recharged: Float
    total_frozen_balance: Float
    total_withdraw_able_balance: Float
    shop_id: String
    customer_id: String
    shop: Shop
    customer: Customer
    status: BaseStatus
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  } 

  input CreateWalletInput {
    name: String
    total_balance: Float
    total_withdraw: Float
    total_recharged: Float
    total_frozen_balance: Float
    total_withdraw_able_balance: Float
    shop_id: String
    customer_id: String
    status: BaseStatus = ACTIVE
  } 

  input RechargeWalletInput {
    amount_recharged: Float!
    coin_type: CoinTypeEnum!
    account_number: String
    image: String
    # identifier: TransactionIdentifierEnum!
  }
  input RechargeWalletWithInactiveStautsInput {
    amount_recharged: Float!
    coin_type: CoinTypeEnum!
    account_number: String
    image: String
    email: String!
  }
  input WithdrawWalletInput {
    amount_withdraw: Float!
    coin_type: CoinTypeEnum!
    account_number: String
    image: String
    # identifier: TransactionIdentifierEnum!
  }

  input UpdateWalletInput {
    id: ID!
    name: String
    total_balance: Float
    total_withdraw: Float
    total_recharged: Float
    total_frozen_balance: Float
    total_withdraw_able_balance: Float
    shop_id: String
    customer_id: String
    status: BaseStatus
  }

  type SuccessWalletResponseOne {
    success: Boolean!
    data: Wallet
    error: Error
  }

  type SuccessWalletResponseMany {
    success: Boolean!
    total: Int
    data: [Wallet]
    error: Error
  }

  type Query { 
    getShopWallet: SuccessWalletResponseOne!
    getCustomerWallet: SuccessWalletResponseOne!

    adminGetWallets(where: WalletWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessWalletResponseMany!
    adminGetWallet(id: ID!): SuccessWalletResponseOne!
  }

 type Mutation {
    shopRechargeBalance(data: RechargeWalletInput!): SuccessWalletResponseOne!
    shopRechargeBalanceWithInactiveStatus(data: RechargeWalletWithInactiveStautsInput!): SuccessWalletResponseOne!
    shopWithdrawBalance(data: WithdrawWalletInput!): SuccessWalletResponseOne!


    customerRechargeBalance(data: RechargeWalletInput!): SuccessWalletResponseOne!
    customerWithdrawBalance(data: WithdrawWalletInput!): SuccessWalletResponseOne!
    # shopCreateWallet(data: CreateWalletInput): SuccessWalletResponseOne!
 }
`;
