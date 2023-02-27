// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY3RiYXi_IEnFu_6dCsd273Qy-qT0J8Ec",
  authDomain: "shoppeo-d69b5.firebaseapp.com",
  projectId: "shoppeo-d69b5",
  storageBucket: "shoppeo-d69b5.appspot.com",
  messagingSenderId: "1054586006428",
  appId: "1:1054586006428:web:8412a527728a6ca9f47659",
  measurementId: "G-H67FRSXEFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app