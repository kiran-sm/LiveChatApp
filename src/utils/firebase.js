// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  apiKey: "AIzaSyCgpobXpQ3LXIrTlrvNRn-B_-h6U4dbab4",
  authDomain: "reactchatapp-f1003.firebaseapp.com",
  projectId: "reactchatapp-f1003",
  storageBucket: "reactchatapp-f1003.appspot.com",
  messagingSenderId: "126340219729",
  appId: "1:126340219729:web:e749b400e7b3098cafc970",
  measurementId: "G-93MD010QK7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
