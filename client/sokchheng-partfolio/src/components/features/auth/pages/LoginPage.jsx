import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "../components/LoginForm";

const BASE_API_URL = import.meta.env.VITE_BASE_URL;

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.post(`${BASE_API_URL}/login`, formData); // adjust endpoint as needed
      setIsLoading(false);

      if (res.status === 200) {
        // navigate("/dashboard"); // enable when ready
        // Save token to local storage or context if needed
        localStorage.setItem("token", res.data.token);
        console.log("Token saved:", res.data.token);
        navigate("/dashboard"); // for testing purposes
        console.log("Login successful:", res.data);
      }
    } catch (err) {
      setIsLoading(false);
      setError("Login failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      {error && <p id="error">{error}</p>}
      <LoginForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};

export default LoginPage;
