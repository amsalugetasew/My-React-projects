import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "peerless-window-249708.firebaseapp.com",
  projectId: "peerless-window-249708",
  storageBucket: "peerless-window-249708.appspot.com",
  messagingSenderId: "79605861135",
  appId: "1:79605861135:web:5bec207eac33c7ef7a4c7a",
  measurementId: "G-JFJ3YV78ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBmB0-ppEmg4Q9n-EcVThCzgG8FhIyiP_w",
//   authDomain: "project-3-251cf.firebaseapp.com",
//   projectId: "project-3-251cf",
//   storageBucket: "project-3-251cf.appspot.com",
//   messagingSenderId: "281821585286",
//   appId: "1:281821585286:web:bd55e3e435e141c47f1607",
//   measurementId: "G-F40ELHGBLJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);