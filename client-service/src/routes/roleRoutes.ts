import { Router } from "express";
import { RoleController } from "../controllers/RoleController";
import { validateDTO } from "../middlewares/validateDTO";
import { CreateRoleDTO } from "../dtos/CreateRoleDTO";
import { UpdateRoleDTO } from "../dtos/UpdateRoleDTO";

const router = Router();
const controller = new RoleController();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validateDTO(CreateRoleDTO), controller.create);
router.put("/:id", validateDTO(UpdateRoleDTO), controller.update);
router.delete("/:id", controller.delete);

export default router;
