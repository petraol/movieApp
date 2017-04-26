movieApp.controller('movieInfoCtrl', function ($scope,$routeParams,Movie,$cookies,$location,$window) {

	$scope.movieId = Number($routeParams.movieId);
	var currentUser = Movie.getCurrentUser();
	

	if ($scope.currentUser == "") {
		$window.location.assign('#!/oops');
	}

	//$("#heart").show();
	//$("#nopeheart").hide();

	// Check if it's already in the users movielist. If it is, remove the heart-button.
	firebase.database().ref('/movieLists/' + currentUser + "/movie").once('value', function(snapshot) {
		$scope.heart = true;
		$scope.nopeHeart = false;
		snapshot.forEach(function(childSnapshot) {
			var key = childSnapshot.key;
			var movieId = Number(childSnapshot.child('movie').val());

			console.log('the ids', movieId, $scope.movieId)
			if (movieId === $scope.movieId) {	
				$scope.heart = false;
				$scope.nopeHeart = true;
				
				//$("#heart").hide();
				//$("#nopeheart").show();
			}
		});
	});

	console.log($scope.heart)

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

				var html = "<div id='movieInfo'><h2>" + data.title + "</h2></br><div class='col-sm-5'><img src='https://image.tmdb.org/t/p/w1280" + data.poster_path +
				 "' alt='http://i.imgur.com/SSuPNLC.png' height='600px' width='400px'/></div><div class='col-sm-7' style='font-size: 15pt;'><b>Overview: </b>" + data.overview +"</br></br><b>Original Language: </b>"
				 + language +"</br></br><b>Average Rating: </b>"+data.vote_average+"/10 from "+data.vote_count+
				 " voters</br></br></div>"

				document.getElementById('movieInfo').innerHTML = html 
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

			var html = "<div id='movieInfo'><h2>" + movie.title + "</h2></br><div class='col-sm-5'><img src='https://image.tmdb.org/t/p/w1280" + movie.poster_path +
			 "' alt='http://i.imgur.com/SSuPNLC.png' height='600px' width='400px'/></div><div class='col-sm-7' style='font-size: 15pt;'><b>Overview: </b>" + movie.overview +"</br></br><b>Original Language: </b>"
			 + language +"</br></br><b>Average Rating: </b>"+movie.vote_average+"/10 from "+movie.vote_count+
			 " voters</br></br></div>"

			document.getElementById('movieInfo').innerHTML = html 
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
		$scope.heart = false;
		$scope.nopeHeart = true;
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

					$scope.heart = true;
					$scope.nopeHeart = false;
					//$("#nopeheart").hide();
					//$("#heart").show();
					firebase.database().ref('movieLists/' + currentUser + "/movie/" + key).remove();
				}
			});
		});
	}


});