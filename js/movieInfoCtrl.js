movieApp.controller('movieInfoCtrl', function ($scope,$routeParams,Movie,$cookies) {

	$scope.movieId = Number($routeParams.movieId);
	var currentUser = Movie.getCurrentUser();

	if ($scope.currentUser == "") {
		$window.location.assign('#!/oops');
	}

	//Om vi har en film sparad i cookien, gör en API-sökning efter den filmen och skriv ut detaljerna.
	if (Movie.getCurrentMovie()) {

		var movieId = Movie.getCurrentMovie();
		movieId = parseInt(movieId);

		Movie.getMovie.get({id:movieId}, 
			function(data) {
				var html = "<div id='movieInfo'><h2>" + data.title + "</h2></br><div class='col-sm-5'><img src='https://image.tmdb.org/t/p/w1280" + data.poster_path +
				 "' alt='http://i.imgur.com/SSuPNLC.png' height='600px' width='400px'/></div><div class='col-sm-7' style='font-size: 15pt;'><b>Overview: </b>" + data.overview +"</br></br><b>Original Language: </b>"
				 + data.original_language +"</br></br><b>Average Grade: </b>"+data.vote_average+"/10 from "+data.vote_count+
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

			var html = "<div id='movieInfo'><h2>" + movie.title + "</h2></br><div class='col-sm-5'><img src='https://image.tmdb.org/t/p/w1280" + movie.poster_path +
			 "' alt='http://i.imgur.com/SSuPNLC.png' height='600px' width='400px'/></div><div class='col-sm-7' style='font-size: 15pt;'><b>Overview: </b>" + movie.overview +"</br></br><b>Original Language: </b>"
			 + movie.original_language +"</br></br><b>Average Grade: </b>"+movie.vote_average+"/10 from "+movie.vote_count+
			 " voters</br></br></div>"

			document.getElementById('movieInfo').innerHTML = html 
		}
	}
	}


	$scope.add = function() {
		console.log('added movie to database')
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
					firebase.database().ref('movieLists/' + currentUser + "/movie/" + key).remove();
				}
			});
		});
	}


});