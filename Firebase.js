import { initializeApp } from "firebase/app"
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const settings = {timestampsInSnapshots: true};
const firebaseConfig  = {
  apiKey: "AIzaSyCrCQE6RvU1t1qIMedM8A-pAojMBXcVOZw",
  authDomain: "fir-app-cdf30.firebaseapp.com",
  projectId: "fir-app-cdf30",
  storageBucket: "fir-app-cdf30.appspot.com",
  messagingSenderId: "188073120629",
  appId: "1:188073120629:web:fdbfd8feb2a478853ab93c",
  measurementId: "G-FYQ1CGGJXQ"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}