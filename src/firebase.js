  // Initialize Firebase
  import firebase from 'firebase/app';
  import 'firebase/app';
  import 'firebase/database';
  import 'firebase/firestore';
  import 'firebase/auth';
  import {firebaseConfig} from './config/firebaseConfig';
  
  console.log('firebase initialized!');

  const config = firebaseConfig;



// init firebase
firebase.initializeApp(config);

// store db here.
const db = firebase.firestore();
// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
  });


const firebaseCafe = db.collection("cafes");


export {
    firebase,
    firebaseCafe
} ;