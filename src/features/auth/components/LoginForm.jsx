
import React, { useState } from "react";

const LoginForm = ({onSubmit}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Call the parent onSubmit function passed as a prop
    onSubmit({ email, password });
  };

  return (
    <>
      <h1>Login</h1>
      {error && <p id="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
        
      </form>
    </>
  );
};

export default LoginForm;
