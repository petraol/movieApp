(function () {

	 var config = {
	        apiKey: "AIzaSyC2IqIQPw56-1VIJ8F5KqgzG8NdEY1W7BY",
	        authDomain: "movieapp-b5887.firebaseapp.com",
	        databaseURL: "https://movieapp-b5887.firebaseio.com",
	        projectId: "movieapp-b5887",
	        storageBucket: "movieapp-b5887.appspot.com",
	        messagingSenderId: "610446569148"
	      };
	      firebase.initializeApp(config);

	      // Get elements 
	      var preObject = document.getElementById('users');

	      // Create references 
	      var dbRefObject = firebase.database.database().ref().child('users');

	      // Sync object changes
	      // snap: status snap-shot, also returns the key-name were to iterates children or not 
	      // Use .val() to get the real value as well 
	      dbRefObject.on('value', snap => console.log(snap.val()))

}());	 

 		//dbRefObject.on('value', snap => {
			//preObject.innerText = JSON.stringify(snap.val(), null, 3);

		//});

})