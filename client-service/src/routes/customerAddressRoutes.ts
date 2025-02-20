import { Router } from "express";
import { CustomerAddressController } from "../controllers/CustomerAddressController";
import { validateDTO } from "../middlewares/validateDTO";
import { CreateCustomerAddressDTO } from "../dtos/CreateCustomerAddressDTO";
import { UpdateCustomerAddressDTO } from "../dtos/UpdateCustomerAddressDTO";

const router = Router();
const controller = new CustomerAddressController();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validateDTO(CreateCustomerAddressDTO), controller.create);
router.put("/:id", validateDTO(UpdateCustomerAddressDTO), controller.update);
router.delete("/:id", controller.delete);

export default router;
