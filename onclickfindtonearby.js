var foodarray = ["burger","taco","mack","meats"]
var houseingarray = ["2story","3story","4story"]
var rand = 0;
$("#fli1").on('click',function() {
  function rando(){
    rand = Math.floor(Math.random() * foodarray.length);
    return rand;
  }
    for (var i = 1; i < 3; i++) {
    $("#nli"+i).text(foodarray[rando()])
  }
})

//maybe?
googlesearch = $('#googleApiSearchContent').val()