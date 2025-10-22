export const shopSocialSchema = `
  type ShopSocial {
    id: ID
    name: String
    image: String
    link: String
    shop_id: String
    status: BaseStatus
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  } 

  input CreateShopSocialInput {
    name: String
    image: String
    link: String!
    shop_id: String!
    status: BaseStatus = ACTIVE
  }

  input UpdateShopSocialInput {
    id: ID!
    name: String
    image: String
    link: String
    shop_id: String
    status: BaseStatus
  }

  input ShopSocialWhereInput {
    keyword: String
    status: BaseStatus
    createdAtBetween: DateBetweenInput
  }

  type SuccessShopSocialResponseOne {
    success: Boolean!
    data: ShopSocial
    error: Error
  }

  type SuccessShopSocialResponseMany {
    success: Boolean!
    total: Int
    data: [ShopSocial]
    error: Error
  } 

  type Query {
    getShopSocials(where: ShopSocialWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessShopSocialResponseMany!
    getShopSocial(id: ID!): SuccessShopSocialResponseOne!
  }

  type Mutation {
    createShopSocial(data: CreateShopSocialInput!): SuccessShopSocialResponseOne!
    updateShopSocial(data: UpdateShopSocialInput!): SuccessShopSocialResponseOne!
    deleteShopSocial(id: ID!): SuccessShopSocialResponseOne!
  }
`;
