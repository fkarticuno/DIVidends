$(document).ready(function(){});
// Addon scripts
$("h3").on("click", function() {
  $("h3").addClass("animated shake");
});

// EACH ARRAY HAS 6 ITEMS TO ITERATE THROUGH
var foodarray = ["burger king","taco bell","mcdonalds","arbys","sushi king"]
var housingarray1 = ["1 story house for sale","2 story house for sale","3 story house for sale","4 story house for sale","apartments for rent","condominiums for rent"]
var housingarray = ["1 story house","2 story house","3 story house","4 story house","apartments","condominiums"]
var schoolarray = ["elementary school","middle school", "high school", "college", "university", "trade school"]
var rand = 0;
var placeholder;


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
    .attr('value', placeholder)
    .attr('class', 'list-group-item foodChoice')
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
    .attr('value', placeholder)
    .attr('class', 'list-group-item homeChoice')
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
    .attr('value', placeholder)
    .attr('class', 'list-group-item schoolChoice')
    }
    $('#icon').html(`<img class="icon" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX7260587.jpg"/>`)
    // $('#nli1').text("firstschool")
    // $('#nli2').text("secondschool")
    // $('#nli3').text("thirdschool") 
})

//nearby section click events
$(document).on('click', ".foodChoice", function() {
  var foodTerm = $(this).attr("value");
  console.log("Food search: ", foodTerm);
  foodSearch(foodTerm)
});

$(document).on('click', ".homeChoice", function() {
  var homeTerm = $(this).attr("value");
  console.log("Home search: ", homeTerm);
  homeSearch(homeTerm)
});

$(document).on('click', ".schoolChoice", function() {
  var schoolTerm = $(this).attr("value");
  console.log("School search: ", Term);
  foodSearch(schoolTerm)
});

    function foodSearch(searchParameter){

          var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?&term=" + searchParameter + "&location=richmond";
      
          $.ajax({
            url: myurl,
            headers: {
              'Authorization':'Bearer 2lov69gUldxfBjwyuo57Py6pq-S8K1unfqBh9pBqHgg0h_BESErErf5x-wZpnbRx9EOVqdEyd-0Ru6ElqplGFdnrkwxHhFWKPp8AoS4rrU5lOPE7bRtBprZ4bHaPXXYx',
          },
            method: 'GET',
            dataType: 'json',
          
                success: function(data){
                    // Grab the results from the API JSON return
              var totalresults = data.total;
              // If our results are greater than 0, continue
              if (totalresults > 0){
              // Display a header on the page with the number of results
              $('#results').append('<h5>We discovered ' + totalresults + ' results!</h5>');
              // Itirate through the JSON array of 'businesses' which was returned by the API
              $.each(data.businesses, function(i, item) {
              // Store each business's object in a variable
              var id = item.id;
              var alias = item.alias;
              var phone = item.display_phone;
              var image = item.image_url;
              var name = item.name;
              var rating = item.rating;
              var reviewcount = item.review_count;
              var address = item.location.address1;
              var city = item.location.city;
              var state = item.location.state;
              var zipcode = item.location.zip_code;
              var price = item.price;
              var coord = item.coordinates.latitude+ ' : '+item.coordinates.longitude
              // Append our result into our page
              $('#results').prepend('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:200px;height:150px;"><br>We found <b>' + name + '</b> (' + alias + ')<br>Business ID: ' + id + '<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews. ' + '<br>Price ' + price + '<br>' + coord +'</div>');
              });
              } else {
              // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
              $('#results').prepend('<h5>We discovered no results!</h5>');
              }
              }
          }); 
    };

    function homeSearch(searchParameter){
            var myurl = "https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail?postalcode=23834&propertytype="+ searchParameter;
            //address1=4529%20Winona%20Court&address2=Denver%2C%20CO";

        // =====================

        // OkHttpClient client = new OkHttpClient(); 

        // Request request = new Request.Builder() 
        //   .url("https://api.gateway.attomdata.com/propertyapi/v1.0.0/
        //   property/detail?address1=4529%20Winona%20Court&address2=
        //   Denver%2C%20CO")
        //   .get() 
        //   .addHeader("accept", "application/json") 
        //   .addHeader("apikey", "") 

        //   .build(); 

        // Response response = client.newCall(request).execute();
        // =====================

                $.ajax({
                    url: myurl,
                    headers: {
                    "accept": "application/json",
                    'apikey':'3aa89d8842065dc09e6c55f752ca06cf',
                },
                    method: 'GET',
                    dataType: 'json',
                    success: function(data){
                        // Grab the results from the API JSON return

        console.log(data);
        Object.keys(data.porperty[0].forEach(function(key,index) {
            // key: the name of the object key
            // index: the ordinal position of the key within the object 
            $('#results').prepend(key, index)
        }));

        $('#results').prepend('<div>'+ data.property[0].address.line1 +'</div>')
        // If our results are greater than 0, continue

        }
        });      
};
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