movieApp.factory('Movie',function ($resource, $cookies) {


this.movies = [];
var currentMovie = {};
var currentSearch = "";
var currentUser = "";

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
this.addMovieToList = function(id) {
//    this.movies.push(this.currentMovie;
//    console.log(this.movie);
//    var idString = ""
//    for (element in this.movies) {
//      idString += this.movies[element].id + "_"
//    };
//    console.log(idString);
//    var newString = ""
//    newString = idString.split("_");
//    $cookies.put('movies', newString);
}

this.MovieSearch = $resource('http://api.themoviedb.org/3/search/movie?api_key=573bb1edb1c5674d09c84f39d01dcf69&query=:query');

//this.MovieSearch = $resource('https://api.themoviedb.org/3/search/movie?api_key=573bb1edb1c5674d09c84f39d01dcf69&query=',{},{
//  get: {}
//});

this.getMovie = $resource('https://api.themoviedb.org/3/movie/:id?api_key=573bb1edb1c5674d09c84f39d01dcf69&language=en-US')

return this;

});
