import React, { useState } from "react";
import { login } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const { login, user } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      console.log("User logged in:", res.data);
    } catch (err) {
      console.error(err);
    }
  };
  if (user) {
    return <Navigate to="/dashboard" />; // Redirect if already logged in
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={onSubmit} className="login-form">
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
