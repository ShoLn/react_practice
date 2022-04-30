import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "react-practice-898e5.firebaseapp.com",
    projectId: "react-practice-898e5",
    storageBucket: "react-practice-898e5.appspot.com",
    messagingSenderId: "957413907784",
    appId: process.env.appId,
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const p1Firestore = firebase.firestore();

export { p1Firestore };
