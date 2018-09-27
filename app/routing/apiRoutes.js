
module.exports = function (app, surveyData) {

  app.post("/api/friends", function (req, res) {
    var addedFriend = req.body;
    surveyData.push(addedFriend);

    return res.json(surveyData);

  });

  app.get("/api/data/friends", function (req, res) {
    return res.json(surveyData);

  });

};