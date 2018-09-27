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
 
    name: "Batman",
    photo: "https://i.kinja-img.com/gawker-media/image/upload/s--PUQWGzrn--/c_scale,f_auto,fl_progressive,q_80,w_800/yktaqmkm7ninzswgkirs.jpg",
    scores: [
        5,
        1,
        5,
        5,
        1,
        5,
        1,
        5,
        1,
        1
    ]
  },

  {
 
    name: "Joker",
    photo: "https://upload.wikimedia.org/wikipedia/en/9/98/Joker_%28DC_Comics_character%29.jpg",
    scores: [
        1,
        5,
        1,
        1,
        5,
        1,
        5,
        1,
        1,
        5
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