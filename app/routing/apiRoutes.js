//* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//* A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic. /

  $(".success").click(function(event) {
    console.log("clicked")


    // Question: What does this code do??
    $.post("/api/characters", newCharacter)
      .then(function(data) {
        console.log("add.html", data);
        alert("Adding character...");
      });
  });
