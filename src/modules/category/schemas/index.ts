export const categorySchema = `
  type Category {
    id: ID
    name: String
    image: String
    oring_image_url:String
    status: BaseStatus
    parent_id: String
    parent_data: Category
    created_by: String
    created_at: DateTime
    updated_at: DateTime
    recommended: Boolean
    subcategories: [Category]
  } 
     
  input CreateCategoryInput {
    name: String
    image: String
    oring_image_url:String
    status: BaseStatus = ACTIVE
    recommended: Boolean
    parent_id: String
    attributes: [ID!]
  }

  input UpdateCategoryInput {
    id: ID!
    name: String
    image: String
    oring_image_url:String
    status: BaseStatus
    recommended: Boolean
    parent_id: String
    attributes: [ID]
  }

  input CategoryWhereInput {
    keyword: String
    status: BaseStatus
    parent_id: String
    createdAtBetween: DateBetweenInput
  }

  type SuccessCategoryResponseOne {
    success: Boolean!
    data: Category
    error: Error
  }

  type SuccessCategoryResponseMany {
    success: Boolean!
    total: Int
    data: [Category]
    error: Error
  }  

  type Query {
    getCategories(where: CategoryWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessCategoryResponseMany!
    getMainCategories(where: CategoryWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessCategoryResponseMany!
    getSubcategories(where: CategoryWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessCategoryResponseMany!
    adminGetCategories(where: CategoryWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessCategoryResponseMany!
    getAllCategories(limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessCategoryResponseMany!
    getCategory(id: ID!): SuccessCategoryResponseOne!
  }

  type Mutation {
    createCategory(data: CreateCategoryInput!): SuccessCategoryResponseOne!
    updateCategory(data: UpdateCategoryInput!): SuccessCategoryResponseOne!
    deleteCategory(id: ID!): SuccessCategoryResponseOne!
  }
`;
