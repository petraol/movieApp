movieApp.controller('friendsCtrl', function ($scope,$routeParams,Movie,$cookies) {

//$scope.namelist = [];
//$scope.snacklist = [];
$scope.myFunction2 = function() {
	    document.getElementById("movieDropdown").classList.toggle("show");
		}

$scope.movielist = [];
$scope.userlist = [];
var username = Movie.getCurrentUser();
console.log(username);

	if (username === "") {
		$window.location.assign('#!/oops');
		console.log(username, "jag är här");
	}

	var the_userlist = firebase.database().ref('/users/').on('value', function(snapshot) {
	snapshot.forEach(function(childSnapshot) {
				//var user = childSnapshot.child('realname').val()
				//$scope.namelist.push(childSnapshot.child('realname').val())
	$scope.userlist.push(childSnapshot.val());
				//console.log(childSnapshot.val())
				//console.log($scope.list)
				console.log($scope.userlist);
	});
	});
$scope.friendMovies = [];
this.friendMovieList = function(username) {
	firebase.database().ref('/movieList/'+username+'/movie').on('value', function(snapshot) {
	snapshot.forEach(function(childSnapshot) {
				//var user = childSnapshot.child('realname').val()
				//$scope.namelist.push(childSnapshot.child('realname').val())
	$scope.movielist.push(childSnapshot.val());
	});
	});
}


});
