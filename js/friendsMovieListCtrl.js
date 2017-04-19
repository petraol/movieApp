movieApp.controller('friendsMovieListCtrl', function ($scope,$routeParams,Movie,$cookies,$location,$window) {

	//var userName = Movie.user;
	$scope.userName = $routeParams.userName;

	firebase.database().ref('/movieLists/' + $scope.userName + "/movie").on("value", function(snapshot) {
			}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
			});

	function compare(a,b) {
	  if (a.title < b.title)
	    return -1;
	  if (a.title > b.title)
	    return 1;
	  return 0;
	}

	return firebase.database().ref('/movieLists/' + $scope.userName + "/movie").orderByChild('movie').on('value', function(snapshot) {
		$scope.list = [];
		$scope.dict = {};
		$scope.pictureDict = {};
		snapshot.forEach(function(childSnapshot) {
			var movieId = parseInt(childSnapshot.child('movie').val());
			var movieChecked = childSnapshot.child('checked').val();

			if (movieChecked === true) {
				$scope.dict[movieId] = "color:#595959";
				$scope.pictureDict[movieId] = "http://www.procliparts.com/resize/900w/cliparts/pele/tqgczgcr9-check-circle.png";
			}
			else {
				$scope.dict[movieId] = "color:white";
				$scope.pictureDict[movieId] = "https://2.bp.blogspot.com/-EDwBC1yiZkw/VyCJOAB9qLI/AAAAAAAACTQ/uB9Nu_VdcbEV-ZDapZDBEStaB0SAralzQCLcB/s1600/ring3.png";
			}
			Movie.getMovie.get({id:movieId},
				function(data) {
					$scope.list.push(data);
					$scope.list.sort(compare);

				}, function(data) {
					console.log('error');
			});
		});
	});
});
