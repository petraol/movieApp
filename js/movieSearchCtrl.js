movieApp.controller('movieSearchCtrl', function ($scope,Movie,$cookies) {
	$scope.otherpeople = true;

	$scope.search = function(movieQuery) {
		$scope.otherpeople = false;
		Movie.MovieSearch.get({query:movieQuery},

			function(data) {

				$scope.dict = {};

				for (poster in data.results) {
					
					if(data.results[poster].poster_path === null) {
						$scope.dict[data.results[poster].id] = "http://www.dimaria.dk/images/feed/product/filmrulle_s-p.jpg"
						
					} 
					else {
						$scope.dict[data.results[poster].id] = 'https://image.tmdb.org/t/p/w1280' + data.results[poster].poster_path;
						
					}
				}

				$scope.getPoster = function(movie) { 
					
					return $scope.dict[movie];
					
				}

				$scope.searchResults = data.results;
				$scope.currentUser = Movie.getCurrentUser();
				Movie.currentSearch = data.results;
				Movie.removeCurrentMovie();

			},
			function(data) {
				console.log("There was an error");
		});
	}

});
