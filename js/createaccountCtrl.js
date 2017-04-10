movieApp.controller('createaccountCtrl', function ($scope,Movie,$cookies) {

	$scope.create = function(username, password, snack, imageUrl) {
		Movie.currentUser = username;
		firebase.database().ref('users/' + username).set({
		    password: password,
		    snack: snack,
		    profile_picture : imageUrl
		  });
	}
});