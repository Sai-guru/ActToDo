// TodoList.jsx
import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="bg-violet-300 border rounded-lg p-4 shadow-md h-full">
      <h1 className="text-2xl font-medium mb-3">Today's Activity</h1>
      {todos.length > 0 ? (
        <ul className="list-disc pl-5 space-y-3">
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="text-gray-800">{todo}</span>
              <button
                className="text-red-500 text-xl font-bold hover:text-red-700 transition duration-300"
                onClick={() => deleteTodo(index)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">You haven't added any activity</p>
      )}
    </div>
  );
};

export default TodoList;
