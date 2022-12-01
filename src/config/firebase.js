// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQbfwqgJ0NkKdgLeZXrUheH4ADjCDeMnM",
  authDomain: "aulalogin-a6767.firebaseapp.com",
  projectId: "aulalogin-a6767",
  storageBucket: "aulalogin-a6767.appspot.com",
  messagingSenderId: "636294210270",
  appId: "1:636294210270:web:da64d77c1358c4919ad84f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);