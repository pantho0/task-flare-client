// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXRspdkFzy4GvgoyaknNvnANf3d_ijziY",
  authDomain: "task-flare.firebaseapp.com",
  projectId: "task-flare",
  storageBucket: "task-flare.appspot.com",
  messagingSenderId: "64565119087",
  appId: "1:64565119087:web:5c9adc3f44ee2334d1259a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;