import React from "react";
import { useState } from "react";
import TodoList from "./Components/TodoList";
export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left todo</div>
    </>
  );
}
