import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBtezj8vhgK0E_dAb6fGUpEubPPfeX-t0M",
  authDomain: "darazclone-a9f86.firebaseapp.com",
  databaseURL: "https://darazclone-a9f86.firebaseio.com",
  projectId: "darazclone-a9f86",
  storageBucket: "darazclone-a9f86.appspot.com",
  messagingSenderId: "287666296070",
  appId: "1:287666296070:web:c794e25769b89e38f03a87",
  measurementId: "G-8ZKB77MF23",
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();

export { db, auth };
