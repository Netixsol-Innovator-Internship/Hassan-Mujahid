import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
};

export default TodoList;
