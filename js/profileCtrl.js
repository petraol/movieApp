movieApp.controller('profileCtrl', function ($scope,Movie,$cookies,$location,$window) {
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
				var pic;
					$scope.image = function() {
						var profileRef = firebase.database().ref("users/" + username);
						profileRef.child("profile_picture").once('value', function(snapshot) {
							pic = snapshot.val();
							//var path = snapshot.fullPath;
							//console.log(path);
						});
						var storage = firebase.storage().ref();
						var spaceRef = storage.child('images/' + pic);
						var path = spaceRef.fullPath;

							storage.child(path).getDownloadURL().then(function(url){
								var image_url = url;
								$scope.$apply($scope.src = image_url);

								}).catch(function(error) {
								console.log("error")
								console.log(error.code);
								console.log(error.message);
								});

						}

					$scope.snack = function() {
		  			return snapshot.val().snack;
		  		}

	  		});

		});
});



/*
		  		$scope.image = function() {
		  			var storage = firebase.storage();
						var pathReference = storage.ref('images/');
						var varurl = pathReference.child('Branschdagenporträtt-2016liten.png').getDownloadURL().then(function(url) {
							dostuff(url)
							});
						var dostuff = function(url) {
							console.log(url);
							$scope.image = url;
						}
		  		} */