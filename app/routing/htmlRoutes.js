//Your `htmlRoutes.js` file should include two routes:

//* A GET Route to `/survey` which should display the survey page.
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });





  //get matches page
  $.get("/api/characters/" + searchedCharacter, function(data) {
    console.log(data);

  });



//* A default, catch-all route that leads to `home.html` which displays the home page. 

