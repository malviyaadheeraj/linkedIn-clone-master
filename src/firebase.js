import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBncx59TGM7BTRCZJs4QIdW0fByUhXiWBU",
  authDomain: "linkedin-clone-429e1.firebaseapp.com",
  projectId: "linkedin-clone-429e1",
  storageBucket: "linkedin-clone-429e1.appspot.com",
  messagingSenderId: "43633487279",
  appId: "1:43633487279:web:dc79a3a65e290a444f535a",
  measurementId: "G-NW5PLCDJQV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { storage, auth, provider };
export default db;
