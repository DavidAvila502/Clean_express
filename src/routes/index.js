import { Router } from "express";

import customerRoute from "./customerRoute/customerRoute.js";

const router = Router();

router.use("/api/customer", customerRoute);

export default router;
