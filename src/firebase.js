import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCiknBMYkUPOHunX-a4A92TrSX3UTfu578',
  authDomain: 'discord-clone-bbd59.firebaseapp.com',
  projectId: 'discord-clone-bbd59',
  storageBucket: 'discord-clone-bbd59.appspot.com',
  messagingSenderId: '66895028670',
  appId: '1:66895028670:web:029e4e187ec17b2fccd9ef'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
