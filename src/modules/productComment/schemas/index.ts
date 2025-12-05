export const productCommentSchema = `
  type ProductComment {
    id: ID
    comment: String
    score: Int
    time_ms: DateTime
    pictures: String
    cusomter_id: String
    product_id: String
    status: BaseStatus
    customer: Customer
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
   input CommentByProductWhereInput {
    productId: String
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
    getProductCommentProductID(where: CommentByProductWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessProductCommentResponseMany!
  }

  type Mutation {
    createProductComment(data: CreateProductCommentInput!): SuccessProductCommentResponseOne!
    updateProductComment(data: UpdateProductCommentInput!): SuccessProductCommentResponseOne!
    deleteProductComment(id: ID!): SuccessProductCommentResponseOne!
  }
`;
