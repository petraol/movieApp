movieApp.controller('createaccountCtrl', function ($scope,Movie,$cookies,$location,$window) {

	$scope.create = function(username, realname, password, snack, imageUrl) {

		if (username == null || password == null || realname == null || snack == null || imageUrl == null) {
			$("#infoenter").show();
			$("#usernameerror").hide();
			return;
		}

		Movie.setCurrentUser(username);

		firebase.database().ref('/users/').on('value', function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				for (value in childSnapshot.W.path.o) {

					if (childSnapshot.W.path.o[value] == "users") {}
					else {Movie.allUsers += childSnapshot.W.path.o[value];}

					}
				});
				
				allUsers = Movie.allUsers;

				if (allUsers.includes(username)) {
					$("#infoenter").hide();
					$("#usernameerror").show();
				}

				else {
				firebase.database().ref('users/' + username).set({
					realname: realname,
				  password: password,
				  snack: snack,
				  profile_picture : imageUrl
				  });
				console.log("Nu har användaren skapats och vi byter view");
				$window.location.assign('#!/movieSearch');
				}
		});
	}
});
