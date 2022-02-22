import firebase from "firebase";

const firebaseConfig = {
  // Add your config here
};

/**
 * This initializes the app.
 *
 * using firebase version `8.7.1`.
 */
const firebaseApp = firebase.initializeApp(firebaseConfig);

/**
 * let's access the firebase database.
 */

const db = firebaseApp.firestore();

/**
 * creates google authentication
 */

const auth = firebaseApp.auth();

export { db, auth };
