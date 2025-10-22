import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";

@Entity()
export class ProductComment extends BaseEntity {
  @Column({ type: "text", nullable: false, default: "" })
  comment!: string;

  @Column()
  customer_id!: string;

  @Column()
  product_id!: string;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;
}
