movieApp.controller('createaccountCtrl', function ($scope,Movie,$cookies,$location,$window) {

	$scope.create = function(username, realname, password, snack, imageUrl) {

		Movie.currentUser = username;

		firebase.database().ref('/users/').on('value', function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				for (value in childSnapshot.W.path.o) {
					console.log(childSnapshot.W.path.o[value]);
					if (username == childSnapshot.W.path.o[value]) {
						$("#usernameerror").show();
						$("#infoenter").hide();
						console.log("Inloggning avbruten");
					}
					else {
						if (username || realname || password || snack || imageUrl == null) {
							$("#infoenter").show();
							$("#usernameerror").hide();
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
					};
				}
			});
		});
	}
});