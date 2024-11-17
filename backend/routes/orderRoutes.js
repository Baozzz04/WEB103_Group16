import express from "express";
import { addNewOrder } from "../controllers/userController.js";

const router = express.Router();

router.post("/orders", addNewOrder);

export default router;
