movieApp.controller('createaccountCtrl', function ($scope,$routeParams,$cookies) {

	$scope.create = function(username, password, snack, imageUrl) {
		firebase.database().ref('users/' + username).set({
		    password: password,
		    snack: snack,
		    profile_picture : imageUrl
		  });
	}
});