import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [fromData, setFormData] = useState({
    emali: "",
    password: "",
  });

  // function to handle form submission
  const handleSubmit = (e) => {
    setIsLoading(true);
    const from = e.currentTarget;
    e.preventDefault();
    // check if from is valid
    if (from.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // if form is valid, call login function
      axios.post("", fromData)
      .then((res) => {
        setIsLoading(false);
        if(res.status === 200) {
          // if login is successful, redirect to dashboard
          // navigate("/dashboard");
          console.log(res);
        }
      })
    }

    // set loading to false
    setIsLoading(false);

  };

  // function to handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    // update fromdata state with new value
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      {error && <p id="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          value={fromData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <input
          type="password"
          id="password"
          name="password"
          value={fromData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
