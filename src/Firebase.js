import firebase from 'firebase';
import store from './store';

const settings = { timestampsInSnapshots: true };

const config = {

  apiKey: "AIzaSyD54t-ZBG92hGwBWLp52k093-TyDji3-h8",
  authDomain: "blog-b66c2.firebaseapp.com",
  projectId: "blog-b66c2",
  storageBucket: "blog-b66c2.appspot.com",
  messagingSenderId: "540907029775",
  appId: "1:540907029775:web:0a52c4fbcc1d04a4016a7a"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);
firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
})
firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve();
            console.log(user);
        }, reject);
    });
}

export default firebase;