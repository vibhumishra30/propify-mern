// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propify-mern.firebaseapp.com",
  projectId: "propify-mern",
  storageBucket: "propify-mern.appspot.com",
  messagingSenderId: "393057230796",
  appId: "1:393057230796:web:fc966d7b49eb044b6e8769"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);