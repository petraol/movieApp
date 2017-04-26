movieApp.controller('movieSearchCtrl', function ($scope,Movie,$cookies) {
$('#loading').hide(); // Hiding loading gif
	$scope.search = function(movieQuery) {
		Movie.MovieSearch.get({query:movieQuery},
			
			function(data) {


				$scope.searchPosterResults = data.results;
				console.log(data.results)
				for (poster in data.results.post_path) {
					console.log(poster)
					if($scope.searchPosterResults === undefined) {
						$scope.searchPosterResults = "http://www.dimaria.dk/images/feed/product/filmrulle_s-p.jpg"
					} 
					else {
						$scope.searchPosterResults = data.results;
	   				 // Object is NOT empty
					}
				}
				
				//$scope.searchResults = data.results;
				$scope.currentUser = Movie.getCurrentUser();
				Movie.currentSearch = data.results;
				Movie.removeCurrentMovie();

			},
			function(data) {
				console.log("There was an error");
		});
	}

});
