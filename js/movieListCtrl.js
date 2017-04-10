movieApp.controller('movieListCtrl', function ($scope,Movie,$cookies) {

	//var userName = Movie.user;
	var userName = "Anton"
	var listWithIds = [];

	$scope.list = function() {
		return listWithIds;
	}

	return firebase.database().ref('/movieLists/' + userName + "/movie").on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			childSnapshot.forEach(function(childSnapshot) {
				$scope.$apply( function(){
			  			var childKey = childSnapshot.key;
			  			console.log("vad har du för värde", childSnapshot.val())
						listWithIds.push(childSnapshot.val());
						console.log('vår lista i childsnapshot', listWithIds)
	  			});
			});
		});
	});


	$scope.list = function() {

	}
});