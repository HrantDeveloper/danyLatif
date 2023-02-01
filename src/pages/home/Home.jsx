import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [signedInUser, setSignedInUser] = useState("");
  const navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    setSignedInUser(currentUser);
  });

  const signOut = async () => {
    try {
      const user = await signOut(auth);
      console.log(user);
      navigate("/sign-in");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <p>
        {signedInUser &&
          `You  are successfully logged in ${signedInUser.email}`}
      </p>
      <button type="button" className="register-button" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Home;
