// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC75YBOnnioZOrviulZ013VKQx-bNiqVF8",
  authDomain: "assignment-11-62e47.firebaseapp.com",
  projectId: "assignment-11-62e47",
  storageBucket: "assignment-11-62e47.firebasestorage.app",
  messagingSenderId: "602111768306",
  appId: "1:602111768306:web:c855585bb0305bea77c26b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);