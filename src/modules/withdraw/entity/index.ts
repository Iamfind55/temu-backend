import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { EDeposit, EUserType } from "../../../utils/base/baseType";
import { Customer } from "../../customer";
import { Shop } from "../../shop";
import { ECoinType, TransactionHistory } from "../../transactionHistory";
import { Wallet } from "../../wallet";

@Entity("withdraw")
export class Withdraw extends BaseEntity {
    @Column({ type: "float", default: 0.0, nullable: true })
    amount!: number;

    @Column({ nullable: true })
    coin_type!: ECoinType;

    @Column({
        type: "enum",
        enum: EDeposit,
        default: EDeposit.PENDING,
    })
    status!: EDeposit;

    @Column({
        type: "enum",
        enum: EUserType,
        default: EUserType.SHOP,
    })
    type!: EUserType;

    @Column({ type: "varchar", nullable: true })
    accountName!: string;


    @Column({ type: "varchar", nullable: true })
    accountNumber!: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    note?: string;

    @Column({ nullable: true })
    customer_id?: string;

    @Column({ nullable: true })
    shop_id?: string;

    @Column({ nullable: true })
    transaction_id?: string;

    @Column({ nullable: true })
    approved_by?: string;

    @Column({ nullable: true })
    approved_at?: Date;

    @Column({ type: "text", nullable: true })
    rejection_reason?: string;

    // Relations
    @ManyToOne(() => Customer, (customer) => customer.withdraw, {
        nullable: true,
    })
    @JoinColumn({ name: "customer_id" })
    customer?: Customer;

    @ManyToOne(() => Shop, (shop) => shop.withdraw, {
        nullable: true,
    })
    @JoinColumn({ name: "shop_id" })
    shop?: Shop;

    @OneToOne(() => TransactionHistory, transaction => transaction.withdraw, {
        nullable: true,
    })
    @JoinColumn({ name: "transaction_id" })
    transaction?: TransactionHistory;

    @OneToOne(() => Wallet, wallet => wallet.withdraw, {
        nullable: true,
    })
    @JoinColumn({ name: "wallet_id" })
    wallet?: Wallet;
}
