import firebase from "firebase";

var config = {
  apikey: "AIzaSyAcNTWikjs4vA0wvuKcngnL7w_lVQ2zTP8",
  authDomain: "cropcat-73da0",
  databaseURL: "https://cropcat-73da0.firebaseio.com",
  projectId: "cropcat-73da0",
  storageBucket: "cropcat-73da0.appspot.com",
  messagingSenderId: "379408164132"
};

firebase.initializeApp(config);

export default {
  database: firebase.database()
};
