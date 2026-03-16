import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUTtQAahRDGleiQ4bj_bdGSN4UvudOV0U",
    authDomain: "profile-ekene.firebaseapp.com",
    projectId: "profile-ekene",
    storageBucket: "profile-ekene.firebasestorage.app",
    messagingSenderId: "593932739586",
    appId: "1:593932739586:web:92f23aa563244201a5331b",
    measurementId: "G-WNPFBHMK13"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app)
const auth = getAuth(app)

export { db, auth }