export enum ConversationType {
  DIRECT = "DIRECT",
  GROUP = "GROUP",
  SUPPORT = "SUPPORT",
}

export enum ConversationStatus {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
  CLOSED = "CLOSED",
}

export enum MemberRole {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
  SUPPORT = "SUPPORT",
}

export interface CreateConversationInput {
  title: string;
}

export interface ConversationWhereInput {
  id?: string;
  type?: ConversationType;
  status?: ConversationStatus;
  user_id?: string;
  keyword?: string;
}
