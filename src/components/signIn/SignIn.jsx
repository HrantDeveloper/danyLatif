import React, { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../../firebase";
//ROUTER
import { ROUTER } from "../../router/index";
const { HOME, SIGNUP, FORGOTTEN } = ROUTER;

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isRemembered, setIsRemembered] = useState(false); //For future

  const navigate = useNavigate();
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      navigate(HOME);
    } catch (error) {
      setLoginEmail("");
      setLoginPassword("");
      alert("Invalid e-mail or password");
    }
  };
  const continueWithGoogle = async () => {
    await signInWithGoogle();
    navigate(HOME);
  };

  return (
    <div className="sign-up-wrapper" style={{ height: "678px" }}>
      <h1 className="register-title">Login</h1>
      <p className="top-text">Gain total control of Your money</p>
      <div className="apple-google-area">
        <AiFillApple className="icon" />
        <p>Continue with Apple</p>
      </div>
      <div className="apple-google-area" onClick={continueWithGoogle}>
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
              onChange={(e) => {
                setIsRemembered((prev) => !prev);
              }}
            />
            <label htmlFor="remembered">Remember Me</label>
          </div>
          <Link to={FORGOTTEN}>Forgot password?</Link>
        </div>
        <button type="button" className="register-button" onClick={login}>
          Login
        </button>
      </form>
      <div className="question-area">
        Don’t have an account?<Link to={SIGNUP}>Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
