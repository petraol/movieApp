movieApp.controller('movieSearchCtrl', function ($scope,Movie,$cookies) {
	
	// $scope.setCurrentMovie = function(currentMovie) {
	// 	console.log(currentMovie);
	// 	Movie.currentMovie = currentMovie;
	// }

	$scope.search = function(movieQuery) {
		Movie.MovieSearch(movieQuery, function(results) {
			titlelist = [];
			console.log(results);
			$scope.searchResults = results;
			// for (obj in results) {
			// 	titlelist += ("<a ng-href='#!/movieInfo' ng-click='setCurrentMovie("tjosanhejsan")'><div class='col-sm-4' style='margin:10px; margin-bottom:20px; text-align:center'><img height='300' width='200' src='https://image.tmdb.org/t/p/w1280" 
			// 		+ results[obj].poster_path +"'/></br><h3>" + results[obj].title + "</h3></div></a>");
			// }

			// document.getElementById('movies').innerHTML = titlelist;
			//});
		});
	}
});