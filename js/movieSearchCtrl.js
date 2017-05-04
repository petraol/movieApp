movieApp.controller('movieSearchCtrl', function ($scope,Movie,$cookies) {
	$scope.otherpeople = true;
<<<<<<< HEAD

=======
	
>>>>>>> dcea127606dc90c2fb9288100d1f7131e582463f
	$scope.search = function(movieQuery) {
		$scope.otherpeople = false;
		Movie.MovieSearch.get({query:movieQuery},

<<<<<<< HEAD
			function(data) {

				//$scope.searchPosterResults = data.poster_path;
				for (poster in data.poster_path) {

					if(poster === undefined) {
						$scope.poster = "http://www.dimaria.dk/images/feed/product/filmrulle_s-p.jpg"
						console.log($scope.poster)
					}
=======
				//$scope.searchPosterResults = data.poster_path;
				for (poster in data.poster_path) {
					
					if(poster === undefined) {
						$scope.poster = "http://www.dimaria.dk/images/feed/product/filmrulle_s-p.jpg"
						console.log($scope.poster)
					} 
>>>>>>> dcea127606dc90c2fb9288100d1f7131e582463f
					else {
						$scope.poster = data.poster_path;
						console.log($scope.poster)
					}
				}
<<<<<<< HEAD

=======
				
>>>>>>> dcea127606dc90c2fb9288100d1f7131e582463f
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
