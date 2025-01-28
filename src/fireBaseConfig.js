import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCBJv_JroIv8EP5nIrvT6UNQOXSHTQ2Xv8",
    authDomain: "reactapp-b4d5c.firebaseapp.com",
    projectId: "reactapp-b4d5c",
    storageBucket: "reactapp-b4d5c.firebasestorage.app",
    messagingSenderId: "285176763105",
    appId: "1:285176763105:web:e44867678f93bd9b861da0"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);