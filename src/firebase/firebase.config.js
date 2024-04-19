// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-CJacKlwFs_8cvngBVbRJelTZhqquQ50",
  authDomain: "user-email-password-auth-c95a1.firebaseapp.com",
  projectId: "user-email-password-auth-c95a1",
  storageBucket: "user-email-password-auth-c95a1.appspot.com",
  messagingSenderId: "960266072006",
  appId: "1:960266072006:web:d00ae86ddd90f04c4c4cc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;