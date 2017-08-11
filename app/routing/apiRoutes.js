// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

	// API GET requests
	// =============================================================

	/*
	A GET route with the url `/api/friends`. This will be used to display
	a JSON of all possible friends.
	*/
	app.get("/api/friends", function(request, response) {
		response.json(friendsData);
	});


	// API POST requests
	// =============================================================

	/*
	A  POST routes `/api/friends`. This will be used to handle incoming survey results
	and handle the compatibility logic.
	*/
	
	app.post("/api/friends", function(req, response) {


   		var newFriend = req.body;
   		console.log(newFriend);

   		var newBestFriendIndex = compareAllFriends( newFriend, friendsData);

   		var newBestFriend = friendsData[newBestFriendIndex];
   		console.log("newBESTFRIEND: " + newBestFriend.name);

    	response.json(newBestFriend);

	});

};

function compareAllFriends( friend1, friendsArray){

	var scoresDiffArray = [];

	for (i=0; i<friendsArray.length; i++){

		var potentialFriend = friendsArray[i];	
		
		scoresDiffArray.push( compareScores(friend1, potentialFriend) );

	}

	var bffIndex =  scoresDiffArray.indexOf( Math.min.apply(null, scoresDiffArray) );

	if (bffIndex === NaN || bffIndex < 0){

		return 0

	}

	else{
		return bffIndex;
	}

}

function compareScores(friendA, friendB){

	var totalDifferences = 0;

	for (j=0; j<friendB.scores.length; j++){
		totalDifferences = ( totalDifferences + diff(friendA.scores[j], friendB.scores[j]) );
	}

	return totalDifferences;

};

function diff(a, b){
	return Math.abs(a - b);
};