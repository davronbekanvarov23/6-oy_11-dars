import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBAMjWWb9_x-irv8DsrzArkrfIbDvq96IY",
  authDomain: "mybook-175b1.firebaseapp.com",
  projectId: "mybook-175b1",
  storageBucket: "mybook-175b1.appspot.com",
  messagingSenderId: "668237560177",
  appId: "1:668237560177:web:b0767a99c5832bc5a75ed0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//db
export const db = getFirestore(app);
//auth
export const auth = getAuth(app);
