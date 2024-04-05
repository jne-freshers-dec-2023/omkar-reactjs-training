import React, { useState } from "react";
// import axios from "axios";
import "./Login.css";
import { toast } from "react-toastify";
import { loginuser } from "../Services/user-services";
import 'react-toastify/dist/ReactToastify.css';

// import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

function Login() {
  const [loginidetails, setLogindetails] = useState({
    username: " ",
    password: " ",
  });

  const handleChange = (event, field) => {
    let actualvalue = event.target.value;

    setLogindetails({
      ...loginidetails,
      [field]: actualvalue,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginidetails);

    if (loginidetails.username.trim ==='' || loginidetails.password.trim=== '') {
      toast.error("username or password  is required");
      
      return;
    }

    //this function used to when user is successfully logged in then Tocken will genrate here
    loginuser(loginidetails)
      .then((jwtTokenData) => {
        console.log("User logged in successfully");
        console.log(jwtTokenData); 
      }).catch(error=>{
      console.log(error)
      toast.error("Something went wrogn")
    })
  };


  const handleReset= ()=>{
    setLogindetails({
      username :'',
      password :''
    })
  }


  return (
    <div className="container">
      {" "}
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={loginidetails.username}
            onChange={(e) => handleChange(e, "username")}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={loginidetails.password}
            onChange={(e) => handleChange(e, "password")}
          />
        </div>
        <button type="submit">Login</button>
        <button type="reset" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}

export default Login;
