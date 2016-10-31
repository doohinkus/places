function Chores (title, name, time, notes){
  this.title = title;
  this.name = name;
  this.time = time;
  this.notes = notes;
}

var makeList = function(title, name, time, notes) {
  if (!title || !name || !time || !notes) {
    alert('Please enter text in each field')
  }
  else {
    var newChore = new Chores(title, name, time, notes);
    return newChore;
  }
}

Chores.prototype.removeChore = function(){
  return this.title.strike();
}


$(document).ready(function (){
  $("#input").slideDown(1000);

  $("#input").submit(function (event){
    event.preventDefault();
    var title = $("#title").val();
    var name = $("#name").val();
    var time = $("#time").val();
    var notes = $("#notes").val();


    newChore = makeList(title, name, time, notes);

    var details = "<div class='details'>" +"<p>Name: "+ newChore.name + "</p>"
    +"<p>Time: "+ newChore.time + "</p>"+"<p>Notes: "+ newChore.notes + "</p><button type='button' class='finished btn btn-danger'>Finished Chore</button></div>";

    $("#chores").append("<li><span class='choreTitle'>" + newChore.title + "</span>" + details +"</li>" );
    $("li").last().click(function (){
      $("div.details",this).slideToggle();

    });

    $(".finished").last().click(function(){
      var newTitle = newChore.removeChore();
      $(this).parents("li").find("span").empty().append(newTitle);

    })





    $("#title").val("");
    $("#name").val("");
    $("#time").val("");
    $("#notes").val("");
  })

});
