import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { CustomerAddress } from "./CustomerAddress";
import { Role } from "./Role";

@Entity("customer")
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  phone: string;

  @Column()
  role_id: number;

  @ManyToOne(() => Role, { eager: true })
  @JoinColumn({ name: "role_id" })
  role: Role;

  @OneToMany(() => CustomerAddress, (address) => address.customer, { eager: true })
  addresses: CustomerAddress[];

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;
}
