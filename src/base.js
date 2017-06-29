import firebase from 'firebase';
import { database } from 'firebase';
import Rebase from 're-base';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBa0XbTBB8V3u84iY4fSw48-zIPP_TWDuY",
  authDomain: "catch-of-the-day-paco.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-paco.firebaseio.com",
  projectId: "catch-of-the-day-paco",
  storageBucket: "catch-of-the-day-paco.appspot.com",
  messagingSenderId: "1021902196353"
});

const base = Rebase.createClass(app.database());
const db = database(app);

const rebase = {
  app: app,
  base: base,
  db: db
}

// const fbProvider = new firebase.auth.FacebookAuthProvider();
// const ghProvider = new firebase.auth.GithubAuthProvider();
// const twProvider = new firebase.auth.TwitterAuthProvider();

// export function oAuthSignIn(provider, func) {
//   app.auth().signInWithPopup(provider).then((result) => {
//     console.log('token = ' + token + ', user = ' + user);
//     const token = result.credential.accessToken;
//     const user = result.user;
//     const authData = {
//       token: token,
//       user: user
//     }
//     return authData
//   });
// }

export default rebase;
