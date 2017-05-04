movieApp.controller('profileCtrl', function ($scope,Movie,$cookies,$location,$window) {
	//var userId = firebase.auth().currentUser.uid;
		var username = Movie.getCurrentUser();

		if (username == "") {
			$window.location.assign('#!/oops');
		}

		if ( window.location.href === "http://127.0.0.1:8000/#!/movieList") {
			$("findme").hide();
			
		}

		console.log("Vid omladdningen var currentUser: " + username)
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

		});p
});

