movieApp.controller('headerCtrl', function ($scope,Movie,$cookies) {

	$scope.logout = function() {
		console.log("Nu loggas " + Movie.getCurrentUser() + " ut");
		Movie.removeCurrentUser();
	}

	$scope.name = Movie.getCurrentUser();

	$scope.myFunction = function() {
	    document.getElementById("myDropdown").classList.toggle("show");

	$scope.cleanMovieCookie = function() {
		console.log("Moviecookie rensas");
		Movie.removeCurrentUser();
	}

	}


});

