movieApp.controller('createaccountCtrl', function ($scope,$routeParams,$cookies) {

	$scope.create = function(name, password, snack, imageUrl) {
		console.log('hallå?')
		$scope.userId = Math.floor(Math.random()*(100-0+1)+0);
		firebase.database().ref('users/' + userId).set({
		    username: name,
		    password: password,
		    snack: snack,
		    profile_picture : imageUrl
		  });
	}
});