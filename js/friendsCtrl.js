movieApp.controller('friendsCtrl', function ($scope,$routeParams,$cookies) {

	var username = firebase
	firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  	var username = snapshot.val().username;
  // ...
});
});
