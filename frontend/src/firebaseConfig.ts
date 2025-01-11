import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD44kN-5hUG1Z6aTGO_vy130qATLUgMMe8",
    authDomain: "investiq-3f9f9.firebaseapp.com",
    projectId: "investiq-3f9f9",
    storageBucket: "investiq-3f9f9.firebasestorage.app",
    messagingSenderId: "897198190940",
    appId: "1:897198190940:web:a18a4f0b7d8e4f58fed199",
    measurementId: "G-BLNW1ZZTP6"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);