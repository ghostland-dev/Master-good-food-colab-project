import { Router } from "express";
import { CustomerController } from "../controllers/CustomerController";
import { validateDTO } from "../middlewares/validateDTO";
import { CreateCustomerDTO } from "../dtos/CreateCustomerDTO";
import { UpdateCustomerDTO } from "../dtos/UpdateCustomerDTO";

const router = Router();
const controller = new CustomerController();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validateDTO(CreateCustomerDTO), controller.create);
router.put("/:id", validateDTO(UpdateCustomerDTO), controller.update);
router.delete("/:id", controller.delete);

export default router;
