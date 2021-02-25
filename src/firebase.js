// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAireh_uA6PcsFWWL8v0CvNYY1-lkjAl8E",
  authDomain: "imessage-clone-9f002.firebaseapp.com",
  projectId: "imessage-clone-9f002",
  storageBucket: "imessage-clone-9f002.appspot.com",
  messagingSenderId: "630409262033",
  appId: "1:630409262033:web:a6f31676e04985007166f0",
  measurementId: "G-SEWXDS2NMY"
};


const firebaseApp = firebase.initailizeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;