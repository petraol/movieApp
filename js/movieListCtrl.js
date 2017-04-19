movieApp.controller('movieListCtrl', function ($scope,Movie,$cookies) {

	//var userName = Movie.user;
	var userName = Movie.getCurrentUser();

	$scope.setCurrent = function(movieId) {
		Movie.setCurrentMovie(movieId);
	}

	firebase.database().ref('/movieLists/' + userName + "/movie").on("value", function(snapshot) {
		console.log(snapshot.val());
			}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
			});

	$scope.check = function(id) {
		console.log('click')
		firebase.database().ref('/movieLists/' + userName + "/movie").once('value', function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				var key = childSnapshot.key;
				var movieId = parseInt(childSnapshot.child('movie').val());
				var movieChecked = childSnapshot.child('checked').val();
				var newData = {};
				if (id === movieId) {
					if (movieChecked === true) {
						newData = {
						movie: movieId,
						checked: false
						};	
					}
					else  {
						newData = {
						movie: movieId,
						checked: true
						};
					}
					var update = {}
					update['/movieLists/' + userName + '/movie/' + key] = newData;
					console.log(newData)
					return firebase.database().ref().update(update);	

				}
				
			});
		});
	}

	$scope.remove = function(id) {
		firebase.database().ref('/movieLists/' + userName + "/movie").once('value', function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				var key = childSnapshot.key;
				var movieId = parseInt(childSnapshot.child('movie').val());
				if (id === movieId) {
					console.log('removing key:', key, 'with id', movieId)
					firebase.database().ref('movieLists/' + userName + "/movie/" + key).remove();
				}
			});
		});
	}


	function compare(a,b) {
	  if (a.title < b.title)
	    return -1;
	  if (a.title > b.title)
	    return 1;
	  return 0;
	}

	return firebase.database().ref('/movieLists/' + userName + "/movie").orderByChild('movie').on('value', function(snapshot) {
		$scope.list = [];
		$scope.dict = {};
		$scope.pictureDict = {};
		snapshot.forEach(function(childSnapshot) {
			var movieId = parseInt(childSnapshot.child('movie').val());
			console.log(movieId);
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
