import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl0dZZ0rOSyLUUZHX2PnywtMurgBpczCw",
  authDomain: "web103-group16.firebaseapp.com",
  projectId: "web103-group16",
  storageBucket: "web103-group16.firebasestorage.app",
  messagingSenderId: "504195021253",
  appId: "1:504195021253:web:288939a66692b18cbab3ac",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
