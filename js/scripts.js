$(document).ready(function() {
  $("form#thrones").submit(function(event) {
    event.preventDefault();
    var climatePreference = parseInt($("#climate").val());
    var animalPreference = parseInt($("input:radio[name=operator]:checked").val());
    var relationshipStatus = parseInt($("#relStat").val());
    var characterAdd = climatePreference + animalPreference + relationshipStatus;
    console.log(climatePreference);
    console.log(animalPreference);
    console.log(relationshipStatus);
    console.log(characterAdd);
    if (characterAdd < 4) {
        $("#gotCharacter").text("Jon Snow");
    }
    else if (characterAdd > 3 && characterAdd < 7) {
        $("#gotCharacter").text("Ceirci Lannister");
    }
    else if (characterAdd > 6) {
        $("#gotCharacter").text("Daeneriss Targaryan");
    } else {
      console.log("ended here");
    }
    $("#youAre").show();
  });
});
