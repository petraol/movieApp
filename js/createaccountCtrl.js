movieApp.controller('createaccountCtrl', function ($scope,$routeParams,$cookies) {

	$scope.create = function(name, snack, imageUrl) {
		console.log('hallå?')
		var userId = "1";
		firebase.database().ref('users/' + userId).set({
		    username: name,
		    snack: snack,
		    profile_picture : imageUrl
		  });
	}
});