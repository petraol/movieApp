movieApp.controller('friendsCtrl', function ($scope,$routeParams,Movie,$cookies) {

$scope.list = [];
var username = Movie.currentUser;
		firebase.database().ref('/users/').on('value', function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				
				$scope.namelist.push(childSnapshot).val()
				
				console.log((childSnapshot).val())
				
			});


		});
});
