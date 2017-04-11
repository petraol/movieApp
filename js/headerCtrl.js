movieApp.controller('headerCtrl', function ($scope,Movie,$cookies) {

	if (document.getElementById("logout")) {
		document.getElementById("logout").addEventListener('click', function() {
			console.log(Movie.currentUser);
			Movie.currentUser = "";
			console.log(Movie.currentUser);
		});
	}

});

