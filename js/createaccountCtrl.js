movieApp.controller('createaccountCtrl', function ($scope,$routeParams,$cookies) {

	$scope.create = function(name, snack, imageUrl) {
		console.log('hallå?')
		var userId = Math.floor(Math.random()*(100-0+1)+0);
		firebase.database().ref('users/' + userId).set({
		    username: name,
		    snack: snack,
		    profile_picture : imageUrl
		  });
	}
});