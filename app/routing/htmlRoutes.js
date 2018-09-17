//Your `htmlRoutes.js` file should include two routes:

//* A GET Route to `/survey` which should display the survey page.
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });




//* A default, catch-all route that leads to `home.html` which displays the home page. 

