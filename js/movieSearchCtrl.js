movieApp.controller('movieSearchCtrl', function ($scope,Movie,$cookies) {
	$scope.otherpeople = true;
	
	$scope.search = function(movieQuery) {
		$scope.otherpeople = false;
		Movie.MovieSearch.get({query:movieQuery},
			
			function(data) {

				//$scope.searchPosterResults = data.poster_path;
				for (poster in data.poster_path) {
					
					if(poster === undefined) {
						$scope.poster = "http://www.dimaria.dk/images/feed/product/filmrulle_s-p.jpg"
						console.log($scope.poster)
					} 
					else {
						$scope.poster = data.poster_path;
						console.log($scope.poster)
					}
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
