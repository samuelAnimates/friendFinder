// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var path = require("path");
var express = require("express");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
	
	// Serve files from the public folder
	app.use(express.static('./app/public'));
	
	// HTML GET Requests
	// ---------------------------------------------------------------------------

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// If no matching route is found default to home
	app.use(function(req, res) {
  		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

};