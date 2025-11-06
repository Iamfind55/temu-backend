export const shopFollowerSchemas = `
  type shopFollower {
    id: ID
    shop_id: String
    customer_id: String
    followedAt: DateTime
    created_by: String
    created_at: DateTime
    updated_at: DateTime
  }

  input FollowerInput {
    shop_id: ID!
  }


  type SuccessShopResponse {
    success: Boolean!
    data: shopFollower
    error: Error
    message: String
  }

  type Mutation {
    follower(shop_id: ID!): SuccessShopResponse!
  }
`;
