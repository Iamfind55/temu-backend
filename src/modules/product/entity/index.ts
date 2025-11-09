import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";
import { Branding } from "../../branding";
import { Category } from "../../category";
import { ProductTag } from "../../productTag";
import { ShopProduct } from "../../shopProduct";

@Entity()
export class Product extends BaseEntity {
  @Column({ nullable: true })
  opt_id?: string;

  @Column({ nullable: true })
  list_id?: string;

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  image_url?: string;

  @Column({
    type: "json",
    nullable: true,
  })
  images?: string[];

  @Column({ nullable: true })
  cover_image?: string;

  @Column({ type: "float", nullable: true, default: 0.0 })
  price!: number;

  @Column({ type: "float", nullable: true, default: 0.0 })
  market_price?: number;

  @Column({ type: "text", nullable: true })
  price_str?: string;

  @Column({ type: "text", nullable: true })
  show_price?: string;

  @Column({ type: "text", nullable: true })
  currency?: string;

  @Column({ type: "float", nullable: true, default: 0.0 })
  discount!: number;

  @Column({ type: "timestamp", nullable: true })
  discount_end?: Date;

  @Column({ nullable: true, default: 300 })
  quantity?: number;

  @Column({ nullable: true })
  sku!: string;

  @Column({ nullable: true })
  spu!: string;

  @Column({ nullable: true })
  origin_id!: string;

  @Column({ type: "float", nullable: false, default: 0.0 })
  total_star!: number;

  @Column({ nullable: false, default: 0 })
  total_comment!: number;

  @Column({ nullable: false, default: 0 })
  product_vip!: number;

  @Column({ nullable: true })
  sell_count?: string;

  @Column({ nullable: true })
  star_store?: string;

  @Column({
    type: "json",
    nullable: true,
  })
  category_ids?: string[];

  @Column({
    type: "json",
    nullable: true,
  })
  categories?: Category[];

  // @JoinColumn({ name: "product_id" }) // Specify the join column
  @Column({ type: "uuid", nullable: true })
  brand_id?: string;

  @ManyToOne(() => Branding, (brand) => brand.products)
  @JoinColumn({ name: "brand_id" }) // Specify the join column
  brandData?: Branding;

  @Column({ type: "uuid", nullable: true })
  category_id!: string;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: "category_id" }) // Specify the join column
  categoryData?: Category;

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

  @OneToMany(() => ProductTag, (productTag) => productTag.productData, {
    onDelete: "CASCADE",
    eager: true,
  })
  productTag!: ProductTag[];

  productData!: string | null;
}
