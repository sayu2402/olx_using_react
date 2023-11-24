import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firestore'
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbc3_8AOwOhOAVUgXAnx0SHuWW1wVrUQg",
  authDomain: "olxclone-d96a4.firebaseapp.com",
  projectId: "olxclone-d96a4",
  storageBucket: "olxclone-d96a4.appspot.com",
  messagingSenderId: "226912926563",
  appId: "1:226912926563:web:e4d8bf78e18ca1cc71f156",
  measurementId: "G-Z0F0NE1KE1"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);