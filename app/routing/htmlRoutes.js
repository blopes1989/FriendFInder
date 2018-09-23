//routes catches user send them to home
var path = require("path");
module.exports = function(app){
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/matches", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/matches.html"));
});

app.get("/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/friends.html"));
});
}