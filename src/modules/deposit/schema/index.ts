export const depositSchema = `
  type Deposit {
    id: ID
    amount: Float
    coin_type: ECoinType
    status: EDeposit
    image: String
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
  }

  enum EUserType {
    STAFF
    CUSTOMER
    SHOP
  }

  input CreateDepositInput {
    coin_type: ECoinType!
    walled_id: String!
    amount: Float!
    payment_slip: String!
    note: String
  }

  input ApprovalDepositInput {
    id: ID!
  }
  input RejectDepositInput {
    id: ID!
    rejection_reason: String!
  }
  input UpdateDepositInput {
    id: ID!
    amount: Float
    payment_slip: String
    note: String
    rejection_reason: String
  }

  input DepositWhereInput {
    customer_id: String
    shop_id: String
    status: EDeposit
    createdAtBetween: DateBetweenInput
    type: EUserType
  }

  type SuccessDepositResponseOne {
    success: Boolean!
    data: Deposit
    error: Error
    message: String
  }

  type SuccessDepositResponseMany {
    success: Boolean!
    total: Int
    data: [Deposit]
    error: Error
    message: String
  }

  type Query {
    getDeposit(id: ID!): SuccessDepositResponseOne!
    getDeposits(where: DepositWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessDepositResponseMany!
  }

  type Mutation {
    createDeposit(data: CreateDepositInput!): SuccessDepositResponseOne!
    approvalDeposit(data: ApprovalDepositInput!): SuccessDepositResponseOne!
    rejectDeposit(data: RejectDepositInput!): SuccessDepositResponseOne!
    updateDeposit(data: UpdateDepositInput!): SuccessDepositResponseOne!
    deleteDeposit(id: ID!): SuccessDepositResponseOne!
  }
`;
