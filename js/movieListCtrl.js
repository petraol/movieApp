movieApp.controller('movieListCtrl', function ($scope,Movie,$cookies) {

	//var userName = Movie.user;
	var userName = Movie.getCurrentUser();
	$scope.list = [];

	firebase.database().ref('/movieLists/' + userName + "/movie").on("value", function(snapshot) {
		console.log(snapshot.val());
			}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
			});

	return firebase.database().ref('/movieLists/' + userName + "/movie").on('value', function(snapshot) {
		console.log(snapshot.val())
		snapshot.forEach(function(childSnapshot) {
			var movieId = parseInt(childSnapshot.child('movie').val());
			Movie.getMovie.get({id:movieId}, 
				function(data) {
					$scope.list.push(data);
				}, function(data) {
					console.log('error');
			});
		});
	});
});
