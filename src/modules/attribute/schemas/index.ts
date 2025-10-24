export const attributeSchema = `
  type Attribute {
    id: ID
    name: String
    description: String
    created_by: String
    created_at: DateTime
    updated_at: DateTime
    values: [AttributeValue]
  }

  input CreateAttributeInput {
    name: String!
    description: String
    values: [String!]
  }

  input UpdateAttributeInput {
    name: String!
    description: String
    values: [String!]
  }

  input AttributeWhereInput {
    keyword: String
    id: ID
  }

  type AttributeValue {
    id: ID
    value: String
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  }


  type SuccessAttributeResponseOne {
    success: Boolean!
    data: Attribute
    error: Error
  }

  type SuccessAttributeResponseMany {
    success: Boolean!
    total: Int
    data: [Attribute]
    error: Error
  }  

  type Query {
    getAttributes(where: AttributeWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessAttributeResponseMany!
    getAttribute(id: ID!): SuccessAttributeResponseOne!
  }

  type Mutation {
    createAttribute(data: CreateAttributeInput!): SuccessAttributeResponseOne!
    updateAttribute(id: ID!, data: UpdateAttributeInput!): SuccessAttributeResponseOne
    deletAttribute(id: ID!): SuccessAttributeResponseOne
  }
`;
