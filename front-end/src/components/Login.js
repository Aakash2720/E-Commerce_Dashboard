import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handlelogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter connect details");
    }
    // console.warn(result);
    // console.warn(email, password);
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter your email"
        className="inputbox"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="inputbox"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="button" className="appButton" onClick={handlelogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
