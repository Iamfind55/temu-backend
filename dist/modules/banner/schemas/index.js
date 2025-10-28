"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bannerSchema = void 0;
exports.bannerSchema = `
  type Banner {
    id: ID
    name: String
    image: String
    link_url: String
    position: String
    status: BaseStatus
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  } 

  input CreateBannerInput {
    name: String
    image: String!
    link_url: String
    position: String!
    status: BaseStatus = ACTIVE
  }

  input UpdateBannerInput {
    id: ID!
    name: String
    image: String
    link_url: String
    position: String
    status: BaseStatus
  }

  input BannerWhereInput {
    name: String
    position: String
    status: BaseStatus
    createdAtBetween: DateBetweenInput
  }

  type SuccessBannerResponseOne {
    success: Boolean!
    data: Banner
    error: Error
  }

  type SuccessBannerResponseMany {
    success: Boolean!
    total: Int
    data: [Banner]
    error: Error
  } 

  type Query {
    getBanners(where: BannerWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessBannerResponseMany!
    getBanner(id: ID!): SuccessBannerResponseOne!
  }

  type Mutation {
    createBanner(data: CreateBannerInput!): SuccessBannerResponseOne!
    updateBanner(data: UpdateBannerInput!): SuccessBannerResponseOne!
    deleteBanner(id: ID!): SuccessBannerResponseOne!
  }
`;
