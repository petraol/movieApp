movieApp.controller('friendsCtrl', function ($scope,$routeParams,Movie,$cookies) {

	$scope.userlist = [];
	$scope.username = Movie.getCurrentUser();

	if ($scope.username === "") {
		$window.location.assign('#!/oops');
	}

	return firebase.database().ref('/users/').on('value', function(snapshot) {
		$scope.$evalAsync(function() {
			snapshot.forEach(function(childSnapshot) {
				if (childSnapshot.val().realname !== $scope.username) {
					$scope.userlist.push(childSnapshot.val());

					var pic;
										$scope.image = function() {
											console.log("Vi är i image");
											var profileRef = firebase.database().ref("users/" + childSnapshot.key);
											profileRef.child("profile_picture").once('value', function(snapshot) {
												pic = snapshot.val();
												//var path = snapshot.fullPath;
												//console.log(path);
											});
											console.log(pic);
											var storage = firebase.storage().ref();
											var spaceRef = storage.child('images/' + pic);
											console.log(spaceRef);
											var path = spaceRef.fullPath;
											console.log(path);
										//	console.log(profileRef.val());
											//var profileRef = root.(username.profile_picture);

													storage.child(path).getDownloadURL().then(function(url){
														var image_url = url;
														console.log(image_url);
														document.querySelector("#friend_pic").src = image_url;

													}).catch(function(error) {
													console.log("error")
													console.log(error.code);
													console.log(error.message);
													});
											}

				//	$scope.userlist.push();

			}
		});

});
});
});
