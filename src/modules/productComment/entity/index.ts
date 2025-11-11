import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";

@Entity()
export class ProductComment extends BaseEntity {
  @Column({ type: "text", nullable: true })
  goods_id?: string;

  @Column({ type: "text", nullable: false })
  comment!: string;

  @Column({ type: "int", nullable: false, default: 0 })
  score!: number;

  @Column({ type: "date", nullable: true })
  time_ms?: Date;


  @Column({ type: "text", nullable: true })
  pictures?: string;

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
