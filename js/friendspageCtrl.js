movieApp.controller('friendspageCtrl', function ($scope,$routeParams,Movie,$cookies,$location,$window) {

	$scope.friendUsername = $routeParams.realname;
	// Movie.setFriend(user.username);
	// var theFriend = getFriend();

	console.log($scope.friendUsername);

		if (username === "") {
			$window.location.assign('#!/oops');
			console.log(username, "jag är här");
		}
		//
		// firebase.database().ref('/users/').on('value', function(snapshot) {
		// 	console.log(snapshot);
		// 	snapshot.forEach(function(childSnapshot) {
		// 	$scope.friendList.push(childSnapshot.val());
		// 	console.log(childSnapshot.val());
		// });
		// });
		//
		//

		//
		// 			//$scope.namelist.push(childSnapshot.child('realname').val())
		// $scope.list.push(childSnapshot.val());
		// 			//console.log(childSnapshot.val())
		// 			//console.log($scope.list)

		});

	//
	// //var userName = Movie.user;
	// var userName = Movie.getOtherUser();
	// console.log(userName);
	//
	// if (userName == "") {
	// 	$window.location.assign('#!/oops');
	// }
	//
	// console.log("Vid omladdningen var otherUser: " + userName)
	// firebase.database().ref('/users/' + userName).on('value', function(snapshot) {
	//
	//   	$scope.$evalAsync(function() {
	//
	//   		$scope.name = function() {
	// 	  		return snapshot.val().realname;
	// 	  	}
	// 	  	$scope.image = function() {
	// 	  		return snapshot.val().profile_picture;
	// 	  	}
	// 	  	$scope.snack = function() {
	// 	  		return snapshot.val().snack;
	// 	  	}
	//   	});
	// });

	// firebase.database().ref('/movieLists/' + userName + "/movie").on("value", function(snapshot) {
	// 	console.log(snapshot.val());
	// 		}, function (errorObject) {
	// 	console.log("The read failed: " + errorObject.code);
	// 		});

// 	$scope.check = function(id) {
// 		console.log('click')
// 		firebase.database().ref('/movieLists/' + userName + "/movie").once('value', function(snapshot) {
// 			snapshot.forEach(function(childSnapshot) {
// 				var key = childSnapshot.key;
// 				var movieId = parseInt(childSnapshot.child('movie').val());
// 				var movieChecked = childSnapshot.child('checked').val();
// 				var newData = {};
// 				if (id === movieId) {
// 					if (movieChecked === true) {
// 						newData = {
// 						movie: movieId,
// 						checked: false
// 						};
// 					}
// 					else  {
// 						newData = {
// 						movie: movieId,
// 						checked: true
// 						};
// 					}
// 					var update = {}
// 					update['/movieLists/' + userName + '/movie/' + key] = newData;
// 					console.log(newData)
// 					return firebase.database().ref().update(update);
// 				}
// 			});
// 		});
// 	}
//
// 	return firebase.database().ref('/movieLists/' + userName + "/movie").on('value', function(snapshot) {
// 		$scope.list = [];
// 		$scope.dict = {};
// 		console.log(snapshot.val())
// 		snapshot.forEach(function(childSnapshot) {
// 			var movieId = parseInt(childSnapshot.child('movie').val());
// 			var movieChecked = childSnapshot.child('checked').val();
// 			//var movieChecked = true;
// 			console.log("is movie checke", movieChecked)
// 			if (movieChecked === true) {
// 				$scope.dict[movieId] = "color:#595959";
// 			}
// 			else {
// 				$scope.dict[movieId] = "color:white";
// 			}
// 			Movie.getMovie.get({id:movieId},
// 				function(data) {
// 					$scope.list.push(data);
// 				}, function(data) {
// 					console.log('error');
// 			});
// 		});
// 	});
// });
