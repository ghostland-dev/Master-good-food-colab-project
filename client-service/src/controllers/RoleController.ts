import { Request, Response } from "express";
import { RoleService } from "../services/RoleService";
import { CreateRoleDTO } from "../dtos/CreateRoleDTO";
import { UpdateRoleDTO } from "../dtos/UpdateRoleDTO";

const roleService = new RoleService();

export class RoleController {
  async getAll(req: Request, res: Response) {
    const roles = await roleService.getAll();
    res.json(roles);
  }

  async getById(req: Request, res: Response) {
    const role = await roleService.getById(Number(req.params.id));
    res.json(role);
  }

  async create(req: Request, res: Response) {
    const role = await roleService.create(req.body as CreateRoleDTO);
    res.status(201).json(role);
  }

  async update(req: Request, res: Response) {
    const role = await roleService.update(Number(req.params.id), req.body as UpdateRoleDTO);
    res.json(role);
  }

  async delete(req: Request, res: Response) {
    await roleService.delete(Number(req.params.id));
    res.status(204).send();
  }
}
