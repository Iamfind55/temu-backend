import { Entity, Column } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { BaseStatus } from "../../../utils/base/baseType";
import { City, Country, State } from "../types";

@Entity()
export class ShopAddress extends BaseEntity {
  @Column({
    type: "json", // JSON column for complex objects
    nullable: false,
    default: {
      id: 0,
      country: "",
      cn_country: "",
    },
  })
  country!: Country;

  @Column({
    type: "json", // JSON column for complex objects
    nullable: true,
    default: {
      id: 0,
      state: "",
      cn_state: "",
    },
  })
  state!: State;

  @Column({
    type: "json", // JSON column for complex objects
    nullable: true,
    default: {
      id: 0,
      city: "",
      cn_city: "",
    },
  })
  city!: City;

  @Column({ nullable: true })
  address!: string;

  @Column({ nullable: true })
  postal_code!: string;

  @Column({ nullable: true })
  email!: string;

  @Column({ nullable: true })
  phone_number!: string;

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

  @Column({ type: "boolean", default: false })
  is_used!: boolean;
}
