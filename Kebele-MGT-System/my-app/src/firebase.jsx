// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyA9Jhni7F20oe2ZosJdvc2MayYsbsHWeoM",
//   authDomain: "kebelemgtsystem.firebaseapp.com",
//   projectId: "kebelemgtsystem",
//   storageBucket: "kebelemgtsystem.appspot.com",
//   messagingSenderId: "802367036435",
//   appId: "1:802367036435:web:f948f73f7053830ab073e6",
//   measurementId: "G-GG4M6N16EC"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// // firebase login
// // firebase init
// // firebase deploy


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
export default app;