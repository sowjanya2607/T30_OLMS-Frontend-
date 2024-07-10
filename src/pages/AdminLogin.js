import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";
import { adminLogin } from "../services/api";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    adminId: "",
    password: "",
  });

  const history = useNavigate();

  const { adminId, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://t30-olms-frontend.onrender.com:5001/api/adminlogin",
        formData
      );

      if (res.data.success) {
        history.push("/admin-dashboard");
      } else {
        console.error("Admin login failed.");
        // Optionally, show an error message to the user
      }
    } catch (err) {
      console.error("Error logging in:", err);
      // Handle network errors or other exceptions
    }
  };

  return (
    <div className="admin-login-container">
      <h1>Admin Login</h1>
      <form className="admin-login-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="adminId"
          value={adminId}
          onChange={onChange}
          placeholder="Admin ID"
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

export default AdminLogin;
