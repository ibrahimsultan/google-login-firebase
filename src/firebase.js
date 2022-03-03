import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_oqgnNtN80iZaB3OzPtfnxCU9oLgAKqM",
  authDomain: "login-c2695.firebaseapp.com",
  projectId: "login-c2695",
  storageBucket: "login-c2695.appspot.com",
  messagingSenderId: "887864111582",
  appId: "1:887864111582:web:c9eec6b9a1758f5cb96d4f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
