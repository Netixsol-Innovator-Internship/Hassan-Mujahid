import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display={"flex"}
      gap={2}
      mt={2}
    >
      <TextField
        label="Add a new task"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
}
