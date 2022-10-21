

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrCQE6RvU1t1qIMedM8A-pAojMBXcVOZw",
  authDomain: "fir-app-cdf30.firebaseapp.com",
  projectId: "fir-app-cdf30",
  storageBucket: "fir-app-cdf30.appspot.com",
  messagingSenderId: "188073120629",
  appId: "1:188073120629:web:fdbfd8feb2a478853ab93c",
  measurementId: "G-FYQ1CGGJXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default Firebase;