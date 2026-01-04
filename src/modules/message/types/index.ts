export enum SenderType {
  SHOP = "SHOP",
  ADMIN = "ADMIN",
}
export enum MessageType {
  NEW= "new",
  REPLY = "reply",
  READ = "read",
  DELETE = "delete",
}

export interface SendMessageInput {
  conversation_id: string;
  text?: string;
  attachments?: AttachmentInput[];
}

export interface ReplyToMessageInput {
  conversation_id: string;
  reply_to_id: string;
  text: string;
  attachments?: AttachmentInput[];
}

export interface AttachmentInput {
  file_url: string;
  file_type: string;
  file_name: string;
  file_size: number;
}

export interface MessageWhereInput {
  id?: string;
  conversation_id?: string;
  sender_id?: string;
  keyword?: string;
}
