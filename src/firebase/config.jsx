import { initializeApp } from "Firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAOy72dWhU9I7mCWGhDPLrTEDQPWs2BdOM",
    authDomain: "e-commerce-cec7e.firebaseapp.com",
    projectId: "e-commerce-cec7e",
    storageBucket: "e-commerce-cec7e.firebasestorage.app",
    messagingSenderId: "832289379169",
    appId: "1:832289379169:web:a48611b8fa26128295ab20",
    measurementId: "G-H4RWMS6GBJ"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
