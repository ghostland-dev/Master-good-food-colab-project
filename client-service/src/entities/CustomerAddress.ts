import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Customer } from "./Customer";

@Entity("customer_addresses")
export class CustomerAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address_line: string;

  @Column()
  city: string;

  @Column()
  postal_code: string;

  @Column({ default: false })
  is_default: boolean;

  @ManyToOne(() => Customer, (customer) => customer.addresses)
  @JoinColumn({ name: "user_id" })
  customer: Customer;
}
