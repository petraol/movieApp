movieApp.controller('friendsCtrl', function ($scope,$routeParams,Movie,$cookies) {

//$scope.namelist = [];
//$scope.snacklist = [];
$scope.movielist = [];
$scope.userlist = [];
var username = Movie.getCurrentUser();
console.log(username);

	if (username === "") {
		$window.location.assign('#!/oops');
		console.log(username, "jag är här");
	}

	firebase.database().ref('/users/').on('value', function(snapshot) {
	snapshot.forEach(function(childSnapshot) {
				//var user = childSnapshot.child('realname').val()
				//$scope.namelist.push(childSnapshot.child('realname').val())
	$scope.userlist.push(childSnapshot.val());
				//console.log(childSnapshot.val())
				//console.log($scope.list)
				console.log($scope.userlist);
	});
	});

	for (user in $scope.userlist) {
		var theName = $scope.userlist[user].realname
		firebase.database().ref('/movieList/'+theName+'/movie').on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
					//var user = childSnapshot.child('realname').val()
					//$scope.namelist.push(childSnapshot.child('realname').val())
		$scope.movielist.push(childSnapshot.val());
					//console.log(childSnapshot.val())
					//console.log($scope.list)
					console.log($scope.movielist);
	});

	});
	}
});
