movieApp.controller('loginCtrl', function ($scope,Movie,$cookies,$location,$window) {

	$scope.login = function(username, password) {
		return firebase.database().ref('/users/' + username).on('value', function(snapshot) {

		  	if (snapshot.val().password === password) {
		  		Movie.currentUser = username;
		  		Movie.setCurrentUser(username);
		  		Movie.getCurrentUser();
		  		console.log("Passwords match");
		  		$window.location.assign('#!/movieSearch');
		  	}
		  	else {
		  		console.log("Fel lösenord!")
		  	}

		});
		Movie.currentuser = username;
	}
});

