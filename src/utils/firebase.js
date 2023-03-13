import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC-UfAil79jZL-G99mq5bd5o5cUulLOZ2s",
  authDomain: "fii-practic2023.firebaseapp.com",
  projectId: "fii-practic2023",
  storageBucket: "fii-practic2023.appspot.com",
  messagingSenderId: "1044656194247",
  appId: "1:1044656194247:web:3d6d87965dc5239038f4e2",
}

const app = initializeApp(firebaseConfig)

const authService = getAuth()
const dbService = getFirestore(app)

const auth = {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
}

export { auth, dbService, authService }
export default app
