"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
exports.productSchema = `
  type Product {
    id: ID
    name: String
    description: String
    images: [String]
    cover_image: String
    price: Float
    discount: Float
    discount_end: Date
    quantity: Int
    sku: String
    spu: String
    total_star: Int
    total_comment: Int
    category_ids: [String]
    categories: [Category]
    categoryData: Category
    brandData: Branding
    brand_id: String
    status: BaseStatus
    shopProductStatus: String
    recommended: Boolean
    product_top: Int
    product_vip: Int
    sell_count: Int
    created_by: String
    created_at: DateTime
    updated_at: DateTime 
  } 

  input CreateProductInput {
    name: NameTranslateBaseInput
    description: NameTranslateBaseInput
    images: [String]
    cover_image: String
    price: Float
    discount: Float
    quantity: Int
    sku: String
    spu: String
    total_star: Int
    total_comment: Int
    category_id: String
    brand_id: String
    recommended: Boolean
    product_top: Int
    product_vip: Int
    sell_count: Int
    status: BaseStatus = ACTIVE
  }

  input UpdateProductInput {
    id: ID!
    name: NameTranslateBaseInput
    description: NameTranslateBaseInput
    images: [String]
    cover_image: String
    price: Float
    discount: Float
    quantity: Int
    sku: String
    spu: String
    total_star: Int
    total_comment: Int
    category_id: String
    brand_id: String
    recommended: Boolean
    product_top: Int
    product_vip: Int
    sell_count: Int
    status: BaseStatus = ACTIVE
  }

  input ProductWhereInput {
    keyword: String
    category_id: String
    category_ids: [String]
    brand_id: String
    status: BaseStatus
    price_between: [Float]
    product_vip: Int
    product_top: Int
    quantity: Int
    discount: Int
    offer:Boolean
    star_top: Boolean
    createdAtBetween: DateBetweenInput
  }

  input ProductBestSellingWhereInput {
    category_id: String
    within: Int
  }

  input SimilarProductWhereInput {
    product_id: String
  }

  input SearchProductWhereInput {
    keyword: String
    status: BaseStatus
  }

  type SuccessProductResponseOne {
    success: Boolean!
    data: Product
    error: Error
  }

  type SuccessProductResponseMany {
    success: Boolean!
    total: Int
    data: [Product]
    error: Error
  } 

  type SearchProduct {
    id: ID!
    name: NameTranslateBaseType
    description: NameTranslateBaseType
    cover_image: String
    price: Float
    status: BaseStatus
  }

  type SuccessSearchProductResponseMany {
    success: Boolean!
    total: Int
    data: [SearchProduct]
    error: Error
  } 

  type Query {
    getProducts(where: ProductWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessProductResponseMany!
    adminGetProducts(where: ProductWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessProductResponseMany!
    getBestSellingProducts(where: ProductBestSellingWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessProductResponseMany!
    getSimilarProducts(where: SimilarProductWhereInput, limit: Int): SuccessProductResponseMany!
    searchProducts(where: SearchProductWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessSearchProductResponseMany!
    getProduct(id: ID!): SuccessProductResponseOne!
  }

  type Mutation {
    createProduct(data: CreateProductInput!): SuccessProductResponseOne!
    updateProduct(data: UpdateProductInput!): SuccessProductResponseOne!
    deleteProduct(id: ID!): SuccessProductResponseOne!
  }
`;
