import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { AttributeValue } from "../../attributeValue/entity";
import { CategoryAttribute } from "../../categoryAttribute/entity";

@Entity()
export class Attribute extends BaseEntity {
  @Column()
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => AttributeValue, (value) => value.attribute)
  values!: AttributeValue[];

  @OneToMany(() => CategoryAttribute, (ca) => ca.attribute)
  categoryAttributes!: CategoryAttribute[];
}
