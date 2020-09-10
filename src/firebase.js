import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDPpZ2Zghz3iI1RglOfWsI0yTS2Lxnt4_w",
    authDomain: "shopping-7a781.firebaseapp.com",
    databaseURL: "https://shopping-7a781.firebaseio.com",
    projectId: "shopping-7a781",
    storageBucket: "shopping-7a781.appspot.com",
    messagingSenderId: "1082872757836",
    appId: "1:1082872757836:web:c83c3bd12410a6dd7bbee9",
    measurementId: "G-R9QHDCFKDD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};