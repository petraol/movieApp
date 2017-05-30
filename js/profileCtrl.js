movieApp.controller('profileCtrl', function ($scope,Movie,$cookies,$location,$window) {
	//var userId = firebase.auth().currentUser.uid;
		var username = Movie.getCurrentUser();
		$scope.src = "";

		if (username == "") {
			$window.location.assign('#!/oops');
		}

		if ( window.location.href === "http://127.0.0.1:8000/#!/movieList") {
			$("findme").hide();
		}

		console.log("Vid omladdningen var currentUser: " + username)
		firebase.database().ref('/users/' + username).on('value', function(snapshot) {

	  		$scope.$evalAsync(function() {

				var pic;
				var profileRef = firebase.database().ref("users/" + username);
				profileRef.child("profile_picture").once('value', function(snapshot) {
					pic = snapshot.val();

				});
				var storage = firebase.storage().ref();
				var spaceRef = storage.child('images/' + pic);
				var path = spaceRef.fullPath;

						storage.child(path).getDownloadURL().then(function(url){
							var image_url = url;
							console.log(image_url);
							$scope.$apply($scope.src = image_url);

						}).catch(function(error) {
						console.log("error")
						console.log(error.code);
						console.log(error.message);
						});


	  			$scope.name = function() {
		  			return snapshot.val().realname;
		  		}
				$scope.snack = function() {
		  			return snapshot.val().snack;
		  		}

	  		});

		});
});