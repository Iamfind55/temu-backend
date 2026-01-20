import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"; 

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string; // Use string because UUIDs are strings 

  @Column({ type: "boolean", default: true })
  is_active!: boolean;

  @CreateDateColumn({ type: "timestamptz" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updated_at!: Date;

  @Column({ nullable: true })
  created_by!: string;

  @Column({ nullable: true })
  updated_by!: string;
}
