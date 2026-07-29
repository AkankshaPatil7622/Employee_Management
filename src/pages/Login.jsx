import React, { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import Button from "../components/Button";

function Login() {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  function handleChange(e) {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  }

  function handleClick() {
    navigate("/dashboard");
  }
  return (
    
      <div className="login-root">
       <div id="login-card">
        <h1>Employee Management System</h1>
         <h2  className="gradient-text">Login</h2>
        <Input
          type={"text"}
          placeholder={"Enter email"}
          value={formData.email}
          onChange={handleChange}
          name={"email"}
          id="input"
        />
        <br />
        <Input
          type={"text"}
          placeholder={"Enter password"}
          value={formData.password}
          onChange={handleChange}
          name={"password"}
        />
        <br />
     <Button title={"Login"}/>
       </div>
      </div>

      
   
  );
}

export default Login;
