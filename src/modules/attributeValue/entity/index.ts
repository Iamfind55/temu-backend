import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { Attribute } from "../../attribute/entity";

@Entity()
export class AttributeValue extends BaseEntity {
  @Column()
  value!: string;

  @ManyToOne(() => Attribute, (attribute) => attribute.values, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "attribute_id" })
  attribute!: Attribute;
}
