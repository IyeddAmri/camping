
import { getAuth, signInWithEmailAndPassword as signInWithEmail } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

import Constants from "expo-constants";
import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: "AIzaSyDDI4r_TsU6qafH222kDPgsuBvaMMJZiZU",
  authDomain: "o5rej2.firebaseapp.com",
  projectId: "o5rej2",
  storageBucket: "o5rej2.appspot.com",
  messagingSenderId: "15102899649",
  appId: "1:15102899649:web:bddbfd905d3af3adcb2b40",
  measurementId: "G-49TQYYHT7P"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);




const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmail(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export { auth ,initializeApp, firestore, signInWithEmailAndPassword };



