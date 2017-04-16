movieApp.controller('movieSearchCtrl', function ($scope,Movie,$cookies) {
$('#loading').hide(); // Hiding loading gif
	$scope.search = function(movieQuery) {
		Movie.MovieSearch.get({query:movieQuery},
			function(data) {
				$scope.searchResults = data.results;
				Movie.currentSearch = data.results;
				Movie.removeCurrentMovie();

			},
			function(data) {
				console.log("There was an error");
		});
	}

});
