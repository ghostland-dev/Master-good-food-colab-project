import { CustomerRepository } from "../repositories/CustomerRepository";
import { Customer } from "../entities/Customer";
import { CreateCustomerDTO } from "../dtos/CreateCustomerDTO";
import { UpdateCustomerDTO } from "../dtos/UpdateCustomerDTO";
import bcrypt from "bcryptjs";

export class CustomerService {
  async getAll(): Promise<Customer[]> {
    return CustomerRepository.find({
      relations: ["addresses", "role"],
    });
  }

  async getById(id: number): Promise<Customer | null> {
    return CustomerRepository.findOne({
      where: { id },
      relations: ["addresses", "role"],
    });
  }

  async create(data: CreateCustomerDTO): Promise<Customer> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newCustomer = CustomerRepository.create({ ...data, password: hashedPassword });
    return CustomerRepository.save(newCustomer);
  }

  async update(id: number, data: UpdateCustomerDTO): Promise<Customer | null> {
    await CustomerRepository.update(id, data);
    return this.getById(id);
  }

  async delete(id: number): Promise<void> {
    await CustomerRepository.delete(id);
  }
}
