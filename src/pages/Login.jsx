import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ users, setCurrentUsername }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setCurrentUsername(username); // Update logged-in user
      navigate("/todo"); // Redirect to TodoContainer
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow">
        <h1 className="text-xl font-semibold mb-4 text-center text-pink-600">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-green-500 text-white py-2 rounded mt-2 hover:bg-green-600 transition"
        >
          Signup
        </button>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
