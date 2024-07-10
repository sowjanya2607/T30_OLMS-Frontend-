import React, { useState } from "react";
import { register } from "../services/api";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://t30-olms-frontend.onrender.com:5001/api/users/register",
        formData
      ); // Correct URL
      console.log("User registered:", res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={onSubmit} className="register-form">
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          required
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
