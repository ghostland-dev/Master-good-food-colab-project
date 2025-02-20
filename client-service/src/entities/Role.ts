import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Customer } from "./Customer";

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column("simple-array")
  permissions: string[];

  @OneToMany(() => Customer, (customer) => customer.role)
  customers: Customer[];
}
