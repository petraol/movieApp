movieApp.controller('movieSearchCtrl', function ($scope,Movie,$cookies) {
$('#loading').hide(); // Hiding loading gif
	$scope.search = function(movieQuery) {
		$scope.otherpeople = false;
		Movie.MovieSearch.get({query:movieQuery},
			
			function(data) {

				$scope.searchPosterResults = data.results;
					for (elements in $scope.searchPosterResults) {
						$scope.searchPosterPathResults = $scope.searchPosterResults[Object.keys($scope.searchPosterResults)[elements]]

						for (element in $scope.searchPosterPathResults) {

							if ($scope.searchPosterPathResults[Object.keys($scope.searchPosterPathResults)[0]] === null) {
								console.log('Bilden hittades inte');
								$scope.searchPosterPathResults[Object.keys($scope.searchPosterPathResults)[0]] = "http://www.newportrams.com/photos/Images/movie%20camera.jpg"
							}
							else {
								$scope.searchPosterPathElementResults = $scope.searchPosterPathResults[Object.keys($scope.searchPosterPathResults)[0]];
								console.log($scope.searchPosterPathElementResults);
						}
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
