// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADLG-BYCXpUd40wzCxz1LfQB7Ythmk1_o",
  authDomain: "connect-dc12c.firebaseapp.com",
  projectId: "connect-dc12c",
  storageBucket: "connect-dc12c.appspot.com",
  messagingSenderId: "614262637664",
  appId: "1:614262637664:web:aed69566af106311f66f05",
  measurementId: "G-4P4XL83WX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);