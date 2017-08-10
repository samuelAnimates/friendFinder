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
	
	app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    	console.log("POST");
	});

};