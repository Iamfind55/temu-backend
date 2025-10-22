import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";
import { Product } from "../../product";
import { ShopProductStatus } from "../types";

@Entity()
export class ShopProduct extends BaseEntity {
  @Column({ nullable: false, default: 0 })
  quantity!: number;

  @Column()
  shop_id!: string;

  @Column()
  product_id!: string;

  @ManyToOne(() => Product, (product) => product.shopProducts) // Define ManyToOne relationship
  @JoinColumn({ name: "product_id" }) // Specify the join column
  productData!: Product;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;

  @Column({
    type: "enum",
    enum: ShopProductStatus,
    default: ShopProductStatus.ON_SHELF,
  })
  shopProductStatus!: ShopProductStatus;

  @Column({ nullable: false, default: 0 })
  sell_count!: number;
}
