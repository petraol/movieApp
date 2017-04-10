movieApp.controller('headerCtrl', function ($scope,Movie,$cookies) {
	$scope.setUser = function(id) {
		Movie.user = id;
	}
});

