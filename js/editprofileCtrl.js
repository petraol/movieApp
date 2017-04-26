movieApp.controller('editprofileCtrl', function ($scope,Movie,$cookies,$location,$window) {

  $scope.errorempty = false;
  $scope.errormatch = false;
  $scope.success = false;

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

<<<<<<< HEAD
      console.log(pass);

    if (pass === undefined || pass2 === undefined) {
      $("#errorempty").show();
      $("#errormatch").hide();
      $("#success").hide();
=======
    if (!pass || !pass2) {
      $scope.errorempty = true;
      $scope.errormatch = false;
      $scope.success = false;
>>>>>>> c513d6f1edb8f72333fbe77a982be0f4fce67745
    }

    else if (pass === pass2) {

<<<<<<< HEAD
      $("#errorempty").hide();
      $("#errormatch").hide();
      $("#success").show();
=======
      $scope.errorempty = false;
      $scope.errormatch = false;
      $scope.success = true;
>>>>>>> c513d6f1edb8f72333fbe77a982be0f4fce67745

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
<<<<<<< HEAD
      $("#errormatch").show();
      $("#success").hide();
      $("#errorempty").hide();
=======
      $scope.errorempty = false;
      $scope.errormatch = true;
      $scope.success = false;
    }
>>>>>>> c513d6f1edb8f72333fbe77a982be0f4fce67745
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