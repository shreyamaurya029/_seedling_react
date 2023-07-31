// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAjghLaJjzMNwO3TEVxPKYrspaz1OnXnDA",
  authDomain: "login-31851.firebaseapp.com",
  projectId: "login-31851",
  storageBucket: "login-31851.appspot.com",
  messagingSenderId: "320412889514",
  appId: "1:320412889514:web:c9a247fcea29bb123bfbd3",
  measurementId: "G-F34HXH263Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};   