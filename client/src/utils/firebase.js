import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQjiicOFFwK0BxbUMrzQFce1IWm6BQj6o",
  authDomain: "expense-tracker-67ef8.firebaseapp.com",
  projectId: "expense-tracker-67ef8",
  storageBucket: "expense-tracker-67ef8.appspot.com",
  messagingSenderId: "370636342786",
  appId: "1:370636342786:web:695d245ec82891f882891b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
