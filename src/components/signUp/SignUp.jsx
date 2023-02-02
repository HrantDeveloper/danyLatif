import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { passwordValidation, emailValidation } from "../../validations";
//ROUTER
import { ROUTER } from "../../router/index";
const { SIGNIN } = ROUTER;

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (data) => {
    setFormData(data); //for future
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate(SIGNIN);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setRegisterEmail("");
        setRegisterPassword("");
        alert("This e-mail address is already in use");
      } else {
        console.log(error);
      }
    }
    setRegisterPassword("");
  };
  return (
    <div className="sign-up-wrapper">
      <h1 className="register-title">Register</h1>
      <p className="top-text">Gain total control of Your money</p>
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="e-mail">
          <input
            type="text"
            placeholder="E-mail"
            id="email"
            {...register("email", {
              required: "Email must contain @ and.",
              pattern: emailValidation,
            })}
            className="email-password"
          />
        </div>
        <div style={{ height: "40px" }}>
          {errors?.email && (
            <p className="warning">
              {errors?.email?.message || "Email must contain @ and."}
            </p>
          )}
        </div>
        <div className="password">
          <input
            {...register("password", {
              required: true,
              pattern: passwordValidation,
            })}
            type="text"
            placeholder="Password"
            id="email"
            className="email-password"
          />
        </div>
        {errors?.password && (
          <p className="warning">
            {errors?.password?.message ||
              "You must use Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"}
          </p>
        )}
        <input
          type="submit"
          className="register-button"
          placeholder="Register"
          value="Register"
        />
      </form>
      <div className="question-area">
        Already have an account?<Link to={SIGNIN}>Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
