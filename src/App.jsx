import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [currentUsername, setCurrentUsername] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            currentUsername ? (
              <Navigate to="/todo" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={<Login users={users} setCurrentUsername={setCurrentUsername} />}
        />
        <Route
          path="/signup"
          element={<Signup users={users} setUsers={setUsers} />}
        />
        <Route
          path="/todo"
          element={
            currentUsername ? (
              <TodoContainer username={currentUsername} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
