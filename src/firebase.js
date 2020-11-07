import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-sREGAIl0EqEkpclpdy8VsBhyncLFYio",
    authDomain: "clone-6033e.firebaseapp.com",
    databaseURL: "https://clone-6033e.firebaseio.com",
    projectId: "clone-6033e",
    storageBucket: "clone-6033e.appspot.com",
    messagingSenderId: "189143625264",
    appId: "1:189143625264:web:16c0d4168f13ae04a907f5",
    measurementId: "G-FR30NHVQTZ"
});

const auth = firebase.auth();

export {auth};
