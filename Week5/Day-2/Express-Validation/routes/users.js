import express from "express";
import {
  getUser,
  getUsers,
  createUsers,
  deleteUser,
  updateUser,
} from "../Controllers/users.js";
import { check } from "express-validator";

const router = express.Router();

router.get("/", getUsers);
router.post(
  "/",
  [check("firstName").notEmpty().withMessage("firstName cannot be empty")],
  createUsers
);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export default router;
