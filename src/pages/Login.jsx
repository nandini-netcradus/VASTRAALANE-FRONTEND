import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("token", res.data.token);
      navigate("/account");
    } catch (err) {
      console.error("Login error:", err.response ? err.response.data : err);
      alert(
        err.response && err.response.data.message
          ? err.response.data.message
          : "Login failed. Check your credentials."
      );
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Login Page</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
