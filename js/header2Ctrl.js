movieApp.controller('header2Ctrl', function ($scope,Movie,$cookies) {
	$scope.setUser = function(id) {
		Movie.user = id;
	}
});

