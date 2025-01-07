const express = require("express");
const router = express.Router();
const {
  sendTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../Controller/todosController");

router.get("/", sendTodos); //sending todos array
router.post("/create", createTodo); //create a new todo
router.patch("/update/:id", updateTodo); //updating and handling toggling of complete and incomplete funcitons
router.delete("/delete/:id", deleteTodo); //Deleting a todo

module.exports = router;
