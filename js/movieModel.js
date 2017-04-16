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
	$cookies.put("otherUser", otherUser);
}


// Hämta alla filmer
this.setCurrentUser = function(currentUser) {
	$cookies.put("currentUser", currentUser);
}

// Hämta filmomslag
this.getCurrentUser = function() {
	var currentUser = $cookies.get("currentUser");
	return currentUser;
}

this.removeCurrentUser = function() {
	$cookies.put("currentUser", "");
}

// Lägg till film i lista
this.getAllRegisteredUsers = function() {
	// firebase.database().ref('/users/').on('value', function(snapshot) {
	// 	snapshot.forEach(function(childSnapshot) {
	// 		for (value in childSnapshot.W.path.o) {
	// 			console.log(childSnapshot.W.path.o[value]);
	// 			this.allUsers.append(childSnapshot.W.path.o[value]);

}

this.MovieSearch = $resource('http://api.themoviedb.org/3/search/movie?api_key=573bb1edb1c5674d09c84f39d01dcf69&query=:query');

//this.MovieSearch = $resource('https://api.themoviedb.org/3/search/movie?api_key=573bb1edb1c5674d09c84f39d01dcf69&query=',{},{
//  get: {}
//});

this.getMovie = $resource('https://api.themoviedb.org/3/movie/:id?api_key=573bb1edb1c5674d09c84f39d01dcf69&language=en-US')

return this;

});
