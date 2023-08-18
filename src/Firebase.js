import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBYLwbEYKH7sW8xnuzXg-4F5yCQYtMH1Ac",
    authDomain: "todoapp-e2257.firebaseapp.com",
    projectId: "todoapp-e2257",
    storageBucket: "todoapp-e2257.appspot.com",
    messagingSenderId: "650445117827",
    appId: "1:650445117827:web:49a092a5900cb3cef6beb6",
    measurementId: "G-8NNEN1FGKV"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  export {auth , db};