import React from "react";

const RegisterForm = ({ formData, onChange, onSubmit, isLoading }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={onChange}
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={onChange}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
