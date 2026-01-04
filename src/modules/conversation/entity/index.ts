import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { Message } from "../../message";
import { ConversationStatus } from "../types";

@Entity()
export class Conversation extends BaseEntity {
  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: false })
  created_by!: string;

  @Column({
    type: "enum",
    enum: ConversationStatus,
    default: ConversationStatus.ACTIVE,
  })
  status!: ConversationStatus;

  @Column({ type: "timestamp", nullable: true })
  last_message_at?: Date;
  
  @OneToMany(() => Message, (message) => message.conversation)
  messages?: Message[];
}
