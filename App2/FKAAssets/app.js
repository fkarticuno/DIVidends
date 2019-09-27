// EACH ARRAY HAS 6 ITEMS TO ITERATE THROUGH
var foodarray = ["burger king","taco bell","mcdonalds","arbys","sushi king"]
var houseingarray = ["1 story house for sale","2 story house for sale","3 story house for sale","4 story house for sale","apartements for rent","condominiums for rent"]
var schoolarray = ["elementary school","middle school", "high school", "college", "university", "trade school"]
var rand = 0;

//  BUILDS RANDOM NUMBER TO SELECT ITEM FROM ARRAY (EX https://www.w3schools.com/js/js_random.asp)

function rando(){
    rand = Math.floor(Math.random() * 7);
    return rand;
  }

$('#food').on('click',function(){
    for (var i = 1; i < 4; i++) {
    $("#nli"+i).text(foodarray[rando()])
    }
    $('#maintitle').text("FOOD NEARBY")    
    //  $('#nli1').text("firstfoodplace") //change this to the food array
    //  $('#nli2').text("secondfoodplace") //change this to the food array
    //  $('#nli3').text("thirdplace") //change this to the food array
    //  will populate list of categories from food array then after click will populate search results from api 
})

$('#housing').on('click',function(){
    for (var i = 1; i < 4; i++) {
    $("#nli"+i).text(houseingarray[rando()])
    }
    $('#maintitle').text("HOMES NEARBY")       
    // $('#nli1').text("firsthouse")
    // $('#nli2').text("secondhouse")
    // $('#nli3').text("thirdhouse")
    // add markers at lat long 
})

$('#schools').on('click',function(){
    for (var i = 1; i < 4; i++) {
    $("#nli"+i).text(schoolarray[rando()])
    }
    $('#maintitle').text("SCHOOLS NEARBY")
    // $('#nli1').text("firstschool")
    // $('#nli2').text("secondschool")
    // $('#nli3').text("thirdschool") 
})

