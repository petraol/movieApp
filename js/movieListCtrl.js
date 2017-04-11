movieApp.controller('movieListCtrl', function ($scope,Movie,$cookies) {

	//var userName = Movie.user;
	var userName = "Anton"
	var listWithIds = [];
	$scope.list = [];

	return firebase.database().ref('/movieLists/' + userName + "/movie").on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var movieId = parseInt(childSnapshot.child('movie').val());
			
			//$scope.list = function() {
				console.log('i list funktionen', movieId)
				Movie.getMovie.get({id:movieId}, 
					function(data) {
						$scope.list.push(data);
						console.log("filmen", data.title);;
					}, function(data) {
						console.log('error');
					});
				
			//}
		});
	});
});

	// return firebase.database().ref('/movieLists/' + userName + "/movie").on('value', function(snapshot) {
	// 	snapshot.forEach(function(childSnapshot) {
	// 		childSnapshot.then(function(childSnapshot) {
	//   			console.log("vad har du för värde", childSnapshot.val())
	// 			listWithIds.push(childSnapshot.val());
	// 			console.log('vår lista i childsnapshot', listWithIds)
	// 			$scope.$apply( function(){

	// 				$scope.list = function() {
	// 					console.log('i list funktionen')
	// 					var list = [];
	// 					for (movieId in listWithIds) {
	// 						var movieId = 11;
	// 						Movie.getMovie.get({id:movieId}, 
	// 							function(data) {
	// 								console.log("filmen", data.results);;
	// 							},
	// 							function(data) {
	// 								console.log('error');
	// 						});
	// 						return listWithIds;
	// 						}
	// 				}
	// 			});
	// 		});
	// 	});
	// });