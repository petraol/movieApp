movieApp.controller('movieSearchCtrl', function ($scope,Movie,$cookies) {
	$scope.otherpeople = true;

	$scope.search = function(movieQuery) {
		$scope.otherpeople = false;
		Movie.MovieSearch.get({query:movieQuery},

			function(data) {
				//$scope.searchMovieObject = data.poster_path;
				$scope.searchMovieObject = data.results;

				for (elements in $scope.searchMovieObject) {
					$scope.singelMovieObject = $scope.searchMovieObject[Object.keys($scope.searchMovieObject)[elements]]

					for (element in $scope.singelMovieObject) {

						if ($scope.singelMovieObject[Object.keys($scope.singelMovieObject)[0]] === null) {
							$scope.singelMovieObject[Object.keys($scope.singelMovieObject)[0]] = "http://www.newportrams.com/photos/Images/movie%20camera.jpg"
							break
							}
						else {
							$scope.singelMovieObject[Object.keys($scope.singelMovieObject)[0]] = "https://image.tmdb.org/t/p/w1280"+$scope.singelMovieObject[Object.keys($scope.singelMovieObject)[0]];
							break
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

	$scope.drag = function(event) {
		console.log("Startar dragning");
		thingy = [];
		thingy.push(event.target.className);
		thingy.push(event.target.id);
	    event.dataTransfer.setData("Text", thingy);
}

});
