// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv-0YfhT7zUysR4UnNcXGGvgVowkIqzSA",
  authDomain: "notas-4c0b1.firebaseapp.com",
  projectId: "notas-4c0b1",
  storageBucket: "notas-4c0b1.appspot.com",
  messagingSenderId: "110257029073",
  appId: "1:110257029073:web:82a77c166d94febed0eaf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app)
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}

/* exportamos la conección a la base de datos y el otro es el googleAuthProvider, no exporto el objeto sino la instancia del objeto */
/* Necesitaremos conectarnos con el servicio de base de datos que es Firestore*/