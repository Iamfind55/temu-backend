import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";
import { Product } from "../../product";

@Entity()
export class Branding extends BaseEntity {
  @Column({
    type: "text",
    nullable: false,
  })
  name!: string;

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
