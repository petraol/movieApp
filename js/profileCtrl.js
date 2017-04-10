movieApp.controller('profileCtrl', function ($scope,Movie,$cookies) {
	//var userId = firebase.auth().currentUser.uid;
		var username = Movie.currentUser;
		return firebase.database().ref('/users/' + username).on('value', function(snapshot) {
			console.log("skit", snapshot.val());

	  		$scope.$apply( function(){
	  			$scope.name = function() {
		  			return snapshot.val().username;
		  		}
		  		$scope.image = function() {
		  			console.log("bilden", snapshot.val().profile_picture)
		  			return snapshot.val().profile_picture;
		  		}
		  		$scope.snack = function() {
		  			return snapshot.val().snack;
		  		}
	  		});

		});
});

