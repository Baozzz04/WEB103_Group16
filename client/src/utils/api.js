// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { auth } from "./firebase";
// import axios from "axios";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { baseURL } from "./constants";
// import { updateCurrentUser } from "../store/contentSlice";

// // Firebase API calls
// export const signInUser = createAsyncThunk(
//   "auth/signInUser",
//   async ({ email, password }) => {
//     try {
//       const res = await signInWithEmailAndPassword(auth, email, password);
//       return res;
//     } catch (error) {
//       throw new Error(error.code);
//     }
//   }
// );

// export const signInGoogle = createAsyncThunk("auth/signInGoogle", async () => {
//   try {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();
//     const res = await signInWithPopup(auth, provider);
//     return res;
//   } catch (error) {
//     throw new Error(error.code);
//   }
// });

// export const signOutUser = createAsyncThunk("auth/signOutUser", async () => {
//   try {
//     const res = await signOut(auth);
//     return res;
//   } catch (error) {
//     throw new Error(error.code);
//   }
// });

// export const createNewUser = createAsyncThunk(
//   "auth/createNewUser",
//   async ({ email, password }) => {
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       return res;
//     } catch (error) {
//       throw new Error(error.code);
//     }
//   }
// );

// export const sendResetEmail = createAsyncThunk(
//   "auth/sendResetEmail",
//   async (email) => {
//     try {
//       const res = await sendPasswordResetEmail(auth, email);
//       return res;
//     } catch (error) {
//       throw new Error(error.code);
//     }
//   }
// );

// export function isSignedIn(dispatch) {
//   return new Promise((resolve) => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         updateCurrentUser({ userID: user.uid, username: user.email });
//         resolve(true);
//       } else {
//         resolve(false);
//       }
//     });
//   });
// }

// // MongoDB API calls
// export const addTransaction = createAsyncThunk(
//   "/content/addTransaction",
//   async (newTransaction) => {
//     try {
//       const res = await axios.post(baseURL, newTransaction);
//       return res.data;
//     } catch (error) {
//       console.error("Error found: ", error);
//     }
//   }
// );

// export const editTransaction = createAsyncThunk(
//   "/content/editTransaction",
//   async ({ newTransaction, id }) => {
//     try {
//       const res = await axios.put(baseURL + id, newTransaction);
//       return res.data;
//     } catch (error) {
//       console.error("Error found: ", error);
//     }
//   }
// );

// export const deleteTransaction = createAsyncThunk(
//   "/content/deleteTransaction",
//   async (transactionID) => {
//     try {
//       const res = await axios.delete(baseURL + transactionID);
//       return res.data;
//     } catch (error) {
//       console.error("Error found: ", error);
//     }
//   }
// );

// export const fetchTransaction = createAsyncThunk(
//   "/content/fetchTransaction",
//   async () => {
//     try {
//       const res = await axios.get(baseURL);
//       return res.data;
//     } catch (error) {
//       console.error("Error found: ", error);
//     }
//   }
// );

// export function isAllFieldsFilled(array) {
//   return Object.values(array).every((field) => field !== "");
// }
