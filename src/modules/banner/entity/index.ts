import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";

@Entity()
export class Banner extends BaseEntity {
  @Column({ nullable: true })
  name!: string;

  @Column()
  image!: string;

  @Column({ nullable: true })
  link_url!: string;

  @Column({ type: "text", default: "1" })
  position!: string;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;
}
