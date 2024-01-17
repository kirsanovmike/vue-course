import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAratVSSTqOUOp5KKIgn4eK1W2abM17Fq0",
  authDomain: "noteballs-996a7.firebaseapp.com",
  projectId: "noteballs-996a7",
  storageBucket: "noteballs-996a7.appspot.com",
  messagingSenderId: "320251490867",
  appId: "1:320251490867:web:3daab6282d194e4ad32946",
  measurementId: "G-YXV68W5YVT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
  db
}
