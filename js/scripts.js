function Chores (title){
  this.title = title;
}


$(document).ready(function (){


  $("#input").submit(function (event){
    event.preventDefault();
    var chore = $("#chore").val();


    var newChore = new Chores(chore);
    $("#chores").append("<li>" +newChore.title+ "</li>");






  })

});
