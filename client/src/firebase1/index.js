import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBJLbWRBYrizMTadhR0-POGKYvLuqvKkb4",
    authDomain: "anhvu-window.firebaseapp.com",
    projectId: "anhvu-window",
    storageBucket: "anhvu-window.appspot.com",
    messagingSenderId: "785838932991",
    appId: "1:785838932991:web:c8323d5e73a2022b729dca",
    measurementId: "G-0WDNYQ6Y0H"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };