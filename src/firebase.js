import firebase from "firebase";

// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBM5TjYGw1EZb7-vq7H5IUbPXmgkTbYQkI",
    authDomain: "slack-clone-tutoria.firebaseapp.com",
    projectId: "slack-clone-tutoria",
    storageBucket: "slack-clone-tutoria.appspot.com",
    messagingSenderId: "752804319291",
    appId: "1:752804319291:web:8c0184700f4895a2cc4c1e"
};

//Inicializamos firebase
const fireBaseApp = firebase.initializeApp(firebaseConfig);

// Configurando
const db = fireBaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, db, provider};