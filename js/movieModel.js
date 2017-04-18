movieApp.factory('Movie',function ($resource, $cookies) {


this.movies = [];
this.allUsers = []
var currentMovie = {};
var currentSearch = "";
var currentUser = "";
var otherUser = "";

// Hämta annan persons id
this.getOtherUser = function() {
	var otherUser = $cookies.get("otherUser");
	console.log(otherUser);
	return otherUser;
}

this.setOtherUser = function() {
	$scope.otherUserList = [];
	var username = Movie.currentUser;

	if (username == "") {
		$window.location.assign('#!/oops');
	}
		firebase.database().ref('/users/').on('value', function(snapshot) {

			if ('value' =! currentUser.username) {
				$scope.otherUserList += 'value';

				snapshot.forEach(function(childSnapshot) {
				//var user = childSnapshot.child('realname').val()
				
				//$scope.namelist.push(childSnapshot.child('realname').val())
				$scope.list.push(childSnapshot.val())
				//console.log(childSnapshot.val())
				//console.log($scope.list)

			});
			}
			return $scope.otherUserList

		});
});
}

// Sätt nuvarande användare
this.setCurrentUser = function(currentUser) {
	$cookies.put("currentUser", currentUser);
}

// Hämta nuvarande användare
this.getCurrentUser = function() {
	var currentUser = $cookies.get("currentUser");
	return currentUser;
}

// Ta bort nuvarande användare
this.removeCurrentUser = function() {
	$cookies.put("currentUser", "");
}

// Sätt nuvarande användare
this.setCurrentMovie = function(currentMovie) {
	$cookies.put("currentMovie", currentMovie);
}

// Hämta nuvarande användare
this.getCurrentMovie = function() {
	var currentMovie = $cookies.get("currentMovie");
	return currentMovie;
}

// Ta bort nuvarande användare
this.removeCurrentMovie = function() {
	$cookies.put("currentMovie", "");
}


this.MovieSearch = $resource('http://api.themoviedb.org/3/search/movie?api_key=573bb1edb1c5674d09c84f39d01dcf69&query=:query');

//this.MovieSearch = $resource('https://api.themoviedb.org/3/search/movie?api_key=573bb1edb1c5674d09c84f39d01dcf69&query=',{},{
//  get: {}
//});

this.getMovie = $resource('https://api.themoviedb.org/3/movie/:id?api_key=573bb1edb1c5674d09c84f39d01dcf69&language=en-US')

return this;

});
