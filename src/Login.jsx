import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "divyanshu") {
      navigate("/web/home");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="glass-box" onSubmit={handleSubmit}>
        <div className="login-header">
          <h2>Welcome To <span>Planora.ai</span></h2>
          <p className="login-tagline">Your personalized academic planner</p>
        </div>



        {/* Role Selection */}
        <div className="input-group">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Username */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="options">
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
