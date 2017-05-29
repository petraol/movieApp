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
					}
					// var pic;
					
					// var length = $scope.userlist.length;

					// for (user = 0; user < length; user++) {
					// 	var profileRef = firebase.database().ref("users/" + $scope.userlist[user].key);
					// 	profileRef.child("profile_picture").once('value', function(snapshot) {
					// 		pic = snapshot.val();
					// 	});
					// 	var storage = firebase.storage().ref();
					// 	var spaceRef = storage.child('images/' + pic);
					// 	var path = spaceRef.fullPath;
					// 	var name = $scope.userlist[user].val().realname;
					// 	getUrl(path, name);

					// }
					// function getUrl(path,namn) {
					// 	storage.child(path).getDownloadURL().then(function(url){
					// 		//$scope.picarray.push([image_url + "," + $scope.userlist[user].key]);
					// 		//var name = $scope.userlist[user].val().realname;
					// 		$scope.dictionary[namn] = url;


					// 	}).catch(function(error) {
					// 	console.log("error")
					// 	console.log(error.code);
					// 	console.log(error.message);
					// 	});
					// }


				
		});

});

});
					// $scope.getPicture = function(user) {
					// if ($scope.dictionary[user.val().realname] === undefined) {
					// 	setTimeout(function() {console.log('bajs')}, 3000)
					// }
					// console.log($scope.dictionary[user.val().realname]);
					// //console.log('i getpicture', $scope.dictionary[user.val().realname])
					// //setTimeout(function() {console.log('bajs')}, 3000);
					// return $scope.dictionary[user.val().realname];
					// }

					$scope.userName = function(user) {
						return user.val().realname;
					}
});
