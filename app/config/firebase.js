import firebase from "firebase";
import * as c from "./constants";

const config = {
  apiKey: c.FIREBASE_API_KEY,
  authDomain: c.FIREBASE_AUTH_DOMAIN,
  databaseURL: c.FIREBASE_DATABASE_URL,
  projectId: c.FIREBASE_PROJECT_ID,
  storageBucket: c.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: c.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const fauth = firebase.auth;
export const cloudFunction = `https://us-central1-${
  c.FIREBASE_PROJECT_ID
}.cloudfunctions.net`;
