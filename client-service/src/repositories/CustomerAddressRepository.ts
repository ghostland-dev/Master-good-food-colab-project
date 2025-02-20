import { Repository } from "typeorm";
import { AppDataSource } from "../config/database";
import { CustomerAddress } from "../entities/CustomerAddress";

export const CustomerAddressRepository: Repository<CustomerAddress> = AppDataSource.getRepository(CustomerAddress);
