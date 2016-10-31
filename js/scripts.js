function Places (locale, landmarks, timeOfYear, notes, image){
  this.locale = locale;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.image = image;
}

$(document).ready(function (){

  $("#input").submit(function (event){
    event.preventDefault();
    var locale = $("#locale").val();
    var landmarks = $("#landmarks").val();
    var timeOfYear = $("#timeOfYear").val();
    var notes = $("#notes").val();
    var image = $("#image").val();

    var newPlace = new Places(locale, landmarks, timeOfYear, notes, image);
    $("#places").append("<li class = 'place'>" + newPlace.locale + "</li>");


    $('li').last().click(function(){
      $("#output").empty().append("<p>Locale: " + newPlace.locale + "</p> <p>Landmarks: " + newPlace.landmarks + "</p><p>Time of year: " + newPlace.timeOfYear + "</p><p>Notes: " + newPlace.notes + "</p><p>Image: " + newPlace.image + "</p>");
    });



  })

});
