// TodoContainer.jsx
import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import Header from "./Header";
import Card from "./Card";

const TodoContainer = ({ username }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => setTodos([...todos, newTodo]);

  const deleteTodo = (index) =>
    setTodos(todos.filter((_, i) => i !== index));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="w-full max-w-6xl p-8 rounded-lg shadow-md">
        {/* Header */}
        <Header name={username} />

        {/* Card Section */}
        <div className="flex mt-8 gap-6">
          <Card bgcolor="#6C63FF" title="Built Using" subtitle="React" />
          <Card bgcolor="#FF6F61" title="UI Framework" subtitle="Tailwind CSS" />
        </div>

        {/* Main Content Section */}
        <div className="flex mt-8 gap-8">
          {/* Left Side: Add Todo Form */}
          <div className="w-1/3">
            <AddTodoForm addTodo={addTodo} />
          </div>

          {/* Right Side: Todo List */}
          <div className="w-2/3">
            <TodoList todos={todos} deleteTodo={deleteTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
