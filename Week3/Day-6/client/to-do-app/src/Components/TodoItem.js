import React from "react";
import { ListItem, ListItemText, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <ListItemText
        primary={todo.text}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          textOverflow: "ellipsis",
          textAlign: "start",
          maxWidth: "60%",
        }}
      />
      <Box display={"flex"}>
        <IconButton onClick={() => toggleComplete(todo.id, todo.completed)}>
          <CheckIcon color={todo.completed ? "success" : "disabled"} />
        </IconButton>
        <IconButton onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TodoItem;
