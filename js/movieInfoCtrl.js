movieApp.controller('movieInfoCtrl', function ($scope,$routeParams,Movie,$cookies,$location,$window) {

	$scope.movieId = Number($routeParams.movieId);
	var currentUser = Movie.getCurrentUser();


	if ($scope.currentUser == "") {
		$window.location.assign('#!/oops');
	}

	// Check if it's already in the users movielist. If it is, remove the heart-button.
	firebase.database().ref('/movieLists/' + currentUser + "/movie").once('value', function(snapshot) {
		$scope.heart = true;
		$scope.nopeHeart = false;
		snapshot.forEach(function(childSnapshot) {
			var key = childSnapshot.key;
			var movieId = Number(childSnapshot.child('movie').val());
			$scope.$evalAsync(function() {
				console.log('the ids', movieId, $scope.movieId)
				if (movieId === $scope.movieId) {
					$scope.heart = false;
					$scope.nopeHeart = true;
				}
			});
		});
	});

	//Om vi har en film sparad i cookien, gör en API-sökning efter den filmen och skriv ut detaljerna.
	if (Movie.getCurrentMovie()) {

		var movieId = Movie.getCurrentMovie();
		movieId = parseInt(movieId);

		Movie.getMovie.get({id:$scope.movieId},
			function(data) {
				if (data.original_language === "en") {
					language = "English"
				}
				else if (data.original_language === "sv") {
					language = "Swedish"
				}
				else {
					language = data.original_language;
				}

				$scope.title = data.title;
				$scope.poster = 'https://image.tmdb.org/t/p/w1280' + data.poster_path;
				$scope.overview = data.overview;
				$scope.language = language;
				$scope.vote_average = data.vote_average;
				$scope.vote_count = data.vote_count;

			}, function(data) {
				console.log('error');
			});
	}

	//Om vi inte har en film sparad i cookien, leta istället i sökningen vi nyss gjorde och plocka ut den därifrån
	else {
	for (movie in Movie.currentSearch) {
		//console.log(Movie.currentSearch[movie].id);
		//console.log($scope.movieId);
		if (Movie.currentSearch[movie].id === $scope.movieId) {
			console.log("Här är filmen vi tryckte på:");
			console.log(Movie.currentSearch[movie]);
			Movie.currentMovie = Movie.currentSearch[movie];

			Movie.setCurrentMovie(Movie.currentMovie.id);
			//console.log('Cookien satt till ' + Movie.getCurrentMovie());

			var movie = Movie.currentMovie;

			if (movie.original_language === "en") {
					language = "English"
				}
				else if (movie.original_language === "sv") {
					language = "Swedish"
				}
				else {
					language = data.original_language;
				}

				$scope.title = movie.title;
				$scope.poster = movie.poster_path;
				$scope.overview = movie.overview;
				$scope.language = language;
				$scope.vote_average = movie.vote_average;
				$scope.vote_count = movie.vote_count;
		}
	}
	}


	$scope.add = function() {
		//Fixa så man inte kan lägga in dubletter!!
		firebase.database().ref('/movieLists/' + currentUser + "/movie").once('value', function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				var key = childSnapshot.key;
				var movieId = parseInt(childSnapshot.child('movie').val());
				if ($scope.movieId === movieId) {
					console.log('already in list! Removing dublette');
					firebase.database().ref('movieLists/' + currentUser + "/movie/" + key).remove();
					//return;
				}
			});
		});
		console.log('added movie to database')
		$scope.$evalAsync(function() {
			$scope.heart = false;
			$scope.nopeHeart = true;
		});
		firebase.database().ref('movieLists/' + currentUser + "/movie").push().set({
			movie: $scope.movieId,
			checked: false
		})
	}

	$scope.delete = function() {
		firebase.database().ref('/movieLists/' + currentUser + "/movie").once('value', function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				var key = childSnapshot.key;
				var movieId = parseInt(childSnapshot.child('movie').val());
				if ($scope.movieId === movieId) {
					console.log('removing key:', key, 'with id', movieId)
					$scope.$evalAsync(function() {
						$scope.heart = true;
						$scope.nopeHeart = false;
					});
					//$("#nopeheart").hide();
					//$("#heart").show();
					firebase.database().ref('movieLists/' + currentUser + "/movie/" + key).remove();
				}
			});
		});
	}


});
