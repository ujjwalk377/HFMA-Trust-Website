// src/pages/VolunteerAuth.jsx
import React, { useState } from "react";
import AuthForm from "../components/Auth/AuthForm.jsx";
import styles from "../components/Styles/AuthForm.module.css";

const VolunteerAuth = () => {
  const [mode, setMode] = useState("login");

  const handleAuth = (formData) => {
    console.log(`${mode} data submitted:`, formData);
    // Integrate with API here (axios/fetch)
  };

  return (
    <div className={styles.container}>
      <AuthForm mode={mode} onSubmit={handleAuth} />
      <p className={styles.switchText}>
        {mode === "login" ? "Don't have an account?" : "Already registered?"}{" "}
        <button className={styles.switchButton} onClick={() => setMode(mode === "login" ? "signup" : "login")}>
          {mode === "login" ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default VolunteerAuth;
