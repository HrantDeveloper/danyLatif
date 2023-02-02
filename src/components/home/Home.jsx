import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
//ROUTER
import { ROUTER } from "../../router/index";
const { SIGNIN } = ROUTER;
const Home = () => {
  const [signedInUser, setSignedInUser] = useState("");
  const navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    setSignedInUser(currentUser);
  });

  const logOut = async () => {
    try {
      const user = await signOut(auth);
      console.log(user);
      navigate(SIGNIN);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h1>
        {signedInUser &&
          `You  are successfully logged in ${signedInUser.email}`}
      </h1>
      <button
        type="button"
        className="register-button"
        onClick={logOut}
        style={{ marginTop: "100px" }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Home;
