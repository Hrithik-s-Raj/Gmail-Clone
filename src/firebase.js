// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfC4bLBZr-GcwQCNv0wIF9Xujo1SM_M7o",
  authDomain: "clone-258c7.firebaseapp.com",
  projectId: "clone-258c7",
  storageBucket: "clone-258c7.appspot.com",
  messagingSenderId: "38988529281",
  appId: "1:38988529281:web:a6d9662cadda42f3009780",
  measurementId: "G-CZNN8F4HJT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
