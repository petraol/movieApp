movieApp.controller('loginCtrl', function ($scope,Movie,$cookies) {

	function writeUserData(userId, name, password, snack, imageUrl) {
	  firebase.database().ref('users/' + username).set({
	    password: password,
	    snack: snack,
	    profile_picture : imageUrl
	  });
	}

	$scope.login = function(id) {
		Movie.user = id;
	}
});

