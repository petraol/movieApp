// Get a reference to the database service

  // Set the configuration for your app
  // TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyC2IqIQPw56-1VIJ8F5KqgzG8NdEY1W7BY",
  authDomain: "movieapp-b5887.firebaseapp.com",
  databaseURL: "https://movieapp-b5887.firebaseio.com/",
  storageBucket: "gs://movieapp-b5887.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
var database = firebase.database();
