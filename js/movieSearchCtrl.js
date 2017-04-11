movieApp.controller('movieSearchCtrl', function ($scope,Movie,$cookies) {
$('#loading').hide(); // Hiding loading gif
	$scope.search = function(movieQuery) {
		$('#loading').show(); // Showing loading gif
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
		$('#loading').hide(); // Hiding Loading gif. It never show 
	}
});
