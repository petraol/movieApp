movieApp.controller('friendspageCtrl', function ($scope,$routeParams,Movie,$cookies,$location,$window) {

	$scope.userName = $routeParams.userName;

		if ($scope.userName === "") {
			$window.location.assign('#!/oops');
		}

	firebase.database().ref('/users/').on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			if (childSnapshot.child("realname").val() === $scope.userName) {
				console.log(childSnapshot.child("realname").val())
				$scope.$evalAsync(function() {

		  			$scope.name = function() {
			  			return childSnapshot.val().realname;
			  		}
			  		$scope.image = function() {
			  			return childSnapshot.val().profile_picture;
			   		}
			  		$scope.snack = function() {
			  			return childSnapshot.val().snack;
			  		}
	   			});
			}
	  	});
	});
});
