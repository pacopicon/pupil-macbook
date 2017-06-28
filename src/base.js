import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBa0XbTBB8V3u84iY4fSw48-zIPP_TWDuY",
  authDomain: "catch-of-the-day-paco.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-paco.firebaseio.com",
  projectId: "catch-of-the-day-paco",
  storageBucket: "catch-of-the-day-paco.appspot.com",
  messagingSenderId: "1021902196353"
});

const base = Rebase.createClass(app.database());

export default base;
