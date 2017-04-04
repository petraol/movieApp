movieApp.controller('profileCtrl', function ($scope,Movie,$cookies) {
	
	$scope.search = function(movieQuery) {
		Movie.MovieSearch(movieQuery, function(results) {
			console.log(results);
			$scope.searchResults = results
			});
	}
	});
