import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import asd from "../../assets/images/group.png";
//ROUTER
import { ROUTER } from "../../router/index";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
const { SIGNIN } = ROUTER;

const Forgotten = () => {
  const emailRef = useRef();

  const sendResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const forgotPasswordHandler = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendResetEmail(email);
      emailRef.current.value = "";
    }
  };

  return (
    <div className="sign-up-wrapper" style={{ height: "516px" }}>
      <div className="forgotten-logo">
        <img src={asd} alt="forgotten-img" />
      </div>
      <h1 className="register-title">Forgot password</h1>
      <p className="top-text">
        Enter your email address and we will send you a link to reset your
        password
      </p>
      <form onSubmit={forgotPasswordHandler}>
        <div className="e-mail" style={{ marginTop: "50px" }}>
          <input
            type="email"
            placeholder="E-mail"
            name="user_email"
            className="email-password"
            ref={emailRef}
          ></input>
        </div>
        <input type="submit" className="register-button" value="Send" />
      </form>
      <div className="question-area">
        Already have an account?<Link to={SIGNIN}>Login</Link>
      </div>
    </div>
  );
};

export default Forgotten;
