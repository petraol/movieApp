movieApp.controller('friendsCtrl', function ($scope,$routeParams,Movie,$cookies) {

//$scope.namelist = [];
//$scope.snacklist = [];
//$scope.imagelist = [];
$scope.list = [];
var username = Movie.getCurrentUser();

	if (username == "") {
		$window.location.assign('#!/oops');
		console.log(username, "jag är här");
	}
		firebase.database().ref('/users/').on('value', function(snapshot) {

			snapshot.forEach(function(childSnapshot) {
				//var user = childSnapshot.child('realname').val()
				
				//$scope.namelist.push(childSnapshot.child('realname').val())
				$scope.list.push(childSnapshot.val());
				//console.log(childSnapshot.val())
				//console.log($scope.list)

			});
		});
});
