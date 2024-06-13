// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjTj7j1Ef9dcPsV7vFh44wTcuwfer1yZE",
  authDomain: "framwork-6260b.firebaseapp.com",
  projectId: "framwork-6260b",
  storageBucket: "framwork-6260b.appspot.com",
  messagingSenderId: "823123287410",
  appId: "1:823123287410:web:47482b3816c784340951eb",
  measurementId: "GG-1CF05TJBWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ambil auth dari firebase di sini sekali aja biar bisa dipakai berkali-kali
const auth = getAuth(app);

//diexport
export { auth };