export const shopProductSchema = `
  type ShopProduct {
    id: ID
    quantity: Int
    product_id: String
    productData: Product
    shop_id: String
    status: BaseStatus
    created_by: String
    created_at: DateTime
    updated_at: DateTime
    sell_count: Int
    shopProductStatus: ShopProductStatus
  } 


  enum ShopProductStatus {
    ON_SHELF
    UN_SHELF
  }

  input CreateShopProductInput {
    quantity: Int
    product_id: String!
    shop_id: String
    status: BaseStatus = ACTIVE
  }

  input CreateShopProductWithCategoryInput {
    category_id: String!
  }

  input CreateShopProductsWithVIPLevelInput {
    vip: Int!
  }

  input UpdateShopProductInput {
    id: ID!
    quantity: Int
    product_id: String
    shop_id: String
    status: BaseStatus
    shopProductStatus: ShopProductStatus
    sell_count: Int
  }

  input ShopProductWhereInput {
    keyword: String
    status: BaseStatus
    shopProductStatus: ShopProductStatus
    shop_id: ID!
    quantity: Int
    createdAtBetween: DateBetweenInput
  }

  type SuccessShopProductResponseOne {
    success: Boolean!
    data: ShopProduct
    error: Error
  }

  type SuccessShopProductResponseMany {
    success: Boolean!
    total: Int
    data: [ShopProduct]
    error: Error
  } 

  type Query {
    getShopProducts(where: ShopProductWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessShopProductResponseMany!
    getShopProduct(id: ID!): SuccessShopProductResponseOne!
  }

  type Mutation {
    createShopProduct(data: CreateShopProductInput!): SuccessShopProductResponseOne!
    createManyShopProducts(data: [CreateShopProductInput!]!): SuccessShopProductResponseMany!
    createShopProductsWithCategory(data: CreateShopProductWithCategoryInput!): SuccessShopProductResponseMany!
    createShopProductsWithVIPLevel(data: CreateShopProductsWithVIPLevelInput!): SuccessShopProductResponseMany!
    updateShopProduct(data: UpdateShopProductInput!): SuccessShopProductResponseOne!
    deleteShopProduct(id: ID!): SuccessShopProductResponseOne!
  }
`;
