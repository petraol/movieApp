movieApp.controller('loginCtrl', function ($scope,Movie,$cookies) {
	$scope.setUser = function(id) {
		Movie.user = id;
	}
});

