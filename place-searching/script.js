// Addon scripts
$("h3").on("click", function() {
  $("h3").addClass("animated shake");
});

// EACH ARRAY HAS 6 ITEMS TO ITERATE THROUGH
var foodarray = ["burger king","taco bell","mcdonalds","arbys","sushi king"]
var housingarray = ["1 story house for sale","2 story house for sale","3 story house for sale","4 story house for sale","apartements for rent","condominiums for rent"]
var schoolarray = ["elementary school","middle school", "high school", "college", "university", "trade school"]
var rand = 0;
var placeholder = 0;


//  BUILDS RANDOM NUMBER TO SELECT ITEM FROM ARRAY (EX https://www.w3schools.com/js/js_random.asp)

function rando(){
    rand = Math.floor(Math.random() * 7);
    return rand;
  }

$('#food').on('click',function(){
    for (var i = 1; i < 4; i++) {
    placeholder = foodarray[rando()]
    $("#nli"+i)
    .text(placeholder)
    .val(placeholder)
    }
    $('#icon').html(`<img class="icon" src="https://rlv.zcache.com/restaurant_highway_sign-r8a257db3662c455e812864bee342d968_i13_8byvr_540.jpg"/>`)
    //  $('#nli1').text("firstfoodplace") //change this to the food array
    //  $('#nli2').text("secondfoodplace") //change this to the food array
    //  $('#nli3').text("thirdplace") //change this to the food array
    //  will populate list of categories from food array then after click will populate search results from api 
})

$('#housing').on('click',function(){
    for (var i = 1; i < 4; i++) {
    placeholder = housingarray[rando()]
    $("#nli"+i)
    .text(placeholder)
    .val(placeholder)
    }
    $('#icon').html(`<img class="icon" src="../project/forsale.png"/>`)
    // $('#nli1').text("firsthouse")
    // $('#nli2').text("secondhouse")
    // $('#nli3').text("thirdhouse")
    // add markers at lat long 
})

$('#schools').on('click',function(){
    for (var i = 1; i < 4; i++) {
    placeholder = schoolarray[rando()]
    $("#nli"+i)
    .text(placeholder)
    .val(placeholder)
    }
    $('#icon').html(`<img class="icon" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX7260587.jpg"/>`)
    // $('#nli1').text("firstschool")
    // $('#nli2').text("secondschool")
    // $('#nli3').text("thirdschool") 
})

//  MODDED CODE does not work as intended, see error:
  /*
    places_impl.js:78 Uncaught (in promise) TypeError: 
    Cannot read property 'activeElement' of undefined
    at Object.v$.i (places_impl.js:78)
    at js?key=[redacted]&callback=createMap&libraries=places:27
  
$('#nli1').on('click', function() {
  placeholder = $('#nli1').val()
  searchBox = new google.maps.places.SearchBox(placeholder);
})
$('#nli2').on('click', function() {
  searchBox = new google.maps.places.SearchBox($('#nli2').val());
})
$('#nli3').on('click', function() {
  searchBox = new google.maps.places.SearchBox($('#nli3').val());    
})
*/
//  MODDED CODE
// =======================================================

var map;
function createMap () {
  var options = {
    center: { lat: 37.5743047, lng: -77.5398895 },
    zoom: 15
  };
  map = new google.maps.Map(document.getElementById('map'), options);
  var input = document.getElementById('search');
  searchBox = new google.maps.places.SearchBox(input);
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
  var markers = [];
  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();
    if (places.length == 0)
      return;
    markers.forEach(function (m) { m.setMap(null); });
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(p) {
      if (!p.geometry)
        return;
      markers.push(new google.maps.Marker({
        map: map,
        title: p.name,
        position: p.geometry.location
      }));
      if (p.geometry.viewport)
        bounds.union(p.geometry.viewport);
      else
        bounds.extend(p.geometry.location);
    });
    map.fitBounds(bounds);
  });
}  