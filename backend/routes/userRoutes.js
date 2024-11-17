import express from "express";
import {
  deleteComment,
  getAllActors,
  getUserById,
  updateComment,
  updateUserFields,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllActors);
router.get("/:id", getUserById);
router.put("/:id", updateUserFields);
router.delete("/:id/comments", deleteComment);
router.put("/:id/update-comment", updateComment);

export default router;
