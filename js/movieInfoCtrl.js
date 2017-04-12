movieApp.controller('movieInfoCtrl', function ($scope,$routeParams,Movie,$cookies) {

	$scope.movieId = Number($routeParams.movieId);
	$scope.currentUser = Movie.getCurrentUser();

	for (movie in Movie.currentSearch) {
		//console.log(Movie.currentSearch[movie].id);
		//console.log($scope.movieId);
		if (Movie.currentSearch[movie].id === $scope.movieId) {
			console.log("Här är filmen vi tryckte på");
			console.log(Movie.currentSearch[movie]);
			Movie.currentMovie = Movie.currentSearch[movie];

			var movie = Movie.currentMovie;

			var html = "<div id='movieInfo'><h2>" + movie.title + "</h2></br><div class='col-sm-5'><img src='https://image.tmdb.org/t/p/w1280" + movie.poster_path +
			 "' alt='http://i.imgur.com/SSuPNLC.png' height='600px' width='400px'/></div><div class='col-sm-7' style='font-size: 15pt;'><b>Overview: </b>" + movie.overview +"</br></br><b>Original Language: </b>"
			 + movie.original_language +"</br></br><b>Average Grade: </b>"+movie.vote_average+"/10 from "+movie.vote_count+
			 " voters</br></br></div>"

			document.getElementById('movieInfo').innerHTML = html 
		}
	}

	$scope.add = function() {
		console.log('added movie to database')
		firebase.database().ref('movieLists/' + $scope.currentUser + "/movie").push().set({
			movie: $scope.movieId,
			checked: false
		})
	}

});