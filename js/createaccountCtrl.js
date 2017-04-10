movieApp.controller('createaccountCtrl', function ($scope,Movie,$cookies) {

	$scope.create = function(username, realname, password, snack, imageUrl) {
		Movie.currentUser = username;
		firebase.database().ref('users/' + username).set({
			realname: realname,
		    password: password,
		    snack: snack,
		    profile_picture : imageUrl
		  });
	}
});