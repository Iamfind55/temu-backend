"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopSchema = void 0;
exports.shopSchema = `
  type PaymentMethodType {
    id: String
    bank_name: String
    code: String
    bank_account_name: String
    bank_account_number: String
    is_enable: Boolean
  } 

  input PaymentMethodInput {
    id: String
    code: String
    bank_name: String
    bank_account_name: String
    bank_account_number: String
    is_enable: Boolean
  }

  input ShopIdCardInfoInput {
    id_card_number: String
    id_card_image_front: String
    id_card_image_back: String
    id_card_image: String
  }

  type ShopIdCardInfo {
    id_card_number: String
    id_card_image_front: String
    id_card_image_back: String
    id_card_image: String
  }

  type Shop {
    id: ID
    fullname: String
    store_name: String
    username: String
    phone_number: String
    email: String
    dob: Date
    remark: String
    shop_address: String
    image: ShopImageType
    id_card_info: ShopIdCardInfo
    payment_method: [PaymentMethodType]
    status: ShopStatus
    shop_vip: Int
    profit: Float
    created_by: String
    created_at: DateTime
    updated_at: DateTime
    request_vip_data: ShopRequestVIP
  } 
  
  type ShopImageType {
    logo: String
    cover: String
  }

  input ShopImageInput {
    cover: String
    logo: String
  }

  enum ShopRequestVIPStatus {
    PENDING
    APPROVED
    REJECTED
    FAILED
}

  type ShopRequestVIP {
    request_vip: String
    request_status: ShopRequestVIPStatus
    requested_at: DateTime
    profit: Float
  }

  input ShopRequestVIPInput {
    request_vip: String!
  }

  input CreateShopInput {
    fullname: String
    username: String!
    password: String!
    email: String!
    dob: Date
    phone_number: String
    image: ShopImageInput
    status: ShopStatus
    remark: String
    shop_address: String
    profit: Float
    id_card_info: ShopIdCardInfoInput
    store_name: String
  }

  enum ShopStatus {
    ACTIVE
    INACTIVE
    FROZEN
    PENDING
  }

  input UpdateShopInput {
    id: ID!
    fullname: String
    username: String
    password: String
    email: String
    remark: String
    shop_address: String
    phone_number: String
    dob: Date
    image: ShopImageInput
    status: ShopStatus
    shop_vip: Int
    payment_method: [PaymentMethodInput]
    profit: Float
    id_card_info: ShopIdCardInfoInput
    store_name: String
  }

  input ShopResetPasswordInput {
    new_password: String!
    token: String!
  }

  input UpdateShopInformationInput {
    fullname: String
    username: String
    password: String
    email: String
    remark: String
    shop_address: String
    phone_number: String
    dob: Date
    image: ShopImageInput
    status: BaseStatus
    shop_vip: Int
    payment_method: [PaymentMethodInput]
    id_card_info: ShopIdCardInfoInput
    store_name: String
  } 

  input ShopWhereInput {
    shop_id: String
    keyword: String
    status: ShopStatus
    shop_vip: Int
    createdAtBetween: DateBetweenInput
  }

  input ShopWhereLoginInput {
    username: String!
    password: String!
  }

   input ShopVerifyOTPInput {
    email: String!
    otp: String!
  }

  type ShopLoginType {
    token: String!
    data: Shop
  }

  type ShopLoginResponse {
    success: Boolean!
    data: ShopLoginType
    error: Error
  }

  type SuccessShopResponseOne {
    success: Boolean!
    data: Shop
    error: Error
  }

  type SuccessShopRequestVIPResponseOne {
    success: Boolean!
    data: ShopRequestVIP
    error: Error
  }

  type SuccessShopRequestVIPResponseOne {
    success: Boolean!
    data: ShopRequestVIP
    error: Error
  }

  type SuccessShopForgotPasswordResponse {
    success: Boolean!
    error: Error
  }

  type SuccessShopResponseMany {
    success: Boolean!
    total: Int
    data: [Shop]
    error: Error
  } 

  type SuccessCountResponseOne {
    success: Boolean!
    total: Int
    error: Error
  } 

  type SuccessShopRequestVIPResponseMany {
    success: Boolean!
    total: Int
    data: [ShopRequestVIP]
    error: Error
  } 

  type Query {
    getShops(where: ShopWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessShopResponseMany!
    getShop(id: ID!): SuccessShopResponseOne!
    adminGetShops(where: ShopWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessShopResponseMany!
    adminGetShop(id: ID!): SuccessShopResponseOne!
    getShopInformation: SuccessShopResponseOne!
    countShopRequestVIP: SuccessCountResponseOne
  }

  type Mutation {
    createShop(data: CreateShopInput!): SuccessShopResponseOne!
    shopRegister(data: CreateShopInput!): ShopLoginResponse!
    shopVerifyOTP(data: ShopVerifyOTPInput!): ShopLoginResponse!
    adminUpdateShop(data: UpdateShopInput!): SuccessShopResponseOne!
    adminApproveShop(id: ID!): SuccessShopResponseOne!
    shopResetPassword(data: ShopResetPasswordInput!): SuccessShopResponseOne!
    updateShopInformation(data: UpdateShopInformationInput!): SuccessShopResponseOne!
    deleteShop(id: ID!): SuccessShopResponseOne!
    shopLogin(where: ShopWhereLoginInput): ShopLoginResponse!
    shopForgotPassword(email: String!): SuccessShopForgotPasswordResponse!

    shopRequestVIP(data: ShopRequestVIPInput!): SuccessShopRequestVIPResponseOne!
    adminApproveShopRequestVIP(id: ID!): SuccessShopRequestVIPResponseOne!
    adminRejectShopRequestVIP(id: ID!): SuccessShopRequestVIPResponseOne!
  }

  type Subscription {
    subscribeNewRequestVIP: Notification!
  }
`;
