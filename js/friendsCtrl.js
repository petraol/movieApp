movieApp.controller('friendsCtrl', function ($scope,$routeParams,Movie,$cookies) {

$scope.userlist = [];
$scope.username = Movie.getCurrentUser();


	if ($scope.username === "") {
		$window.location.assign('#!/oops');
	}

	return firebase.database().ref('users/').on('value', function(snapshot) {
		//$scope.userlist = [];
		snapshot.forEach(function(childSnapshot) {
			if (childSnapshot.val().realname !== $scope.username) {
				$scope.userlist.push(childSnapshot.val());
			}
		console.log($scope.userlist)
				
		});
	});	

});
