"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopTypeSchema = void 0;
exports.shopTypeSchema = `
  type ShopType {
    id: ID
    name: String
    image: String
    register_fee: Float
    commission_percent: Float
    status: BaseStatus
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  } 

  input CreateShopTypeInput {
    name: String
    image: String!
    register_fee: Float
    commission_percent: Float
    status: BaseStatus = ACTIVE
  }

  input UpdateShopTypeInput {
    id: ID!
    name: String
    image: String
    register_fee: Float
    commission_percent: Float
    status: BaseStatus
  }

  input ShopTypeWhereInput {
    name: String
    status: BaseStatus
    createdAtBetween: DateBetweenInput
  }

  type SuccessShopTypeResponseOne {
    success: Boolean!
    data: ShopType
    error: Error
  }

  type SuccessShopTypeResponseMany {
    success: Boolean!
    total: Int
    data: [ShopType]
    error: Error
  } 

  type Query {
    getShopTypes(where: ShopTypeWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessShopTypeResponseMany!
    getShopType(id: ID!): SuccessShopTypeResponseOne!
  }

  type Mutation {
    createShopType(data: CreateShopTypeInput!): SuccessShopTypeResponseOne!
    updateShopType(data: UpdateShopTypeInput!): SuccessShopTypeResponseOne!
    deleteShopType(id: ID!): SuccessShopTypeResponseOne!
  }
`;
