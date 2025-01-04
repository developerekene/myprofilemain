import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBXEe6KNMdNF--ompia1k3EH-L2d-8Deq0",
    authDomain: "ekene-12e30.firebaseapp.com",
    databaseURL: "https://ekene-12e30-default-rtdb.firebaseio.com",
    projectId: "ekene-12e30",
    storageBucket: "ekene-12e30.firebasestorage.app",
    messagingSenderId: "1063709699056",
    appId: "1:1063709699056:web:21680b9585b9bd80d8cb35",
    measurementId: "G-RCSE4KFDDN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app)
const auth = getAuth(app)

export { db, auth }