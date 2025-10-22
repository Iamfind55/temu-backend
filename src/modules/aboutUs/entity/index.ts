import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";

@Entity()
export class AboutUs extends BaseEntity {
  @Column({ type: "text", nullable: true })
  data!: string;
}
