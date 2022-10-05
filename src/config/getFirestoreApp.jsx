// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9qtkOzazHYGiv9wDlU9FX9BK0MMqUYnY",
  authDomain: "porfoliobds.firebaseapp.com",
  projectId: "porfoliobds",
  storageBucket: "porfoliobds.appspot.com",
  messagingSenderId: "655636387301",
  appId: "1:655636387301:web:ce942afd8eb876a7c3cb0c",
  measurementId: "G-2KC7G5RQ15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
    return app;
}