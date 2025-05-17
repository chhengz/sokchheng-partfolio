import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegisterForm from "../components/RegisterForm";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
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
      setError("Please fill in all fields.");
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, formData);
      setIsLoading(false);

      if (res.status === 201 || res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        console.log("Registered & token saved:", res.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      setIsLoading(false);
      setError("Registration failed. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="register-form">
      <h1>Register</h1>
      {error && <p id="error">{error}</p>}
      <RegisterForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};

export default RegisterPage;
