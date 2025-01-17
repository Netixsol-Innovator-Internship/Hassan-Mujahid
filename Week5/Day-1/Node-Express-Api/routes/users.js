import express from "express";
import {
  getUser,
  getUsers,
  createUsers,
  deleteUser,
  updateUser,
} from "../Controllers/users.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUsers);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.patch("/user/:id", updateUser);

export default router;
