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

//function writeUserData(userId, name, sanck, imageUrl) {
//  firebase.database().ref('users/' + userId).set({
 //   username: name,
    //snack: snack,
  //  profile_picture : imageUrl
 // });
//}

function writeUserData(userId, name, snack, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    snack: snack,
    profile_picture : imageUrl
  });
}

//writeUserData(0, "Anton", "Popcorn", "https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/15128952_10207573719443039_6551904099240725029_o.jpg?oh=ba077902a4ab5a8b34365a4370102bc6&oe=596A1CA6");