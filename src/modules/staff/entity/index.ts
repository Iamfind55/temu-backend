import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { StaffRole } from "../types";
import { BaseStatus } from "../../../utils/base/baseType";

@Entity()
export class Staff extends BaseEntity {
  @Column({ nullable: false })
  firstName!: string;

  @Column({ nullable: true })
  lastName!: string;

  @Column({ nullable: false, unique: false })
  username!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ nullable: true })
  email!: string;

  @Column({ nullable: true })
  dob!: Date;

  @Column({ nullable: true })
  image!: string;

  @Column({ nullable: true })
  role!: string;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;
}
