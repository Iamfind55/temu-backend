export const messageSchema = `
  type Message {
    id: ID!
    conversation_id: String!
    conversation: Conversation
    sender_id: String!
    shop_sender: Shop
    admin_sender: Staff
    reply_to_id: String
    replyTo: Message
    text: String
    sender_type: SenderType!
    deleted_at: DateTime
    attachment: String
    is_active: Boolean
    is_read: Boolean
    is_deleted: Boolean
    created_at: DateTime
    updated_at: DateTime
    type: String
  }

  
  type MessageStatus {
    id: ID!
    message_id: String!
    message: Message
    user_id: String!
    user_type: UserType!
    shop: Shop
    admin: Staff
    is_read: Boolean!
    read_at: DateTime
    is_deleted: Boolean!
    deleted_at: DateTime
    is_active: Boolean
    created_at: DateTime
    updated_at: DateTime
  }

  enum SenderType {
    SHOP
    ADMIN
  }

  enum UserType {
    SHOP
    ADMIN
  }

  input SendMessageInput {
    conversation_id: ID
    text: String
    attachment: String
  }

  input ReplyToMessageInput {
    conversation_id: ID!
    reply_to_id: ID!
    text: String!
    attachment: String
  }


  input MessageWhereInput {
    id: ID
    conversation_id: ID
    sender_id: ID
    keyword: String
  }

  type SuccessMessageResponseOne {
    success: Boolean!
    data: Message
    error: Error
  }

  type SuccessMessageResponseMany {
    success: Boolean!
    total: Int
    data: [Message]
    error: Error
  }

  type SuccessResponse {
    total: Int
    success: Boolean!
    error: Error
  } 

  type SuccessBooleanResponse {
    success: Boolean!
    error: Error
  }

  type Query {
    getMessages(where: MessageWhereInput!, limit: Int, page: Int, sortedBy: BaseOrderByInput): SuccessMessageResponseMany!
    getUnreadMessage: SuccessResponse!
  }

  type Mutation {
    sendMessage(data: SendMessageInput!): SuccessMessageResponseOne!
    replyToMessage(data: ReplyToMessageInput!): SuccessMessageResponseOne!
    markMessageAsRead(conversationId: ID!): SuccessBooleanResponse!
    deleteMessage(messageId: ID!): SuccessBooleanResponse!
  }

  type MessageDeleted {
    id: ID!
    conversation_id: String!
    deleted_at: DateTime
  }

  type MessageStatusUpdate {
    conversation_id: String!
    sender_type: SenderType!
    is_read: Boolean!
    read_at: DateTime
  }

  type Subscription {
    sendMessage(conversationId: ID!): Message!
    messageStatusUpdated(conversationId: ID!): MessageStatusUpdate!
    messageDeleted(conversationId: ID!): MessageDeleted!
    newMessageForAdmin: Message!
  }
`;
