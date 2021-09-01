// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEGv-2O4t72lT1paVBkxDHykKjL1AJZAk",
  authDomain: "fb-clone-1864e.firebaseapp.com",
  databaseURL: "https://fb-clone-1864e-default-rtdb.firebaseio.com",
  projectId: "fb-clone-1864e",
  storageBucket: "fb-clone-1864e.appspot.com",
  messagingSenderId: "64107867096",
  appId: "1:64107867096:web:4d3cea6cb935bc8f08a0ad",
  measurementId: "G-BMT0FRZ4S7"
};
// initialize our app
const firebaseApp = firebase.initializeApp(firebaseConfig);
// initial database
const db = firebaseApp.firestore();
// set auth
const auth = firebase.auth();
// set provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;