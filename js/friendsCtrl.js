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
					$scope.userlist.push(childSnapshot);

					var pic;

							$scope.image = function() {
								$scope.picarray = [];
								for (user in $scope.userlist) {
									var profileRef = firebase.database().ref("users/" + $scope.userlist[user].key);
									profileRef.child("profile_picture").once('value', function(snapshot) {
										pic = snapshot.val();

			
									});
									var storage = firebase.storage().ref();
									var spaceRef = storage.child('images/' + pic);
									var path = spaceRef.fullPath;


									storage.child(path).getDownloadURL().then(function(url){
										var image_url = url;
										console.log("Här är imageURL: " + image_url);
										var found = $scope.picarray.includes(image_url);
										console.log(found);
										if (found === false) {
											$scope.picarray.push(image_url);
										}
										else {
											console.log("Den fanns redan, satan");
										}

									console.log($scope.picarray);
									for (image in $scope.picarray) {
										document.querySelector(".profilepic").src = $scope.picarray[image];
									}


									}).catch(function(error) {
									console.log("error")
									console.log(error.code);
									console.log(error.message);
									});
						}
					}
				}
		});

});

});
});
