import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDsjF1EQYh8HEfKFfXJPrwlUrk6zoMpwtk",
  authDomain: "admin-dashboard-1d728.firebaseapp.com",
  projectId: "admin-dashboard-1d728",
  storageBucket: "admin-dashboard-1d728.appspot.com",
  messagingSenderId: "96059386086",
  appId: "1:96059386086:web:913f02861af3f02088f327"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);