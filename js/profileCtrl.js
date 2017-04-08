movieApp.controller('profileCtrl', function ($scope,Movie,$cookies) {

	//var userId = firebase.auth().currentUser.uid;
	var userId = 0;
	return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  		var username = snapshot.val().username;
  
});

});
