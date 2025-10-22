export const productCommentSchema = `
  type ProductComment {
    id: ID
    comment: String
    cusomter_id: String
    product_id: String
    status: BaseStatus
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  } 

  input CreateProductCommentInput {
    comment: String
    product_id: String!
    customer_id: String!
    status: BaseStatus = ACTIVE
  }

  input UpdateProductCommentInput {
    id: ID!
    comment: String
    product_id: String
    customer_id: String
    status: BaseStatus
  }

  input ProductCommentWhereInput {
    comment: String
    status: BaseStatus
    createdAtBetween: DateBetweenInput
  }

  type SuccessProductCommentResponseOne {
    success: Boolean!
    data: ProductComment
    error: Error
  }

  type SuccessProductCommentResponseMany {
    success: Boolean!
    total: Int
    data: [ProductComment]
    error: Error
  } 

  type Query {
    getProductComments(where: ProductCommentWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessProductCommentResponseMany!
    getProductComment(id: ID!): SuccessProductCommentResponseOne!
  }

  type Mutation {
    createProductComment(data: CreateProductCommentInput!): SuccessProductCommentResponseOne!
    updateProductComment(data: UpdateProductCommentInput!): SuccessProductCommentResponseOne!
    deleteProductComment(id: ID!): SuccessProductCommentResponseOne!
  }
`;
