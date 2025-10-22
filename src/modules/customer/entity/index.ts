import { Entity, Column, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";
import { v4 as uuidv4 } from "uuid";
import { PaymentMethod } from "../../shop";
import { Order } from "../../order";
import { Wallet } from "../../wallet";
import { TransactionHistory } from "../../transactionHistory";
import { OrderDetail } from "../../orderDetail";
import { CustomerType } from "../types";

@Entity()
export class Customer extends BaseEntity {
  @Column({ nullable: false })
  firstName!: string;

  @Column({ nullable: true })
  lastName!: string;

  @Column({ nullable: false, unique: false })
  username!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ nullable: true })
  email!: string;

  @Column({ nullable: true })
  phone_number!: string;

  @Column({ nullable: true })
  dob!: Date;

  @Column({ nullable: true })
  image!: string;

  @Column({ nullable: true })
  customer_address!: string;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;

  @Column({
    type: "enum",
    enum: CustomerType,
    default: CustomerType.FAKE,
  })
  customer_type!: CustomerType;

  @Column({
    type: "json",
    nullable: true,
    default: [
      {
        id: uuidv4(),
        code: "USDT",
        bank_name: "",
        bank_account_name: "",
        bank_account_number: "",
        is_enable: true,
      },
      {
        id: uuidv4(),
        code: "BANK",
        bank_name: "",
        bank_account_name: "",
        bank_account_number: "",
        is_enable: true,
      },
    ],
  })
  payment_method!: [PaymentMethod];

  @OneToMany(() => Order, (order) => order.customerData) // Define OneToMany relationship
  orders?: Order[]; // Correct type is ShopProduct[], not Product[]

  @OneToMany(() => OrderDetail, (order_detail) => order_detail.customerData) // Define OneToMany relationship
  order_details?: OrderDetail[]; // Correct type is ShopProduct[], not Product[]

  @OneToOne(() => Wallet, (wallet) => wallet.customer)
  wallet?: Wallet;

  @OneToMany(
    () => TransactionHistory,
    (transactionHistory) => transactionHistory.customer,
    { nullable: true }
  ) // Define OneToMany relationship
  transaction_histories?: TransactionHistory[]; // Correct type is ShopProduct[], not Product[]
}
