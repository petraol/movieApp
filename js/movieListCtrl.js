movieApp.controller('movieListCtrl', function ($scope,Movie,$cookies) {

	//var userName = Movie.user;
	var userName = Movie.getCurrentUser();

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
		console.log(snapshot.val())
		snapshot.forEach(function(childSnapshot) {
			console.log("första for", childSnapshot.child('movie').val())
			var movieId = parseInt(childSnapshot.child('movie').val());
			var movieChecked = childSnapshot.child('checked').val();
			
			if (movieChecked === true) {
				$scope.dict[movieId] = "color:#595959";
			}
			else {
				$scope.dict[movieId] = "color:white";
			}
			console.log("andra for", movieId)
			Movie.getMovie.get({id:movieId}, 
				function(data) {
					$scope.list.push(data);
					$scope.list.sort(compare);
					console.log("i get",data.id)

				}, function(data) {
					console.log('error');
			});

			
		});
		

	});




});
