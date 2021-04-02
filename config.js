import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCgVJRcda93rrL3AuA-Q4f2MJkvOEUutMI",
    authDomain: "story-hub-665a1.firebaseapp.com",
    projectId: "story-hub-665a1",
    storageBucket: "story-hub-665a1.appspot.com",
    messagingSenderId: "194639784486",
    appId: "1:194639784486:web:83d328014de4f37c4a54e7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()