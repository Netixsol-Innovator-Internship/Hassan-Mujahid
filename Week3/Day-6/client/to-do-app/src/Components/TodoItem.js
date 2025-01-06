import React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton onClick={() => toggleComplete(todo.id, todo.completed)}>
            <CheckIcon color={todo.completed ? "success" : "disabled"} />
          </IconButton>
          <IconButton onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon color="error" />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={todo.text}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      />
    </ListItem>
  );
};

export default TodoItem;
