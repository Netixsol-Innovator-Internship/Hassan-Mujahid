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

// GET all users
router.get("/users", getUsers);

// POST create a user
router.post(
  "/users",
  [
    check("firstName")
      .trim()
      .notEmpty()
      .withMessage("firstName cannot be empty")
      .isLength({ min: 3, max: 15 })
      .withMessage("firstName should be 3 to 15 characters"),
    check("lastName")
      .trim()
      .notEmpty()
      .withMessage("lastName cannot be empty")
      .isLength({ min: 3, max: 15 })
      .withMessage("lastName should be 3 to 15 characters"),
    check("age")
      .notEmpty()
      .withMessage("Age cannot be empty")
      .isInt({ min: 1, max: 100 })
      .withMessage(
        "Age should be greater than 0 and less than or equal to 100"
      ),
  ],
  createUsers
);

// GET a user by ID
router.get("/user/:id", getUser);

// DELETE a user by ID
router.delete("/user/:id", deleteUser);

// PATCH update a user by ID
router.patch(
  "/user/:id",
  [
    check("firstName")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("firstName cannot be empty")
      .isLength({ min: 3, max: 15 })
      .withMessage("firstName should be 3 to 15 characters"),
    check("lastName")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("lastName cannot be empty")
      .isLength({ min: 3, max: 15 })
      .withMessage("lastName should be 3 to 15 characters"),
    check("age")
      .optional()
      .notEmpty()
      .withMessage("Age cannot be empty")
      .isInt({ min: 1, max: 100 })
      .withMessage(
        "Age should be greater than 0 and less than or equal to 100"
      ),
  ],
  updateUser
);

export default router;
