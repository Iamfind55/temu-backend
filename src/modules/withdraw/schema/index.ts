export const withdrawSchema = `
  type Withdraw {
    id: ID
    amount: Float
    coin_type: ECoinType
    status: EDeposit
    accountName: String
    accountNumber: String
    note: String
    customer_id: String
    shop_id: String
    transaction_id: String
    approved_by: String
    approved_at: DateTime
    rejection_reason: String
    is_active: Boolean
    created_by: String
    created_at: DateTime
    updated_at: DateTime
    updated_by: String
    customer: Customer
    shop: Shop
    transaction: TransactionHistory
  }

  input CreateWithdrawInput {
    coin_type: ECoinType!
    wallet_id: String!
    amount: Float!
    accountName: String!
    accountNumber: String!
    note: String
  }

  enum ECoinType {
    ERC20
    TRC20
    BTC
  }

  enum EDeposit {
    pending
    draff
    completed
    deleted
    rejected
  }

  enum EUserType {
    STAFF
    CUSTOMER
    SHOP
  }
  input ApproveWithdrawInput {
    id: ID!
  }

  input RejectWithdrawInput {
    id: ID!
    rejection_reason: String!
  }

  input UpdateWithdrawInput {
    id: ID!
    amount: Float
    accountName: String
    accountNumber: String
    note: String
    rejection_reason: String
  }

  input WithdrawWhereInput {
    customer_id: String
    shop_id: String
    status: EDeposit
    createdAtBetween: DateBetweenInput
    type: EUserType
  }

  type SuccessWithdrawResponseOne {
    success: Boolean!
    data: Withdraw
    error: Error
    message: String
  }

  type SuccessWithdrawResponseMany {
    success: Boolean!
    total: Int
    data: [Withdraw]
    error: Error
    message: String
  }

  type Query {
    getWithdraw(id: ID!): SuccessWithdrawResponseOne!
    getWithdraws(where: WithdrawWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessWithdrawResponseMany!
  }

  type Mutation {
    createWithdraw(data: CreateWithdrawInput!): SuccessWithdrawResponseOne!
    approveWithdraw(data: ApproveWithdrawInput!): SuccessWithdrawResponseOne!
    rejectWithdraw(data: RejectWithdrawInput!): SuccessWithdrawResponseOne!
    updateWithdraw(data: UpdateWithdrawInput!): SuccessWithdrawResponseOne!
    deleteWithdraw(id: ID!): SuccessWithdrawResponseOne!
  }
`;
