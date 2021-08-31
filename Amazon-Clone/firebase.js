var firebaseConfig = {
    apiKey: "AIzaSyAUO5wTnQK0gr40a65Rtw9xu3bS_FWx09k",
    authDomain: "clone-2-de64a.firebaseapp.com",
    projectId: "clone-2-de64a",
    storageBucket: "clone-2-de64a.appspot.com",
    messagingSenderId: "505078463779",
    appId: "1:505078463779:web:7f8aefe08c2361bf342096",
    measurementId: "G-HM6DR9D85M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();