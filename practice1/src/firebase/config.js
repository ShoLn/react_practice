import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2lRkbZH-xSb3MScVjQGUPNkUIcVbFyxQ",
    authDomain: "react-practice-898e5.firebaseapp.com",
    projectId: "react-practice-898e5",
    storageBucket: "react-practice-898e5.appspot.com",
    messagingSenderId: "957413907784",
    appId: "1:957413907784:web:adc6d3be45e23e6d64a77d",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const p1Firestore = firebase.firestore();

export { p1Firestore };
