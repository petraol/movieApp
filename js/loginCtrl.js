movieApp.controller('loginCtrl', function ($scope,Movie,$cookies,$location,$window) {

	$scope.loginerror = false;
	$scope.usererror = false;

	$scope.fetchinfo = function(username, password) {
		firebase.database().ref('/users/' + username).on('value', function(snapshot) {
			if (snapshot.val() != null) {
				$scope.login(username, snapshot.val().password, password);
				}
			else {
				$scope.$apply($scope.usererror = true);
			}
		});
	}

	$scope.login = function(username, dbpassword, password) {

				if (dbpassword === password) {
			  		Movie.currentUser = username;
			  		Movie.setCurrentUser(username);
			  		Movie.getCurrentUser();
			  		console.log("Passwords match");
			  		$window.location.assign('#!/movieSearch');
			  	}
			  	else {
			  		$scope.$apply($scope.loginerror = true);
			  		console.log($scope.loginerror);
			  		console.log("Fel lösenord eller användarnamn!")
			  	}
			
		Movie.currentuser = username;
	}
});
