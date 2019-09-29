import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCEdT09ZtqIOjko4vZSlMxQanOf20z1v_o",
    authDomain: "wowalaproject.firebaseapp.com",
    databaseURL: "https://wowalaproject.firebaseio.com",
    projectId: "wowalaproject",
    storageBucket: "wowalaproject.appspot.com",
    messagingSenderId: "216922399575",
    appId: "1:216922399575:web:a4a10cd4cbdbe8cb"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire