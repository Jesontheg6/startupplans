import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCwl-QBpQcKmzFdKln9Rnj3IbXGL8W-QOY",
    authDomain: "startupplan-6d82f.firebaseapp.com",
    databaseURL: "https://startupplan-6d82f.firebaseio.com",
    projectId: "startupplan-6d82f",
    storageBucket: "startupplan-6d82f.appspot.com",
    messagingSenderId: "243138866"
  };
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 