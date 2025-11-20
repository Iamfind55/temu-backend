export const productSchema = `
  type ProductTag {
    id: ID
    text_rich: [String]
    local_title: String
    content: String
    prompt_tag_text: String
    footer_text: String
    header_text: String
  }
  type Product {
    id: ID
    name: String
    description: String
    images: [String]
    origin_image_url: String
    cover_image: String
    price: Float
    market_price:Float
    price_str: String
    currency: String
    show_price: String
    discount: Float
    discount_end: Date
    quantity: Int
    sku: String
    spu: String
    total_star: Float
    total_comment: Int
    star_store: String
    category_ids: [String]
    categories: [Category]
    categoryData: Category
    productTag: [ProductTag]
    brandData: Branding
    brand_id: String
    status: BaseStatus
    shopProductStatus: String
    recommended: Boolean
    product_top: Int
    product_vip: Int
    sell_count: String
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
    total_star: Float
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
    total_star: Float
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

  type TemuProductDataResponse {
    success: Boolean!
    source: String
    data: JSON
    product: JSON
    reviews: JSON
    categories: JSON
    activityInfo: JSON
    productInfo: JSON
    completeData: JSON
    headersData: JSON
    reviewStore:JSON
    cartScene:JSON
    deliveryTag:JSON
    error: Error
  }

  type TemuAPIResponse {
    success: Boolean!
    data: JSON
    status: Int
    error: Error
  }

  type FetchAllReviewsResponse {
    success: Boolean!
    totalProducts: Int!
    totalReviewsFetched: Int!
    errors: [String!]!
  }

  type Query {
    getProducts(where: ProductWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessProductResponseMany!
    adminGetProducts(where: ProductWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessProductResponseMany!
    getBestSellingProducts(where: ProductBestSellingWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessProductResponseMany!
    getSimilarProducts(where: SimilarProductWhereInput, limit: Int,page: Int,sortedBy: BaseOrderByInput): SuccessProductResponseMany!
    searchProducts(where: SearchProductWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessSearchProductResponseMany!
    getProduct(id: ID!): SuccessProductResponseOne!
    getTemuProductData(productUrl: String!): TemuProductDataResponse!
    getTemuReviews(
      goodsId: String!
      page: Int
      size: Int
      cookies: String
      antiContent: String
      verifyAuthToken: String
      xPhanData: String
      referer: String
    ): TemuAPIResponse!
    callTemuAPI(
      endpoint: String!
      method: String
      queryParams: String
      body: String
      cookies: String
      antiContent: String
      verifyAuthToken: String
      xPhanData: String
      referer: String
    ): TemuAPIResponse!
    getTemuReviewsAuto(
      productUrl: String!
      goodsId: String!
    ): TemuAPIResponse!
    fetchAllProductReviews(
      page: Int
      limit: Int
      cookies: String
      antiContent: String
      verifyAuthToken: String
      xPhanData: String
      referer: String
    ): FetchAllReviewsResponse!
  }

  type Mutation {
    createProduct(data: CreateProductInput!): SuccessProductResponseOne!
    updateProduct(data: UpdateProductInput!): SuccessProductResponseOne!
    deleteProduct(id: ID!): SuccessProductResponseOne!
  }
`;
