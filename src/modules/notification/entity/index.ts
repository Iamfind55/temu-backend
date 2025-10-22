import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";
import { INotificationType } from "../types";

@Entity()
export class Notification extends BaseEntity {
  @Column({ nullable: false, default: "" })
  title!: string;

  @Column({ nullable: false, default: "" })
  description!: string;

  @Column({ nullable: true })
  shop_id!: string;

  @Column({ nullable: true })
  customer_id!: string;

  @Column({ nullable: true })
  reference_id!: string;

  @Column({ type: "jsonb", nullable: true })
  data!: JSON;

  @Column({ type: "boolean", default: false })
  is_read!: boolean;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;

  @Column({
    type: "enum",
    enum: INotificationType,
    default: INotificationType.ORDER,
  })
  notification_type!: INotificationType;
}
