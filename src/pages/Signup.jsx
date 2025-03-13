import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ users, setUsers }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (users.some((user) => user.username === username)) {
      setError("Username already exists.");
      return;
    }
    setUsers([...users, { username, password }]);
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow">
        <h1 className="text-xl font-semibold mb-4 text-center text-blue-600">Signup</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSignup}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Signup
        </button>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
