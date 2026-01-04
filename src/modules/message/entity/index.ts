import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { Conversation } from "../../conversation";
import { Shop } from "../../shop";
import { Staff } from "../../staff";
import { SenderType } from "../types";

@Entity()
export class Message extends BaseEntity {
  @Column({ type: "uuid", nullable: false })
  conversation_id!: string;

  @ManyToOne(() => Conversation, (conversation) => conversation.messages, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "conversation_id" })
  conversation!: Conversation;

  @Column({ type: "uuid", nullable: false })
  sender_id!: string;

  
  @Column({ type: "uuid", nullable: true })
  reply_to_id?: string;


  @ManyToOne(() => Message, { nullable: true, onDelete: "SET NULL" })
  @JoinColumn({ name: "reply_to_id" })
  replyTo?: Message;

  @Column({ type: "text", nullable: true })
  text?: string;

  @Column({ type: "text", nullable: true })
  attachment?: string;

  @Column({
    type: "enum",
    enum: SenderType,
    nullable: false,
  })
  sender_type!: SenderType;

  @Column({ type: "boolean", default: false })
  is_read!: boolean;

  @Column({ type: "timestamp", nullable: true })
  read_at?: Date;

  @Column({ type: "boolean", default: false })
  is_deleted!: boolean;

  @Column({ type: "timestamp", nullable: true })
  deleted_at?: Date;

}
