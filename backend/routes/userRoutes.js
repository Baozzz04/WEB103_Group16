import express from "express";
import { getAllActors, getUserById } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllActors);
router.get("/:id", getUserById);

export default router;
