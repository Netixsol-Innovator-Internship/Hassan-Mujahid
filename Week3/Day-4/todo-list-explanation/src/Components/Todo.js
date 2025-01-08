import React from "react";

export default function Todo({ todo, toggleTodo }) {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  }; // This handleTodoclick function is managing calling the toggleTodo for this specific todo by passing it's id to the toggleTodo function recieving as a prop

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {/*in this checked prop is checking or unchecking the input dynamically based on the todo.complete value whether it's true or false*/}
        {todo.name}
      </label>
    </div>
  );
}
