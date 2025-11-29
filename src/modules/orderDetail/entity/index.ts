import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";
import { Inventory } from "../types";
import { OrderStatus, PaymentStatus, SignInStatus } from "../../order/types";
import { EDeliveryType } from "../../../utils/base/baseEnum";
import { Customer } from "../../customer";
import { Shop } from "../../shop";

@Entity()
export class OrderDetail extends BaseEntity {
  @Column({ nullable: false })
  order_no!: string;

  @Column({ nullable: true })
  product_name!: string;

  @Column({ nullable: true })
  product_cover_image!: string;

  @Column({ nullable: true })
  sku!: string;

  @Column({ nullable: true })
  spu!: string;

  @Column({ default: 0 })
  quantity!: number;

  @Column({ type: "float", default: 0.0 })
  price!: number;

  @Column({ type: "float", default: 0.0 })
  discount!: number;

  @Column({ type: "float", default: 0.0 })
  profit!: number;

  @Column({ type: "uuid", nullable: true })
  shop_id!: string;

  @Column({ nullable: false })
  product_id!: string;

  @Column({ nullable: true })
  category_id!: string;

  @Column({ nullable: false })
  order_id!: string;

  @Column({ type: "uuid", nullable: true })
  customer_id!: string;

  @Column({ nullable: true })
  address_id!: string;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;

  @Column({
    type: "enum",
    enum: PaymentStatus,
    default: PaymentStatus.COMPLETED,
  })
  payment_status!: PaymentStatus;

  @Column({
    type: "enum",
    enum: OrderStatus,
    default: OrderStatus.NO_PICKUP,
  })
  order_status!: OrderStatus;

  @Column({
    type: "json",
    nullable: true,
    default: {
      total_inventory: 0,
      my_inventory: 0,
    },
  })
  inventory!: Inventory;

  @Column({
    type: "enum",
    enum: EDeliveryType,
    default: EDeliveryType.DOOR_TO_DOOR,
  })
  delivery_type!: EDeliveryType;

  @Column({
    type: "enum",
    enum: SignInStatus,
    default: SignInStatus.NOT_DELIVERY,
  })
  sign_in_status!: SignInStatus;

  @Column({ nullable: true })
  canelled_by_shop!: string;

  @Column({ nullable: true })
  updated_by_admin!: string;

  @Column({ nullable: true })
  canelled_by_customer!: string;

  @ManyToOne(() => Customer, (customer) => customer.order_details) // Define ManyToOne relationship
  @JoinColumn({ name: "customer_id" }) // Specify the join column
  customerData?: Customer;

  @ManyToOne(() => Shop, (shop) => shop.order_details) // Define ManyToOne relationship
  @JoinColumn({ name: "shop_id" }) // Specify the join column
  shop?: Shop;
}
