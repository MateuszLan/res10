import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config  = {
  apiKey: "AIzaSyCrCQE6RvU1t1qIMedM8A-pAojMBXcVOZw",
  authDomain: "fir-app-cdf30.firebaseapp.com",
  projectId: "fir-app-cdf30",
  storageBucket: "fir-app-cdf30.appspot.com",
  messagingSenderId: "188073120629",
  appId: "1:188073120629:web:fdbfd8feb2a478853ab93c",
  measurementId: "G-FYQ1CGGJXQ"
};
firebase.initializeApp(config);

export const firestore = firebase.firestore();


export default firebase;