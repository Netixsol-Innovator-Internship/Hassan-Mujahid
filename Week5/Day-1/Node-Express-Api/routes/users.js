import express from "express";
import {
  getUser,
  getUsers,
  createUsers,
  deleteUser,
  updateUser,
} from "../Controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
