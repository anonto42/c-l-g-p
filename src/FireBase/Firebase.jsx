import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDN37Abad9hs59PnLs0tPz_FAfUjzKTmCQ",
  authDomain: "project-43ace.firebaseapp.com",
  projectId: "project-43ace",
  storageBucket: "project-43ace.appspot.com",
  messagingSenderId: "734802324050",
  appId: "1:734802324050:web:ec29ac13a3f22f37c3cd8b",
  measurementId: "G-YB2PPSBRBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);