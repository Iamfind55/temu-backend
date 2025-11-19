import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";
import {
  ECoinType,
  ETransactionHistoryIdentifier,
  ETransactionStatus,
} from "../types";
import { Customer } from "../../customer";
import { Shop } from "../../shop";
import { Deposit } from "../../deposit/entity";
import { Withdraw } from "../../withdraw";

@Entity()
export class TransactionHistory extends BaseEntity {
  @Column({ nullable: false, default: ETransactionHistoryIdentifier.RECHARGE })
  identifier!: ETransactionHistoryIdentifier;

  @Column({ type: "float", default: 0.0 })
  amount!: number;

  @Column({ nullable: true, default: ECoinType.BTC })
  coin_type!: ECoinType;

  @Column({ nullable: true })
  shop_id!: string;

  @Column({ nullable: true })
  customer_id!: string;

  @Column({ nullable: true })
  wallet_id!: string;

  @Column({ nullable: true })
  payment_slip!: string;

  @Column({ nullable: true })
  account_number!: string;

  @Column({ nullable: true })
  rejected_by!: string;

  @Column({ nullable: true })
  approved_by!: string;

  @Column({
    type: "enum",
    enum: ETransactionStatus,
    default: ETransactionStatus.PENDING,
  })
  status!: ETransactionStatus;

  @ManyToOne(() => Customer, (customer) => customer.transaction_histories, {
    nullable: true,
  })
  @JoinColumn({ name: "customer_id" })
  customer?: Customer;

  @ManyToOne(() => Shop, (shop) => shop.transaction_histories, {
    nullable: true,
  })
  @JoinColumn({ name: "shop_id" })
  shop?: Shop;

  @OneToOne(() => Deposit, deposit => deposit.transaction, {
    nullable: true,
  })
  deposit?: Deposit;


  @OneToOne(() => Withdraw, withdraw => withdraw.transaction, {
    nullable: true,
  })
  withdraw?: Withdraw;
}
