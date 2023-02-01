import React, { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isRemembered, setIsRemembered] = useState("");
  const navigate = useNavigate();
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="sign-up-wrapper" style={{ height: "678px" }}>
      <div className="register">Login</div>
      <div className="top-text">Gain total control of Your money</div>
      <div className="apple-google-area">
        <AiFillApple className="icon" />
        <p>Continue with Apple</p>
      </div>
      <div className="apple-google-area">
        <FcGoogle className="icon" />
        <p>Continue with Google</p>
      </div>
      <div className="lines-area">
        <hr />
        or
        <hr />
      </div>
      <form>
        <div className="e-mail">
          <input
            type="text"
            placeholder="E-mail"
            id="email"
            value={loginEmail}
            onChange={(e) => {
              setLoginEmail(e.target.value);
            }}
            //  className = {email && !email.match(validations.emailValidation) && "error-border"}
            className="email-password"
          ></input>
        </div>
        <div className="password">
          <input
            type="text"
            placeholder="Password"
            id="email"
            value={loginPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
            //  className = {email && !email.match(validations.emailValidation) && "error-border"}
            className="email-password"
          ></input>
        </div>
        <div className="checkbox-area">
          <div className="checkbox-div">
            <input
              type="checkbox"
              className="checkbox"
              id="remembered"
              name="remembered"
              // ref={isTopRef}
              // checked={newsData.isTop == "top" ? true : false}
              onChange={(e) => {
                setIsRemembered((prev) => !prev);
              }}
            />
            Remember Me
          </div>
          <Link to="/forgotten">Forgot password?</Link>
        </div>
        <button type="button" className="register-button" onClick={login}>
          Login
        </button>
      </form>
      <div className="question-area">
        Don’t have an account?<Link to="/">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
