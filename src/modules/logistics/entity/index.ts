import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../../utils/base/baseEntity";
import { ETransportMode } from "../../../utils/base/baseEnum";
import { Order } from "../../order";
import { BaseStatus } from "../../../utils/base/baseType";

@Entity("logistics")
export class Logistics extends BaseEntity {
  @Column()
  company_name!: string;

  @Column({ nullable: true })
  logo?: string;

  @Column({ type: "float", default: 0.0, nullable: true })
  cost?: number;

  @Column({
    type: "enum",
    enum: BaseStatus,
    default: BaseStatus.ACTIVE,
  })
  status!: BaseStatus;

  @Column({
    type: "enum",
    enum: ETransportMode,
    array: true,
    nullable: true,
  })
  transport_modes?: ETransportMode[];

  @OneToMany(() => Order, (order) => order.logistics)
  orders?: Order;
}
