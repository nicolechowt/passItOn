import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDcLBmo43lEJbvN1yUBBapazyRaaCF6Qss",
    authDomain: "passiton-194800.firebaseapp.com",
    databaseURL: "https://passiton-194800.firebaseio.com",
    projectId: "passiton-194800",
    storageBucket: "passiton-194800.appspot.com",
    messagingSenderId: "816993721654"
  };

  const fire = firebase.initializeApp(config);

  export default fire;