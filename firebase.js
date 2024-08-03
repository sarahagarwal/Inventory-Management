// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import {getAnalytics} from 'firebase/analytics'
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_zKjjJKgz6ZdI29MPCuwiHEgy0nRCR1I",
  authDomain: "hspantryapp-3206d.firebaseapp.com",
  projectId: "hspantryapp-3206d",
  storageBucket: "hspantryapp-3206d.appspot.com",
  messagingSenderId: "572420238443",
  appId: "1:572420238443:web:f54a9a0ecfca1c3480552e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app)
const firestore = getFirestore(app);

export {firestore};