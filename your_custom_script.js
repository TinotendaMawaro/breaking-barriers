// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClJUx1guwoZ0ocxaPomj7oDgsNhk9QB3c",
  authDomain: "breaking-barriers-15c2a.firebaseapp.com",
  projectId: "breaking-barriers-15c2a",
  storageBucket: "breaking-barriers-15c2a.appspot.com",
  messagingSenderId: "976742768022",
  appId: "1:976742768022:web:165bdbe76835801f0c91b7",
  measurementId: "G-ZV8BRH26BM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);