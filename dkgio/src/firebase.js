import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


// Initialize Cloud Firestore through Firebase
const app = initializeApp({

    apiKey: "AIzaSyAhoW-0_4a2T8kgyZqj2uWPfMs8aqi-GLs",
  
    authDomain: "workoutgenerator-a8609.firebaseapp.com",
  
    projectId: "workoutgenerator-a8609",
  
    storageBucket: "workoutgenerator-a8609.appspot.com",
  
    messagingSenderId: "694699881581",
  
    appId: "1:694699881581:web:56906780c0d276fe6e3b64",
  
    measurementId: "G-SJ8DDQW8LQ"
  
  });
  let db = getFirestore(app);
  let auth = getAuth(app);

  export { app, db, auth };