movieApp.controller('movieListCtrl', function ($scope,Movie,$cookies) {

		//var userName = Movie.user;
		var userName = "Anton"
		return firebase.database().ref('/movieList/' + userName).on('value', function(snapshot) {

	  		$scope.$apply( function(){
	  			$scope.list = function() {
		  			return snapshot.val();
		  		}
	  		});

		});

	}
});