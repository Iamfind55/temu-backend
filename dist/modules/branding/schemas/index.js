"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandingSchema = void 0;
exports.brandingSchema = `
  type Branding {
    id: ID
    name: String
    image: String
    status: BaseStatus
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  } 

  input CreateBrandingInput {
    name: String
    image: String
    status: BaseStatus = ACTIVE
  }

  input UpdateBrandingInput {
    id: ID!
    name: String
    image: String
    status: BaseStatus
  }

  input BrandingWhereInput {
    keyword: String
    status: BaseStatus
    createdAtBetween: DateBetweenInput
  }

  type SuccessBrandingResponseOne {
    success: Boolean!
    data: Branding
    error: Error
  }

  type SuccessBrandingResponseMany {
    success: Boolean!
    total: Int
    data: [Branding]
    error: Error
  } 

  type Query {
    getBrandings(where: BrandingWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessBrandingResponseMany!
    getBranding(id: ID!): SuccessBrandingResponseOne!
  }

  type Mutation {
    createBranding(data: CreateBrandingInput!): SuccessBrandingResponseOne!
    updateBranding(data: UpdateBrandingInput!): SuccessBrandingResponseOne!
    deleteBranding(id: ID!): SuccessBrandingResponseOne!
  }
`;
