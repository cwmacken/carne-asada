var Firebase = require("firebase")
var config = require("../../../config")

// TODO: NEED TO MOVE THIS TO STARTUP SCRIPT
Firebase.initializeApp(config.firebase);

module.exports = {
	// called at app start
	createAccount: function(email, password){
		return function(dispatch, getState){

				dispatch({
					type: 'STARTAUTH',
					email: email,
					password: password
				});

				Firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
				  var errorCode = error.code;
				  var errorMessage = error.message;
					dispatch({
						type: 'CREATEACCCOUNTERROR',
						errorCode: errorCode,
						errorMessage: errorMessage
					});
				});


		}
	},

	watchUserChange: function(){
		return function(dispatch, getState){
			Firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					dispatch({
						type: 'USERINFO',
						user: user
					})
				}
			});

		}
	},

	login: function(email, password){

		return function(dispatch, getState){

			Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

				var errorCode = error.code;
			  var errorMessage = error.message;
				dispatch({
					type: 'CREATEACCCOUNTERROR',
					errorCode: errorCode,
					errorMessage: errorMessage
				});
			});

		}
	},

	sampleOne: function(){
		return function(dispatch){
			dispatch({
			  type: 'SAMPLEONE'
			})
		}
	},

	sampleTwo: function(text){
		return function(dispatch){
			dispatch({
				type: 'SAMPLETWO',
				text: text
			})
		}
	},

	signout: function(){
		return function(dispatch, getState){

			Firebase.auth().signOut().then(function() {
			  // Sign-out successful.
				dispatch({
					type: 'SIGNOUTWORKED'
				});
			}, function(error) {
			  // An error happened.
				dispatch({
					type: 'SIGNOUTBROKE',
					errorCode: "signout broke",
					errorMessage: "singout broke"
				});
			});

		}
	}

};
