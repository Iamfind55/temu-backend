import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";

@Entity()
export class ShopType extends BaseEntity {
  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: true })
  image!: string;

  @Column({ nullable: true })
  register_fee!: number;

  @Column({ nullable: true })
  commission_percent!: number;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;
}
