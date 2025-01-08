import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.name} toggleTodo={toggleTodo} />
      ))}
    </div> // In this it maps over todos array and pass the individual todo to Todo Compoenet
  );
}
