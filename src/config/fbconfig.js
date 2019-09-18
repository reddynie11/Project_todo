import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBiY0WAipw2Q5ULqUB94v1kbheSUeAvuRQ",
    authDomain: "jotpad-88d91.firebaseapp.com",
    databaseURL: "https://jotpad-88d91.firebaseio.com",
    projectId: "jotpad-88d91",
    storageBucket: "",
    messagingSenderId: "31442475394",
    appId: "1:31442475394:web:508fe5123878f93c2bd79b"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots : true});

  export default firebase;
