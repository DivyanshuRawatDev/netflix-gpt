// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwxdL3QGocBP8ZBw7YLhJ2op9DfA0DW1k",
  authDomain: "netflixgpt-86eaf.firebaseapp.com",
  projectId: "netflixgpt-86eaf",
  storageBucket: "netflixgpt-86eaf.appspot.com",
  messagingSenderId: "11655601324",
  appId: "1:11655601324:web:fa4e77406e35f7d60f5309",
  measurementId: "G-X2PYT6TG6W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
