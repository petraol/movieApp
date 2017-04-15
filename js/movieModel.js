movieApp.factory('Movie',function ($resource, $cookies) {


this.movies = [];
var currentMovie = {};
var currentSearch = "";
var currentUser = "";
var otherUser = "";

// Hämta annan persons id
this.getOtherUser = function() {
	var otherUser = $cookies.get("otherUser");
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

// this.createNewUser = function(id, name, snack, imageUrl) {
// 	$resource.writeUserData(id, name, snack, imageUrl);
// }

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

// Tar bort film från listan
this.removeMovieFromList = function(id) {
//  this.newMovies = [];
//  for (element in this.movies) {
//    var theMovie = this.movies[element];
//    if (theMovie != id) {
//     this.newMovies.push(theMovie);
//    }
//  }
//  this.movies = this.newMovies;
}

// Betygsätt film
// this.MovieSearch = function(query, cb) {

//     var api_key = '573bb1edb1c5674d09c84f39d01dcf69';

//     $(document).ready(function(){
//       $.ajax({
//         url: 'http://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query=' + query,
//         dataType: 'jsonp',
//         jsonpCallback: 'testing'
//       }).error(function() {
//         console.log('error')
//       }).done(function(response) {
//           cb(response.results);
//       });
//     });
  

// }

this.MovieSearch = $resource('http://api.themoviedb.org/3/search/movie?api_key=573bb1edb1c5674d09c84f39d01dcf69&query=:query');

//this.MovieSearch = $resource('https://api.themoviedb.org/3/search/movie?api_key=573bb1edb1c5674d09c84f39d01dcf69&query=',{},{
//  get: {}
//});

this.getMovie = $resource('https://api.themoviedb.org/3/movie/:id?api_key=573bb1edb1c5674d09c84f39d01dcf69&language=en-US')

return this;

});
