import { RoleRepository } from "../repositories/RoleRepository";
import { Role } from "../entities/Role";
import { CreateRoleDTO } from "../dtos/CreateRoleDTO";
import { UpdateRoleDTO } from "../dtos/UpdateRoleDTO";

export class RoleService {
  async getAll(): Promise<Role[]> {
    return RoleRepository.find();
  }

  async getById(id: number): Promise<Role | null> {
    return RoleRepository.findOneBy({ id });
  }

  async create(data: CreateRoleDTO): Promise<Role> {
    const newRole = RoleRepository.create(data);
    return RoleRepository.save(newRole);
  }

  async update(id: number, data: UpdateRoleDTO): Promise<Role | null> {
    await RoleRepository.update(id, data);
    return this.getById(id);
  }

  async delete(id: number): Promise<void> {
    await RoleRepository.delete(id);
  }
}
