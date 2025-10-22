import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";

@Entity()
export class ShopSocial extends BaseEntity {
  @Column({ nullable: true })
  name!: string;

  @Column()
  image!: string;

  @Column()
  link!: string;

  @Column()
  shop_id!: string;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;
}
