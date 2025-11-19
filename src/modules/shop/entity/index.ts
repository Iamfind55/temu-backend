import { Entity, Column, OneToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import {
  PaymentMethod,
  ShopIdCardInfo,
  ShopImage,
  ShopRequestVIPData,
  ShopRequestStatus,
  ShopStatus,
} from "../types";
import { v4 as uuidv4 } from "uuid";
import { Wallet } from "../../wallet";
import { TransactionHistory } from "../../transactionHistory";
import { Order } from "../../order";
import { OrderDetail } from "../../orderDetail";
import { ShopFollower } from "../../shopFollower";
import { Deposit } from "../../deposit/entity";
import { Withdraw } from "../../withdraw";

@Entity()
export class Shop extends BaseEntity {
  @Column({ nullable: true })
  fullname?: string;

  @Column({ nullable: true })
  store_name?: string;

  @Column({ nullable: false })
  username?: string;

  @Column({ nullable: false })
  password?: string;

  @Column({ nullable: false })
  email!: string;

  @Column({ nullable: true, unique: false })
  phone_number?: string;

  @Column({ nullable: true, unique: false, default: 0 })
  shop_star?: number;

  @Column({ nullable: true, unique: false, default: 0 })
  shop_vip?: number;

  @Column({ type: "float", default: 20.0 })
  profit?: number;

  @Column({ nullable: true })
  otp?: string;

  @Column({ nullable: true })
  otpExpire_at?: Date;

  @Column({ default: false })
  isOtpEnable?: boolean;

  @Column({ default: false })
  isVerified?: boolean;

  @Column({ nullable: true })
  dob?: Date;

  @Column({
    type: "json", // JSON column for complex objects
    nullable: true,
    default: {
      logo: "",
      cover: "",
    },
  })
  image?: ShopImage;

  @Column({
    type: "json",
    nullable: true,
    default: {
      id_card_number: "",
      id_card_image_front: "",
      id_card_image_back: "",
      id_card_image: "",
    },
  })
  id_card_info!: ShopIdCardInfo;

  @Column({ type: "text", nullable: true }) // Allows long text and makes it optional
  remark!: string;

  @Column({ type: "text", nullable: true }) // Allows long text and makes it optional
  shop_address!: string;

  @Column({
    type: "enum",
    enum: ShopStatus,
    default: ShopStatus.PENDING,
  })
  status!: ShopStatus;

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

  @OneToOne(() => Wallet, (wallet) => wallet.shop)
  wallet?: Wallet;

  @OneToMany(
    () => TransactionHistory,
    (transactionHistory) => transactionHistory.shop,
    { nullable: true }
  ) // Define OneToMany relationship
  transaction_histories?: TransactionHistory[]; // Correct type is ShopProduct[], not Product[]

  @OneToMany(() => Order, (order) => order.shop) // Define OneToMany relationship
  orders?: Order[]; // Correct type is ShopProduct[], not Product[]

  @OneToMany(() => OrderDetail, (order_detail) => order_detail.shop) // Define OneToMany relationship
  order_details?: OrderDetail[]; // Correct type is ShopProduct[], not Product[]

  @Column({
    type: "json",
    nullable: true,
    default: null,
  })
  request_vip_data!: ShopRequestVIPData;

  @OneToMany(() => ShopFollower, (follower) => follower.shop)
  followers?: ShopFollower[];

  @OneToMany(() => Deposit, (deposit) => deposit.shop)
  deposits?: Deposit[];

  @OneToMany(() => Withdraw, (w) => w.shop)
  withdraw?: Withdraw[];
}
