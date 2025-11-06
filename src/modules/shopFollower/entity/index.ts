import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";

import { BaseEntity } from "../../../utils/base/baseEntity";
import { Shop } from "../../shop/entity";
import { Customer } from "../../customer";

@Entity()
export class ShopFollower extends BaseEntity {
  @ManyToOne(() => Shop, (shop) => shop.followers, { onDelete: "CASCADE" })
  @JoinColumn({ name: "shop_id" })
  shop?: Shop;

  @ManyToOne(() => Customer, (customer) => customer.followedShops, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "customer_id" })
  customer!: Customer;

  @CreateDateColumn()
  followedAt?: Date;
}
