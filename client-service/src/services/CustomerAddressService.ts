import { CustomerAddressRepository } from "../repositories/CustomerAddressRepository";
import { CustomerAddress } from "../entities/CustomerAddress";
import { CreateCustomerAddressDTO } from "../dtos/CreateCustomerAddressDTO";
import { UpdateCustomerAddressDTO } from "../dtos/UpdateCustomerAddressDTO";
import { CustomerRepository } from "../repositories/CustomerRepository";

export class CustomerAddressService {
  async getAll(): Promise<CustomerAddress[]> {
    return CustomerAddressRepository.find({ relations: ["customer"] });
  }

  async getById(id: number): Promise<CustomerAddress | null> {
    return CustomerAddressRepository.findOne({
      where: { id },
      relations: ["customer"],
    });
  }

  async create(data: CreateCustomerAddressDTO): Promise<CustomerAddress> {
    const customer = await CustomerRepository.findOneBy({ id: data.user_id });
    
    if (!customer) {
      throw new Error("Utilisateur introuvable avec l'ID fourni.");
    }

    const newAddress = CustomerAddressRepository.create({
      ...data,
      customer,
    });

    const savedAddress = await CustomerAddressRepository.save(newAddress);

    if (data.is_default) {
      await this.setDefaultAddress(data.user_id, savedAddress.id);
    }

    return savedAddress;
  }

  async update(id: number, data: UpdateCustomerAddressDTO): Promise<CustomerAddress | null> {
    await CustomerAddressRepository.update(id, data);
    return this.getById(id);
  }

  async delete(id: number): Promise<void> {
    await CustomerAddressRepository.delete(id);
  }

  async setDefaultAddress(user_id: number, address_id: number) {
    await CustomerAddressRepository.update(
      { customer: { id: user_id }, is_default: true },
      { is_default: false }
    );

    if (address_id) {
      await CustomerAddressRepository.update({ id: address_id }, { is_default: true });
    } else {
      console.error("L'adresse ID est vide ou indéfinie !");
    }
  }
}
