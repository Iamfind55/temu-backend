import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus, NameTranslateBase } from "../../../utils/base/baseType";
import { Product } from "../../product";

@Entity()
export class Branding extends BaseEntity {
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
  image!: string;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;

  @OneToMany(() => Product, (product) => product.brandData)
  products!: Product[];
}
