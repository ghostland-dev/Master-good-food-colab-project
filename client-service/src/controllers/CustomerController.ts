import { Request, Response } from "express";
import { CustomerService } from "../services/CustomerService";
import { CreateCustomerDTO } from "../dtos/CreateCustomerDTO";
import { UpdateCustomerDTO } from "../dtos/UpdateCustomerDTO";

const customerService = new CustomerService();

export class CustomerController {
  async getAll(req: Request, res: Response) {
    const customers = await customerService.getAll();
    res.json(customers);
  }

  async getById(req: Request, res: Response) {
    const customer = await customerService.getById(Number(req.params.id));
    res.json(customer);
  }

  async create(req: Request, res: Response) {
    const customer = await customerService.create(req.body as CreateCustomerDTO);
    res.status(201).json(customer);
  }

  async update(req: Request, res: Response) {
    const customer = await customerService.update(Number(req.params.id), req.body as UpdateCustomerDTO);
    res.json(customer);
  }

  async delete(req: Request, res: Response) {
    await customerService.delete(Number(req.params.id));
    res.status(204).send();
  }
}
