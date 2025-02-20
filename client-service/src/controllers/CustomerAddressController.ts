import { Request, Response } from "express";
import { CustomerAddressService } from "../services/CustomerAddressService";
import { CreateCustomerAddressDTO } from "../dtos/CreateCustomerAddressDTO";
import { UpdateCustomerAddressDTO } from "../dtos/UpdateCustomerAddressDTO";

const customerAddressService = new CustomerAddressService();

export class CustomerAddressController {
  async getAll(req: Request, res: Response) {
    const addresses = await customerAddressService.getAll();
    res.json(addresses);
  }

  async getById(req: Request, res: Response) {
    const address = await customerAddressService.getById(Number(req.params.id));
    res.json(address);
  }

  async create(req: Request, res: Response) {
    try {
      const address = await customerAddressService.create(req.body as CreateCustomerAddressDTO);
      res.status(201).json(address);
    } catch (error) {
      console.error("Erreur lors de la création de l'adresse :", error);
      res.status(500).json({ message: "Erreur serveur interne" });
    }
  }

  async update(req: Request, res: Response) {
    const address = await customerAddressService.update(Number(req.params.id), req.body as UpdateCustomerAddressDTO);
    res.json(address);
  }

  async delete(req: Request, res: Response) {
    await customerAddressService.delete(Number(req.params.id));
    res.status(204).send();
  }
}
