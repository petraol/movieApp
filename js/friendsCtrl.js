movieApp.controller('friendsCtrl', function ($scope,$routeParams,Movie,$cookies) {

	$scope.userlist = [];
	$scope.dictionary = {};
	$scope.username = Movie.getCurrentUser();

	if ($scope.username === "") {
		$window.location.assign('#!/oops');
	}

	firebase.database().ref('/users/').on('value', function(snapshot) {
		$scope.$evalAsync(function() {
			snapshot.forEach(function(childSnapshot) {
				if (childSnapshot.val().realname !== $scope.username) {
					$scope.userlist.push(childSnapshot);
					console.log('userlist:',$scope.userlist)

					var pic;
					//$scope.picarray = [];
					
					for (user in $scope.userlist) {
						var profileRef = firebase.database().ref("users/" + $scope.userlist[user].key);
						profileRef.child("profile_picture").once('value', function(snapshot) {
							pic = snapshot.val();


						});
						var storage = firebase.storage().ref();
						var spaceRef = storage.child('images/' + pic);
						var path = spaceRef.fullPath;
						var name = $scope.userlist[user].val().realname;
						console.log('paths:', path)
						getUrl(path, name);

					}
					function getUrl(path,namn) {
						$scope.$evalAsync(function() {
						storage.child(path).getDownloadURL().then(function(url){
							//$scope.picarray.push([image_url + "," + $scope.userlist[user].key]);
							//var name = $scope.userlist[user].val().realname;
							$scope.dictionary[namn] = url;
							console.log('hör de ihop', namn, url)


						}).catch(function(error) {
						console.log("error")
						console.log(error.code);
						console.log(error.message);
						});
					});
					}

				$scope.getPicture = function(user) {
					//console.log('i getpicture', $scope.dictionary[user.val().realname])
					return $scope.dictionary[user.val().realname];
					}
				}
		});

});
});

	// $scope.getProfilePicture = function(realname) {
	// 	console.log('skiiiiiiiiiit')
	// 							console.log(realname, $scope.dictionary[realname]) 
	// 							return $scope.dictionary[realname];
	// 						} 
});
