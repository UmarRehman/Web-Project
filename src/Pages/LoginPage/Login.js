import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginAuth } from "../../Actions";

import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    localStorage.setItem("user", "user");
    const User = "User";
    console.log(User);
    dispatch(LoginAuth(User));
    navigate("/");
  };

  return (
    <>
      <div style={{ width: "100vw" }} className="d-flex">
        <div style={{ width: "50%", height: "100vh" }} class="image"></div>
        <div class="sign-in">
          <h1>Sign In</h1>
          <form>
            <input type="email" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot password?</a>
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
