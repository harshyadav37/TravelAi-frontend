// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBOmmDubwKzzhqirZcp5Le5J_dbEl-a8ZI",
//   authDomain: "travelai-backend-5787d.firebaseapp.com",
//   projectId: "travelai-backend-5787d",
//   storageBucket: "travelai-backend-5787d.firebasestorage.app",
//   messagingSenderId: "787550697510",
//   appId: "1:787550697510:web:f0a743b948670cd0054ee7"
// };

// if(!firebase.getApps.length){
//     firebase.initializeApp(firebaseConfig);
// }

// export default firebase;


// lib/firebase.js

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOmmDubwKzzhqirZcp5Le5J_dbEl-a8ZI",
  authDomain: "travelai-backend-5787d.firebaseapp.com",
  projectId: "travelai-backend-5787d",
  storageBucket: "travelai-backend-5787d.firebasestorage.app",
  messagingSenderId: "787550697510",
  appId: "1:787550697510:web:f0a743b948670cd0054ee7",
};

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;