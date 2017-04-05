movieApp.controller('movieSearchCtrl', function ($scope,Movie,$cookies) {

	$scope.search = function(movieQuery) {
		Movie.MovieSearch.get({query:movieQuery},
			function(data) {
				console.log(data.results);
				$scope.searchResults = data.results;
			},
			function(data) {
				console.log("There was an error",data);
		});
	}
});