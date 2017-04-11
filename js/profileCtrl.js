movieApp.controller('profileCtrl', function ($scope,Movie,$cookies) {
	//var userId = firebase.auth().currentUser.uid;
		var username = Movie.getCurrentUser();
		firebase.database().ref('/users/' + username).on('value', function(snapshot) {

	  		$scope.$evalAsync(function() {

	  			$scope.name = function() {
		  			return snapshot.val().realname;
		  		}
		  		$scope.image = function() {
		  			return snapshot.val().profile_picture;
		  		}
		  		$scope.snack = function() {
		  			return snapshot.val().snack;
		  		}
	  		});

		});
});

