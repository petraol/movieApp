movieApp.controller('friendsCtrl', function ($scope,$routeParams,Movie,$cookies) {

$scope.namelist = [];
$scope.snacklist = [];
$scope.imagelist = [];
var username = Movie.currentUser;
		firebase.database().ref('/users/').on('value', function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				//var user = childSnapshot.child('realname').val()
				
				$scope.namelist.push(childSnapshot.child('realname').val())
				//console.log(childSnapshot.child('realname').val())
				$scope.snacklist.push(childSnapshot.child('snack').val())
				//console.log(childSnapshot.child('snack').val())
				$scope.imagelist.push(childSnapshot.child('profile_picture').val())
				//console.log(childSnapshot.child('profile_picture').val())
				//console.log($scope.namelist)
				//console.log($scope.snacklist)
				//console.log($scope.imagelist)

			});

		});
});
