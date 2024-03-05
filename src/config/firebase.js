// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyA1MCvYMIPV8p0jNmQEkxt9RCEZdQ1QtFI",
  authDomain: "micontabilidad-ab9c7.firebaseapp.com",
  databaseURL: "https://micontabilidad-ab9c7-default-rtdb.firebaseio.com",
  projectId: "micontabilidad-ab9c7",
  storageBucket: "micontabilidad-ab9c7.appspot.com",
  messagingSenderId: "1046930693023",
  appId: "1:1046930693023:web:90cca1f8b41e2579f67baa",
  measurementId: "G-W7V84JVQFZ"
};

// Initialize Firebase




export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getDatabase(app)

export const login = ({email, password}) =>{
    return signInWithEmailAndPassword(auth, email, password)
}


export const register = ({ email, password }) =>{
    return createUserWithEmailAndPassword(auth, email, password);}
    

export const logOut = () => signOut(auth);