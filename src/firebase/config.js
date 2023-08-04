import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDcDawB9vryhdZGXJ9xtsc2GbPucExfPfA",
  authDomain: "social-media-redux-50844.firebaseapp.com",
  projectId: "social-media-redux-50844",
  storageBucket: "social-media-redux-50844.appspot.com",
  messagingSenderId: "1085176424556",
  appId: "1:1085176424556:web:f25d598f86989fdd501049",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
