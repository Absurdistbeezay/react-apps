import firebase from "firebase";
const config = {
  apiKey: "AIzaSyCoOo9GaANLLG4wk1dKGgMKO0B5d60ou_U",
  authDomain: "react-notes-7892d.firebaseapp.com",
  databaseURL: "https://react-notes-7892d.firebaseio.com",
  projectId: "react-notes-7892d",
  storageBucket: "react-notes-7892d.appspot.com",
  messagingSenderId: "712887227891"
};
firebase.initializeApp(config);

export default firebase;
