import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef, useEffect } from "react";
import TodoList from "./Components/TodoList";
export default function App() {
  const LOCAL_STORAGE_KEY = "todoapp.todos";

  const [todos, setTodos] = useState([]); // Initializing State for the app
  const todoNameRef = useRef(); // Using useRef hook to select a particular element

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []); //Using useEffect hook to get stored todos from localStorage and updating current state to them only when component load for first time

  useEffect(() => {
    if (todos.length !== 0)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]); // set todos in localstorage everytime todos get changed

  const handleAddTodo = () => {
    const name = todoNameRef.current.value; // When a user clicks on Add todo button it get's current input value
    if (name === "") return; // if input or name is empty the function stops anddoes not continue further
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    }); // It sets todos, the callback function gets prevTodos,spread operator opens the previouly stored results in the new array, and new results (object) also get's stored in it.
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }; // If the user clicks on the checkbox of any todo it toggles the checked value for that todo.

  const clearCompletedTodos = () => {
    const completedTodos = todos.filter((todo) => !todo.complete);
    if (completedTodos) {
      setTodos(completedTodos);
    }
  }; // removes the todos from the todos array which get checked

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
