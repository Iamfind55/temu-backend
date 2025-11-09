import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Product } from "../../product/entity";
import { BaseEntity } from "../../../utils/base/baseEntity";

@Entity()
export class ProductTag extends BaseEntity {
  @Column({ type: "simple-array", nullable: true })
  text_rich?: string[];

  @Column({ nullable: true })
  local_title?: string;

  @Column({ nullable: true })
  content?: string;

  @Column({ nullable: true })
  prompt_tag_text?: string;

  @Column({ nullable: true })
  footer_text?: string;

  @Column({ nullable: true })
  header_text?: string;

  @ManyToOne(() => Product, (product) => product.shopProducts) // Define ManyToOne relationship
  @JoinColumn({ name: "product_id" }) // Specify the join column
  productData!: Product;
}
