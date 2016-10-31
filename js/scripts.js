function Places (locale, landmarks, timeOfYear, notes, image){
  this.locale = locale;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
  this.image = image;
}

var placesArray = [];


$(document).ready(function (){
var counter = 0;

  $("#input").submit(function (event){
    event.preventDefault();
    var locale = $("#locale").val();
    var landmarks = $("#landmarks").val();
    var timeOfYear = $("#timeOfYear").val();
    var notes = $("#notes").val();
    var image = $("#image").val();

    var newPlace = placesArray.push(new Places(locale, landmarks, timeOfYear, notes, image));
    $("#places").append("<li value = '" + counter + "'>" + locale + "</li>");
    counter++;


    $('li').click(function(){
      var index = $(this).val();
      console.log(placesArray[index].landmarks, placesArray[index].locale);
      $("#output").empty().append("<p>Locale: " + placesArray[index].locale + "</p> <p>Landmarks: " + placesArray[index].landmarks + "</p><p>Time of year: " + placesArray[index].timeOfYear + "</p><p>Notes: " + placesArray[index].notes + "</p><p>Image: " + placesArray[index].image + "</p>");

    });

  })

});
