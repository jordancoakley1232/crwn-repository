import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAA8GsKBOhIuFeTX-8YsKeegOSgU6QSP9o",
    authDomain: "crwn-db-31e36.firebaseapp.com",
    databaseURL: "https://crwn-db-31e36.firebaseio.com",
    projectId: "crwn-db-31e36",
    storageBucket: "crwn-db-31e36.appspot.com",
    messagingSenderId: "410774894386",
    appId: "1:410774894386:web:fb077842ae71f697d6892b"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;