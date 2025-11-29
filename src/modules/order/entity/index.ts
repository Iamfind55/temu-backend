import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";
import { OrderStatus, PaymentStatus, SignInStatus } from "../types";
import { EDeliveryType } from "../../../utils/base/baseEnum";
import { Customer } from "../../customer";
import { Shop } from "../../shop";
import { Logistics } from "../../logistics";

@Entity()
export class Order extends BaseEntity {
  @Column({ nullable: false, unique: true })
  order_no!: string;

  @Column({ default: 1 })
  total_quantity!: number;

  @Column({ default: 0 })
  total_products!: number;

  @Column({ type: "float", default: 0.0 })
  total_price!: number;

  @Column({ type: "float", default: 0.0 })
  total_discount!: number;

  @Column({ type: "float", default: 0.0 })
  profit!: number;

  @Column({ type: "float", default: 0.0 })
  expected_revenue!: number;

  @Column({ nullable: true })
  shop_id!: string;

  @Column({ nullable: true })
  customer_id!: string;

  @Column({ nullable: true })
  address_id!: string;

  @Column({ nullable: true })
  payment_slip!: string;

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

  @Column({ type: "uuid", nullable: true })
  logistics_id?: string;

  @ManyToOne(() => Customer, (customer) => customer.orders) // Define ManyToOne relationship
  @JoinColumn({ name: "customer_id" }) // Specify the join column
  customerData?: Customer;

  @ManyToOne(() => Shop, (customer) => customer.orders) // Define ManyToOne relationship
  @JoinColumn({ name: "shop_id" }) // Specify the join column
  shop?: Shop;

  @ManyToOne(() => Logistics, (logistics) => logistics.orders, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "logistics_id" })
  logistics?: Logistics;
}
