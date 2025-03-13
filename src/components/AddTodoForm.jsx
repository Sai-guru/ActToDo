// AddTodoForm.jsx
import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (todo.trim()) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter activity"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="p-3 bg-blue-600 text-white border border-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodoForm;
