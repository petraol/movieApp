movieApp.controller('movieSearchCtrl', function ($scope,Movie,$cookies) {
$('#loading').hide(); // Hiding loading gif
	$scope.search = function(movieQuery) {
		Movie.MovieSearch.get({query:movieQuery},
			function(data) {
				console.log("Här är data.result");
				console.log(data.results);
				$scope.searchResults = data.results;
				Movie.currentSearch = data.results;

			},
			function(data) {
				console.log("There was an error");
		});
	}

});
