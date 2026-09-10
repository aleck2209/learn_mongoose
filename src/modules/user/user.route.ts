import { Router } from "express";
import { getUsersController } from "./user.controller.ts";

const router = Router();

router.get('/', getUsersController);

export default router;