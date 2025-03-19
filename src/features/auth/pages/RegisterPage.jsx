
import React from "react";
import RegisterForm from "../components/RegisterForm";
import "./style.css";

const RegisterPage = () => {
  const handleRegister = (credentials) => {
    // Simulate an API call to register the user
    const mockExistingUser = "user@example.com";

    if (credentials.email === mockExistingUser) {
      alert("User already exists.");
    } else {
      alert("Registration successful!");
      // Proceed to the next steps (e.g., navigate to login or dashboard)
    }
  };

  return (
    <div className="register-page">
      <h1>Create an Account</h1>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
