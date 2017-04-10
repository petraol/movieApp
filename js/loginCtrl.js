movieApp.controller('loginCtrl', function ($scope,Movie,$cookies,$location) {

	$scope.login = function(username, password) {
		return firebase.database().ref('/users/' + username).on('value', function(snapshot) {
		  	
		  	console.log(snapshot.val().password);
		  	console.log(password);
		  	if (snapshot.val().password === password) {
		  		$location.url('#!/movieSearch')
		  	}
		  	else {
		  		return False;
		  	}

		});
		Movie.currentuser = username;
	}
});

