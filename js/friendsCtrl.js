movieApp.controller('friendsCtrl', function ($scope,$routeParams,Movie,$cookies) {

	$scope.userlist = [];
	$scope.dictionary = {};
	
	$scope.username = Movie.getCurrentUser();

	if ($scope.username === "") {
		$window.location.assign('#!/oops');
	}

	firebase.database().ref('/users/').on('value', function(snapshot) {
		$scope.$evalAsync(function() {
			snapshot.forEach(function(childSnapshot) {
				if (childSnapshot.val().realname !== $scope.username) {
					$scope.userlist.push(childSnapshot);
					}
				});
		});
	});

	$scope.userName = function(user) {
		return user.val().realname;
	}
});
