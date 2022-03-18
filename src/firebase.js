// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBFr00I7kz3bFuz7ZZjoWUDEF3T9UDjucs",
  authDomain: "whatsapp-clone-cb14a.firebaseapp.com",
  projectId: "whatsapp-clone-cb14a",
  storageBucket: "whatsapp-clone-cb14a.appspot.com",
  messagingSenderId: "387478834413",
  appId: "1:387478834413:web:e062413d577e6aa78690e4",
  measurementId: "G-KTZ04FZPTE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
