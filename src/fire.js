// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMWCSr6y22K7b5cmnSuhWULJNklQDM_NU",
  authDomain: "yoftahe-5486d.firebaseapp.com",
  databaseURL: "https://yoftahe-5486d-default-rtdb.firebaseio.com",
  projectId: "yoftahe-5486d",
  storageBucket: "yoftahe-5486d.appspot.com",
  messagingSenderId: "367215287068",
  appId: "1:367215287068:web:01334db2bb4662d146f8d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
