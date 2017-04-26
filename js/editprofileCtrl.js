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
        $scope.password = function() {
          return snapshot.val().password;
        }
  		});
  	});

  	$scope.passedit = function(pass,pass2) {

      console.log(pass);

    if (pass === undefined || pass2 === undefined) {
      $("#errorempty").show();
      $("#errormatch").hide();
      $("#success").hide();
    }

    else if (pass === pass2) {

      $("#errorempty").hide();
      $("#errormatch").hide();
      $("#success").show();

      newData = {
        realname: $scope.name(),
        profile_picture: $scope.image(),
        snack: $scope.snack(),
        password: pass
      }

      var update = {};
      update['/users/' + username] = newData;
      return firebase.database().ref().update(update);
  	}
    else if (pass != pass2) {
      $("#errormatch").show();
      $("#success").hide();
      $("#errorempty").hide();
    }
    }

    $scope.edit = function(realname, image, snack) {

      if (typeof realname != 'string') {
        realname = $scope.name();
      }
      
      if (typeof image != 'string') {
        image = $scope.image();
      }

      if (typeof snack != 'string') {
        snack = $scope.snack();
      }

      newData = {
        realname: realname,
        profile_picture: image,
        snack: snack,
        password: $scope.password()
      }

      var update = {};
      update['/users/' + username] = newData;
      console.log('Updated!')
      return firebase.database().ref().update(update);
    }

});