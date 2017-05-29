movieApp.controller('movieSearchCtrl', function ($scope,Movie,$cookies) {
	$scope.otherpeople = true;

	$scope.search = function(movieQuery) {
		$scope.otherpeople = false;
		Movie.MovieSearch.get({query:movieQuery},

			function(data) {

				$scope.dict = {};
				console.log(data)
				//$scope.searchPosterResults = data.poster_path;
				//$scope.searchPosterResults = data.poster_path;
				
				
				for (poster in data.results) {
					console.log('skit', poster)
					if(data.results[poster].poster_path === null) {
						$scope.dict[data.results[poster].id] = "http://www.dimaria.dk/images/feed/product/filmrulle_s-p.jpg"
						console.log('reservbild', $scope.poster)
					} 
					else {
						$scope.dict[data.results[poster].id] = 'https://image.tmdb.org/t/p/w1280' + data.results[poster].poster_path;
						console.log('bilden', $scope.poster)
					}
				}

				$scope.getPoster = function(movie) { 
					console.log('funkar jag', $scope.dict[movie])
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

	$scope.drag = function(event) {
		console.log("Startar dragning");
		thingy = [];
		thingy.push(event.target.className);
		thingy.push(event.target.id);
	    event.dataTransfer.setData("Text", thingy);
}

});
