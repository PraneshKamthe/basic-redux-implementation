import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({token, setToken}) => {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
const navigate = useNavigate();
  const loginHandler = async () => {
    // axios({
    //     url:"https://fakestoreapi.com/auth/login",
    //     method:"POST"
    // })
    var body = {
      username: userName,
      password: password,
    };
    setError("");
    setPassword("");
    setUsername("");
    axios
      .post("https://fakestoreapi.com/auth/login", body)
      .then((response) => {
        console.log("token -> ", response.data.token);
        setToken(response.data.token);
        localStorage.setItem("token" , response.data.token)
        navigate("/home");
      })
      .catch((err) => {
        console.log("Error -> ", err);
        setError(err.response.data);
      });
      
  };
  return (
    <div className="login">
      <div className="login-inputs">
        <input
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
        ></input>

        <small>{error} </small>
        <button className="login-btn" onClick={loginHandler}>Login</button>
        <p>Id: mor_2314 and Password: 83r5^_ </p>
      </div>
    </div>
  );
};

export default Login;
