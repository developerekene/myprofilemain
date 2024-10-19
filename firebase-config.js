import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBXEe6KNMdNF--ompia1k3EH-L2d-8Deq0",
  authDomain: "ekene-12e30.firebaseapp.com",
  projectId: "ekene-12e30",
  storageBucket: "ekene-12e30.appspot.com",
  messagingSenderId: "1063709699056",
  appId: "1:1063709699056:web:21680b9585b9bd80d8cb35",
  measurementId: "G-RCSE4KFDDN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
