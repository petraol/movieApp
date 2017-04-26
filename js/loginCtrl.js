movieApp.controller('loginCtrl', function ($scope,Movie,$cookies,$location,$window) {

	$scope.loginerror = false;

	$scope.login = function(username, password) {
		return firebase.database().ref('/users/' + username).on('value', function(snapshot) {

			if (snapshot.val() == null) {
				console.log("Fel lösenord eller användarnamn!")
				$scope.loginerror = true;
			}

			else {

				if (snapshot.val().password === password) {
			  		Movie.currentUser = username;
			  		Movie.setCurrentUser(username);
			  		Movie.getCurrentUser();
			  		console.log("Passwords match");
			  		$window.location.assign('#!/movieSearch');
			  	}
			  	else {
			  		$scope.loginerror = true;
			  		console.log("Fel lösenord eller användarnamn!")
			  	}
			  }
			
		});
		Movie.currentuser = username;
	}
});
