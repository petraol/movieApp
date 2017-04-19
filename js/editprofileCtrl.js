movieApp.controller('editprofileCtrl', function ($scope,Movie,$cookies,$location,$window) {

	var username = Movie.getCurrentUser();

  if (username == "") {
    $window.location.assign('#!/oops');
  }

	console.log("Vid omladdningen var currentUser: " + username)
	firebase.database().ref('/users/' + username).on('value', function(snapshot) {

  		$scope.$evalAsync(function() {

  			$scope.name = function() {
	  			return snapshot.val().realname;
	  		}
	  		$scope.image = function() {
	  			return snapshot.val().profile_picture;
	  		}
	  		$scope.snack = function() {
	  			return snapshot.val().snack;
	  		}
  		});
  	});

  	$scope.edit = function(realname,image,snack) {
  		console.log(realname);
  		console.log(image);
  		console.log(snack);
  		postEdit = {
  			realname: realname,
  			profile_picture: image,
  			snack: snack,
  		};

  		var updates = {};
  		updates['/users/' + username] = postEdit;
  		return firebase.database().ref().update(updates);
  	}

});