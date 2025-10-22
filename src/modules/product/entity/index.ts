import {
  Entity,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus, NameTranslateBase } from "../../../utils/base/baseType";
import { ShopProduct } from "../../shopProduct";
import { Category } from "../../category";
import { Branding } from "../../branding";

@Entity()
export class Product extends BaseEntity {
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

  @Column({
    type: "json",
    nullable: true,
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
  description!: NameTranslateBase;

  @Column({
    type: "json",
    nullable: true,
  })
  images!: string[];

  @Column({ nullable: false })
  cover_image!: string;

  @Column({ type: "float", nullable: false, default: 0.0 })
  price!: number;

  @Column({ type: "float", nullable: false, default: 0.0 })
  discount!: number;

  @Column({ type: "timestamp", nullable: true })
  discount_end?: Date;

  @Column({ nullable: false, default: 0 })
  quantity!: number;

  @Column({ nullable: true })
  sku!: string;

  @Column({ nullable: true })
  spu!: string;

  @Column({ nullable: true })
  origin_id!: string;

  @Column({ nullable: false, default: 0 })
  total_star!: number;

  @Column({ nullable: false, default: 0 })
  total_comment!: number;

  @Column({ nullable: false, default: 0 })
  product_vip!: number;

  @Column({ nullable: false, default: 0 })
  sell_count!: number;

  @Column({
    type: "json",
    nullable: false,
  })
  category_ids!: string[];

  @Column({
    type: "json",
    nullable: true,
  })
  categories!: Category[];

  // @JoinColumn({ name: "product_id" }) // Specify the join column
  @Column({ type: "uuid", nullable: true })
  brand_id!: string;

  @ManyToOne(() => Branding, (brand) => brand.products)
  @JoinColumn({ name: "brand_id" }) // Specify the join column
  brandData!: Branding;

  @Column({ type: "uuid", nullable: true })
  category_id!: string;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: "category_id" }) // Specify the join column
  categoryData!: Category;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;

  @Column({ type: "boolean", default: true })
  recommended!: boolean;

  @Column({ default: 0 })
  product_top!: number;

  @OneToMany(() => ShopProduct, (shopProduct) => shopProduct.productData) // Define OneToMany relationship
  shopProducts!: ShopProduct[]; // Correct type is ShopProduct[], not Product[]

  shopProductStatus!: string | null;
}
