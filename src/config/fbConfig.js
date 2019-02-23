import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBzsRY8k-5bc7oo9s2t-KV8DqMTIJw_vIs",
    authDomain: "luck-spa.firebaseapp.com",
    databaseURL: "https://luck-spa.firebaseio.com",
    projectId: "luck-spa",
    storageBucket: "luck-spa.appspot.com",
    messagingSenderId: "650165892815"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;