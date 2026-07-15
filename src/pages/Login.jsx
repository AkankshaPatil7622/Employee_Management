import React, { useState } from 'react'
import Input from '../components/Input'
import {useNavigate} from 'react-router-dom';

function Login() {
    const [formData, setFormdata] = useState({
        email : "",
        password : ""
    });

    const navigate = useNavigate();
    function handleChange(e){
        setFormdata({...formData,[e.target.name]:e.target.value});

    }

    function handleClick(){
        navigate('/dashboard');
    }
  return (
    <>
    <h1>Login</h1>
    <Input type={"text"} placeholder={"Enter email"} value={formData.email} onChange={handleChange} name={"email"}/>
    <Input type={"text"} placeholder={"Enter password"} value={formData.password} onChange={handleChange} name={"password"}/>
    <p>{formData.email}</p>
    <p>{formData.password}</p>

    <button onClick={handleClick}>move</button>
    </>
  )
}

export default Login