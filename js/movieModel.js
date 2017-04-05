movieApp.factory('Movie',function ($resource, $cookies) {


this.movies = [];
var currentMovie = {};

// Hämta alla filmer
this.getAllMovies = function() {

}

// Hämta filmomslag
this.getMoviePosters = function() {

}

// Sök bland filmer
this.searchMovie = function() {

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
this.MovieSearch = function(query, cb) {

    var api_key = '573bb1edb1c5674d09c84f39d01dcf69';

    $(document).ready(function(){
      $.ajax({
        url: 'http://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query=' + query,
        dataType: 'jsonp',
        jsonpCallback: 'testing'
      }).error(function() {
        console.log('error')
      }).done(function(response) {
          cb(response.results);
      });
    });
  

}

//this.MovieSearch = $resource('https://api.themoviedb.org/3/search/movie?api_key=573bb1edb1c5674d09c84f39d01dcf69&query=',{},{
//  get: {}
//});

return this;

});
