movieApp.controller('friendspageCtrl', function ($scope,$routeParams,Movie,$cookies,$location,$window) {

	$scope.userName = $routeParams.userName;

		if ($scope.userName === "") {
			$window.location.assign('#!/oops');
		}

	firebase.database().ref('/users/').on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			if (childSnapshot.child("realname").val() === $scope.userName) {
				console.log(childSnapshot.child("realname").val())
				var pic;
				$scope.$evalAsync(function() {

		  			$scope.name = function() {
			  			return childSnapshot.val().realname;
			  		}
			  		$scope.image = function() {
						var profileRef = firebase.database().ref("users/" + childSnapshot.key);
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
									console.log(image_url);
									document.querySelector("#profilepic").src = image_url;

								}).catch(function(error) {
								console.log("error")
								console.log(error.code);
								console.log(error.message);
								});
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
