import React, { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  // Fetch tasks from backend
  useEffect(() => {
    fetch("http://192.168.18.13:5000/todos/")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  // Add a new task
  const addTodo = (text) => {
    fetch("http://192.168.18.13:5000/todos/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    })
      .then((response) => response.json())
      .then((newTask) => setTodos([...todos, newTask]));
  };

  // Delete a task
  const deleteTodo = async (id) => {
    await fetch(`http://192.168.18.13:5000/todos/delete/${id}`, {
      method: "DELETE",
    });
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  // Toggle task completion
  const toggleComplete = (id, completed) => {
    fetch(`http://192.168.18.13:5000/todos/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    }).then(() =>
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      )
    );
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          To-Do App
        </Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </Box>
    </Container>
  );
};

export default App;
