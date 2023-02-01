import React, { useState } from "react";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate();
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      navigate("/sign-in");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="sign-up-wrapper">
      <div className="register">Register</div>
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
            value={registerEmail}
            onChange={(e) => {
              setRegisterEmail(e.target.value);
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
            value={registerPassword}
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
            //  className = {email && !email.match(validations.emailValidation) && "error-border"}
            className="email-password"
          ></input>
        </div>
        <button type="button" className="register-button" onClick={register}>
          Register
        </button>
      </form>
      <div className="question-area">
        Already have an account?<Link to="/sign-in">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
