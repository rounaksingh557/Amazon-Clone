import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCT-ynFBXJkOZrbH_Ab_Tq4FsIMSoenVPs",
  authDomain: "e-clone-faf85.firebaseapp.com",
  projectId: "e-clone-faf85",
  storageBucket: "e-clone-faf85.appspot.com",
  messagingSenderId: "97659305950",
  appId: "1:97659305950:web:3ddedb01d7c76599af674f",
  measurementId: "G-E4SVTXJMQH",
};

/**
 * This initializes the app.
 *
 * using firebase version `8.7.1`.
 */
firebase.initializeApp(firebaseConfig);
export default firebase;
