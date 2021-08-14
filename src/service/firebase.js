import firebase from 'firebase';  
  

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_DB_URL,
    databaseURL: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: "business-card-maker-768ea.appspot.com",
    // messagingSenderId: "871676080405",
    // appId: "1:871676080405:web:61d8fbbca89c7ad0eaf91c",
    // measurementId: "G-BPXJM2DL20"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  export default firebaseApp;