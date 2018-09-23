// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//already made characters
var surveyData = [
  {
 
    name: "dude",
    photo: "http://husbanddaddude.com/wp-content/uploads/2015/10/Dude.jpg",
    scores: [
        2,
        2,
        5,
        3,
        1,
        5,
        3,
        2,
        4,
        6
    ]
  },
  {
 
    name: "Darth Maul",
    photo: "https://vignette.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png/revision/latest?cb=20140209162228",
    scores: [
        2,
        2,
        5,
        3,
        1,
        9,
        3,
        5,
        4,
        6
    ]
  },
 ];


require("./app/routing/apiRoutes.js")(app, surveyData);
require("./app/routing/htmlRoutes.js")(app);



















// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });