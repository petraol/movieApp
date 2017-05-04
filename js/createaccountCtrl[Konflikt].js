movieApp.controller('createaccountCtrl', function ($scope,Movie,$cookies,$location,$window,Upload) {
	$scope.usernameerror = false;
	$scope.infoenter = false;
	$scope.image = null;

	$scope.create = function(username, realname, password, snack, imageUrl) {
		console.log($scope);
		console.log("Username: " + username);
		console.log("Realname: " + realname);
		console.log("Password: " + password);
		console.log("Snack: " + snack);
		console.log("Image: " + imageUrl);

		if (username && realname && password && snack && imageUrl) {

		Movie.setCurrentUser(username);

		firebase.database().ref('/users/').on('value', function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				for (value in childSnapshot.W.path.o) {

					if (childSnapshot.W.path.o[value] == "users") {}
					else if (childSnapshot.W.path.o[value] == "undefined") {}
					else {
						Movie.allUsers += childSnapshot.W.path.o[value];
						}
					}
				});

				allUsers = Movie.allUsers;
				Movie.allUsers = "";
				console.log(username);
				console.log(allUsers);

				if (allUsers.includes(username)) {
					console.log("Nu stötte den på ett namn som redan finns i databasen")
					$scope.usernameerror = true;
					$scope.infoenter = false;
					return;
				}

				else {

				try {
				firebase.database().ref('users/' + username).set({
					realname: realname,
				  	password: password,
				  	snack: snack,
				  	profile_picture : imageUrl
				  	});
				console.log("Nu har användaren skapats och vi byter view");
				$window.location.assign('#!/movieSearch');
				}
				catch(err) {
					console.log("Fel under skapandet i databasen")
				}
			}
			});
		}
	else {
		$scope.infoenter = true;
		$scope.usernameerror = false;
		return;
	}
	}
});
