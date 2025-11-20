import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";
import { Shop } from "../../shop";
import { Customer } from "../../customer";
import { Deposit } from "../../deposit";
import { Withdraw } from "../../withdraw";

@Entity()
export class Wallet extends BaseEntity {
  @Column({ nullable: true })
  name!: string;

  @Column({ type: "float", default: 0.0 })
  total_balance!: number;

  @Column({ type: "float", default: 0.0 })
  total_withdraw!: number;

  @Column({ type: "float", default: 0.0 })
  total_recharged!: number;

  @Column({ type: "float", default: 0.0 })
  total_frozen_balance!: number;

  @Column({ type: "float", default: 0.0 })
  total_withdraw_able_balance!: number;

  @Column({ nullable: true })
  shop_id!: string;

  @Column({ nullable: true })
  customer_id!: string;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;

  @OneToOne(() => Shop, (shop) => shop.wallet, { nullable: true })
  @JoinColumn({ name: "shop_id" })
  shop?: Shop;

  @OneToOne(() => Customer, (customer) => customer.wallet, { nullable: true })
  @JoinColumn({ name: "customer_id" })
  customer?: Customer;

  @OneToOne(() => Withdraw, deposit => deposit.wallet, {
    nullable: true,
  })
  withdraw?: Deposit;
}
