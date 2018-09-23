
module.exports = function (app, surveyData){

app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var addedFriend = req.body;
    surveyData.push(addedFriend);
  
    res.json(addedFriend);
  });

  app.get("/api/surveyData", function(req, res) {
    return res.json(surveyData);
   });

}


