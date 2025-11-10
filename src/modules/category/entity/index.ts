import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";
import { Product } from "../../product";
import { CategoryAttribute } from "../../categoryAttribute/entity";

@Entity()
export class Category extends BaseEntity {
  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: true })
  parent_id!: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ nullable: true })
  oring_image_url?: string;

  @Column({ nullable: true })
  origin_id?: string;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;

  @Column({ type: "boolean", default: true })
  recommended?: boolean;

  @OneToMany(() => Product, (product) => product.categoryData)
  products?: Product[];

  @OneToMany(() => CategoryAttribute, (ca) => ca.category)
  categoryAttributes?: CategoryAttribute[];
}
