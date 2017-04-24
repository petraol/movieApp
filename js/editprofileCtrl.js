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

  	$scope.edit = function(realname,image,snack,pass,pass2) {
  		console.log(realname);
  		console.log(image);
  		console.log(snack);
      console.log(pass);
      if (pass === pass2) {
  		postEdit = {
  			realname: realname,
  			profile_picture: image,
  			snack: snack,
        password: pass
  		};
      $("#errorempty").hide();
      $("#errormatch").hide();
      $("#success").show();

  		var updates = {};
  		updates['/users/' + username] = postEdit;
  		return firebase.database().ref().update(updates);
  	}
    else if (pass === undefined || pass2 === undefined) {
      $("#errorempty").show();
    }
    else if (pass != pass2) {
      $("#errormatch").show();
    }
    }

});