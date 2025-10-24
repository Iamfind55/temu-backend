import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { Attribute } from "../../attribute";
import { Category } from "../../category/entity";

@Entity()
export class CategoryAttribute extends BaseEntity {

  @ManyToOne(() => Attribute, (attribute) => attribute.categoryAttributes, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "attribute_id" })
  attribute!: Attribute;

  @ManyToOne(() => Category, (category) => category.categoryAttributes, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "category_id" })
  category!: Category;
}
