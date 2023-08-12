// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJtKFFO8TwE48k4tFh_UpCWkLI9ywdNb0",
  authDomain: "photo-share-33f3a.firebaseapp.com",
  projectId: "photo-share-33f3a",
  storageBucket: "photo-share-33f3a.appspot.com",
  messagingSenderId: "421412444464",
  appId: "1:421412444464:web:2cc01b82a700952492d0f5",
  measurementId: "G-LB5F2EF89X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;