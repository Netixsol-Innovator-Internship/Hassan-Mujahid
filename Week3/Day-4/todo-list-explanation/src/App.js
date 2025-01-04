import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef, useEffect } from "react";
import TodoList from "./Components/TodoList";
export default function App() {
  const LOCAL_STORAGE_KEY = "todoapp.todos";

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    if (todos.length !== 0)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  const clearCompletedTodos = () => {
    const completedTodos = todos.filter((todo) => !todo.complete);
    if (completedTodos) {
      setTodos(completedTodos);
    }
  };

  const checkedTodos = todos.filter((todo) => todo.complete === false);

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={clearCompletedTodos}>Clear Complete</button>
      <div>{checkedTodos.length} left todo</div>
    </>
  );
}
