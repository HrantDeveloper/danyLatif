import React, { useState } from "react";
import { Link } from "react-router-dom";

const Forgotten = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="sign-up-wrapper" style={{ height: "516px" }}>
      <div className="register">Forgot password</div>
      <div className="top-text">
        Enter your email address and we will send you a link to reset your
        password
      </div>
      <form>
        <div className="e-mail" style={{ marginTop: "50px" }}>
          <input
            type="text"
            placeholder="E-mail"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //  className = {email && !email.match(validations.emailValidation) && "error-border"}
            className="email-password"
          ></input>
        </div>
        <button
          type="button"
          className="register-button"
          // onClick={sendUserData}
        >
          Send
        </button>
      </form>
      <div className="question-area">
        Already have an account?<Link to="/sign-in">Login</Link>
      </div>
    </div>
  );
};

export default Forgotten;
