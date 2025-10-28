"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutUsSchema = void 0;
exports.aboutUsSchema = `
  type AboutUs {
    id: ID!
    data: String
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  }

  input UpdateAboutUsInput {
    data: String
  } 

  type SuccessAboutUsResponseOne {
    success: Boolean!
    data: AboutUs
    error: Error
  }
 
  type Query {
    getAboutUs: SuccessAboutUsResponseOne!
  }

  type Mutation {
    updateAboutUs(data: UpdateAboutUsInput!): SuccessAboutUsResponseOne!
  }
`;
