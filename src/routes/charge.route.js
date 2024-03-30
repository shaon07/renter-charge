import { Router } from "express";
import chargeController from "../controller/charge.controller.js";

const router = Router();

router.post("/", chargeController)

export default router;