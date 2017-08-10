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

	//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
	app.get("/api/friends", function(request, response) {
		response.json(friendsData);
	});


	// API POST requests
	// =============================================================

	// A POST routes `/api/friends`. This will be used to handle incoming survey results.
	// This route will also be used to handle the compatibility logic.

};