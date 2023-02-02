import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8F-qc2fIsxoo1DfxFeVyNsSB4RBc47jA",
  authDomain: "fir-authentication-3d22f.firebaseapp.com",
  projectId: "fir-authentication-3d22f",
  storageBucket: "fir-authentication-3d22f.appspot.com",
  messagingSenderId: "471457210765",
  appId: "1=71457210765=eb=c223c1c981af9c143ddc4",
  measurementId: "G-0S80QB459H",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const data = await signInWithPopup(auth, provider);
    console.log(data);
  } catch (error) {
    throw new Error(error);
  }
};
