export const conversationSchema = `
  type Conversation {
    id: ID!
    title: String
    created_by: String!
    creator: Shop
    status: ConversationStatus!
    last_message_at: DateTime
    is_active: Boolean
    created_at: DateTime
    updated_at: DateTime
    last_message: String
    unread_count: Int
  }

  type ConversationMember {
    id: ID!
    conversation_id: String!
    conversation: Conversation
    user_id: String!
    user_type: UserType!
    shop: Shop
    staff: Staff
    role: MemberRole!
    joined_at: DateTime!
    last_read_at: DateTime
    unread_count: Int!
    is_active: Boolean
    created_at: DateTime
    updated_at: DateTime
  }

  enum UserType {
    SHOP
    STAFF
  }

  enum MemberRole {
    ADMIN
    MEMBER
    SUPPORT
  }

  enum ConversationStatus {
    ACTIVE
    ARCHIVED
    CLOSED
  }

  input CreateConversationInput {
    title: String!
  }

  input ConversationWhereInput {
    id: ID
    status: ConversationStatus
    user_id: ID
    keyword: String
  }

  type SuccessConversationResponseOne {
    success: Boolean!
    data: Conversation
    error: Error
  }

  type SuccessConversationResponseMany {
    success: Boolean!
    total: Int
    data: [Conversation]
    error: Error
  }

  type Query {
    getConversations(where: ConversationWhereInput, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessConversationResponseMany!
    getConversation(id: ID!): SuccessConversationResponseOne!
    getShopConversation: SuccessConversationResponseOne!
  }

  type Mutation {
    createConversation(data: CreateConversationInput!): SuccessConversationResponseOne!
  }
`;
