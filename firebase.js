// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMj0gLeQabfgWJjnlr0iWzTaG3Qbs-z0I",
  authDomain: "instagramclone-15d39.firebaseapp.com",
  projectId: "instagramclone-15d39",
  storageBucket: "instagramclone-15d39.appspot.com",
  messagingSenderId: "456550418243",
  appId: "1:456550418243:web:cf159be99c396189a451f6",
  measurementId: "G-N0NQTKVN20"
};

// Initialize Firebase

// prevents us from doing more than one application at a time
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };