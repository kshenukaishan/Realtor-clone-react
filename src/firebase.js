// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj2V9dUrCBJC0uqNDyewDrpplXZUzz-gg",
  authDomain: "realtor-react-2f2a7.firebaseapp.com",
  projectId: "realtor-react-2f2a7",
  storageBucket: "realtor-react-2f2a7.appspot.com",
  messagingSenderId: "595242968413",
  appId: "1:595242968413:web:586ba3502c4be24d5134b4",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
