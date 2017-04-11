movieApp.controller('headerCtrl', function ($scope,Movie,$cookies) {

	$scope.logout = function() {
		console.log(Movie.getCurrentUser());
		Movie.removeCurrentUser();
		console.log(Movie.getCurrentUser());
	}

	$scope.myFunction = function() {
	    document.getElementById("myDropdown").classList.toggle("show");
	}


});

