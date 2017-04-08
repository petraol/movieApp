// Get a reference to the database service

var movieBase = new firebase('https://movieapp-b5887.firebaseio.com/');
var userId = 0;

//function writeUserData(userId, name, sanck, imageUrl) {
//  firebase.database().ref('users/' + userId).set({
 //   username: name,
    //snack: snack,
  //  profile_picture : imageUrl
 // });
//}

// Save data to firebase
function savedata(userId, name, snack, imageUrl){

  movieBase.child('users').child(userId).push(
  {
  	name: name, 
  	snack: snack,
  	imageUrl: imageUrl

  });
  
}


savedata(0, "Anton", "Popcorn", "https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/15128952_10207573719443039_6551904099240725029_o.jpg?oh=ba077902a4ab5a8b34365a4370102bc6&oe=596A1CA6")