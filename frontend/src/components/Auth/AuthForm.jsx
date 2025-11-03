import React, { useState } from "react";
import styles from "../Styles/AuthForm.module.css";

const AuthForm = ({ mode = "login", onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>
        {mode === "login" ? "Volunteer Login" : "Volunteer Signup"}
      </h2>

      {mode === "signup" && (
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className={styles.input}
        required
      />

      <button type="submit" className={styles.button}>
        {mode === "login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default AuthForm;
