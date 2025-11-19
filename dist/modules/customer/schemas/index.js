"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerSchema = void 0;
exports.customerSchema = `
  type Customer {
    id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    phone_number: String
    dob: DateTime
    image: String
    customer_address: String
    status: BaseStatus
    customer_type: CustomerType
    created_by: String
    created_at: DateTime
    updated_at: DateTime
    payment_method: [PaymentMethodType]
  } 

  enum CustomerType {
    REAL
    FAKE
  }

  input RegisterCustomerInput {
    email: String!
    firstName: String
    lastName: String
    username: String
    password: String
    phone_number: String
    dob: DateTime
    image: String
  }
  input CreateCustomerInput {
    firstName: String
    lastName: String
    username: String!
    password: String!
    email: String
    phone_number: String
    dob: DateTime
    image: String
    customer_address: String
    status: BaseStatus = ACTIVE
  }
  input VerifyOtpCustomerInput {
    otp: String!
    email: String!
  }
  input ResendOtpCustomerInput {
    email: String!
  }
    
  input CreatePasswordCustomerInput {
    password: String!
    email: String!
  }

  input UpdateCustomerInput {
    id: ID!
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
    phone_number: String
    dob: DateTime
    image: String
    customer_address: String
    status: BaseStatus
    payment_method: [PaymentMethodInput]
  }
  input UpdateCustomerInformationInput {
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
    phone_number: String
    dob: DateTime
    image: String
    customer_address: String
    status: BaseStatus
    customer_type: CustomerType
    payment_method: [PaymentMethodInput]
  }

  input CustomerWhereInput {
    keyword: String
    status: BaseStatus
    customer_type: CustomerType
    createdAtBetween: DateBetweenInput
  }

  input CustomerWhereLoginInput {
    email: String!
    password: String!
  }

  type CustomerLoginType {
    token: String
    data: Customer
  }

  type CustomerLoginResponse {
    success: Boolean!
    data: CustomerLoginType
    error: Error
  }

  type SuccessCustomerResponseOne {
    success: Boolean!
    data: Customer
    error: Error
  }

  type SuccessCustomerResponseMany {
    success: Boolean!
    total: Int
    data: [Customer]
    error: Error
  } 

  type Query {
    getCustomers(where: CustomerWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessCustomerResponseMany!
    getCustomer(id: ID!): SuccessCustomerResponseOne!
    getCustomerInformation: SuccessCustomerResponseOne!
  }

  type Mutation {
    customerResendOTP(data: ResendOtpCustomerInput!): CustomerLoginResponse!
    customerCreatePassword(data: CreatePasswordCustomerInput!): CustomerLoginResponse!
    customerVerifyOtp(data: VerifyOtpCustomerInput!): CustomerLoginResponse!
    createCustomer(data: CreateCustomerInput!): SuccessCustomerResponseOne!
    customerRegister(data: RegisterCustomerInput!): CustomerLoginResponse!
    updateCustomer(data: UpdateCustomerInput!): SuccessCustomerResponseOne!
    deleteCustomer(id: ID!): SuccessCustomerResponseOne!
    customerLogin(where: CustomerWhereLoginInput): CustomerLoginResponse!
    customerForgotPassword(email: String!): SuccessShopForgotPasswordResponse!
    customerResetPassword(data: ShopResetPasswordInput!): SuccessCustomerResponseOne!
    updateCustomerInformation(data: UpdateCustomerInformationInput!): SuccessCustomerResponseOne!
  }
`;
