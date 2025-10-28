"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffSchema = void 0;
exports.staffSchema = `
  type Staff {
    id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    dob: DateTime
    image: String
    status: BaseStatus
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  } 

  input CreateStaffInput {
    firstName: String
    lastName: String
    username: String!
    password: String!
    email: String
    dob: DateTime
    image: String
    status: BaseStatus = ACTIVE
  }

  input UpdateStaffInput {
    id: ID!
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
    dob: DateTime
    image: String
    status: BaseStatus
  }

  input StaffWhereInput {
    keyword: String
    status: BaseStatus
    createdAtBetween: DateBetweenInput
  }

  input StaffWhereLoginInput {
    username: String!
    password: String!
  }

  type StaffLoginType {
    token: String!
    data: Staff
  }

  type StaffLoginResponse {
    success: Boolean!
    data: StaffLoginType
    error: Error
  }

  type SuccessStaffResponseOne {
    success: Boolean!
    data: Staff
    error: Error
  }

  type SuccessStaffResponseMany {
    success: Boolean!
    total: Int
    data: [Staff]
    error: Error
  } 

  type Query {
    getStaffs(where: StaffWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessStaffResponseMany!
    getStaff(id: ID!): SuccessStaffResponseOne!
  }

  type Mutation {
    createStaff(data: CreateStaffInput!): SuccessStaffResponseOne!
    updateStaff(data: UpdateStaffInput!): SuccessStaffResponseOne!
    deleteStaff(id: ID!): SuccessStaffResponseOne!
    staffLogin(where: StaffWhereLoginInput): StaffLoginResponse!
  }
`;
