import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus, NameTranslateBase } from "../../../utils/base/baseType";
import { Product } from "../../product";
import { CategoryAttribute } from "../../categoryAttribute/entity";

@Entity()
export class Category extends BaseEntity {
  @Column({
    type: "json",
    nullable: false,
    default: {
      name_en: "",
      name_es: "",
      name_ms: "",
      name_jp: "",
      name_th: "",
      name_vi: "",
      name_zh: "",
      name_zh_tw: "",
    },
  })
  name!: NameTranslateBase;

  @Column({ nullable: true })
  parent_id!: string;

  @Column({ nullable: true })
  image!: string;

  @Column({ nullable: true })
  origin_id!: string;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;

  @Column({ type: "boolean", default: true })
  recommended!: boolean;

  @OneToMany(() => Product, (product) => product.categoryData)
  products!: Product[];

  @OneToMany(() => CategoryAttribute, (ca) => ca.category)
  categoryAttributes?: CategoryAttribute[];
}
