import { Router } from "express";

import * as customerController from "../../controllers/customerController.js";
import { updateCustomerValidator } from "../../validators/customerValidator.js";

const router = Router();

router.get("/", customerController.getAllCustomers);
router.put(
   "/:id",
   updateCustomerValidator(),
   customerController.updateCustomer
);

export default router;
