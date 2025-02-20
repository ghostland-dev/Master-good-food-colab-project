import { Repository } from "typeorm";
import { AppDataSource } from "../config/database";
import { Customer } from "../entities/Customer";

export const CustomerRepository: Repository<Customer> = AppDataSource.getRepository(Customer);
