import { Repository } from "typeorm";
import { AppDataSource } from "../config/database";
import { Role } from "../entities/Role";

export const RoleRepository: Repository<Role> = AppDataSource.getRepository(Role);
