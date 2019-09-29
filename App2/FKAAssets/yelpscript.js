// Documentation Found Here
// https://www.yelp.com/developers/documentation/v3/business



var myurl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?`;
var lookup = 0;
var id, alias, phone, image, name, rating, reviewcount, address, city, zipcode, price, coord;

$('.nearby').on('click',function() {
    if ($(this).attr("data")=="Food") {
    lookup = $(this).text();
    console.log(`${lookup} was clicked`)
    console.log($(this).attr("data"))
$.ajax({
   url: `${myurl}&term=${lookup}&lo tion=richmond`,
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
$('#icon').append('<h5>We discovered ' + totalresults + ' results!</h5>');
// Itirate through the JSON array of 'businesses' which was returned by the API
//$.each(data.businesses, function(i, data.businesses[0]) {
// Store each business's object in a variable
console.log(data);
console.log(data.businesses[0].id);
alias = data.businesses[0].alias;
id = data.businesses[0].id;
phone = data.businesses[0].display_phone;
image = data.businesses[0].image_url;
name = data.businesses[0].name;
rating = data.businesses[0].rating;
reviewcount = data.businesses[0].review_count;
address = data.businesses[0].location.address1;
city = data.businesses[0].location.city;
state = data.businesses[0].location.state;
zipcode = data.businesses[0].location.zip_code;
price = data.businesses[0].price;
coord = data.businesses[0].coordinates.latitude+ ' : '+data.businesses[0].coordinates.longitude
// Append our result into our page
$('#icon').html(`<div> ${name} <br> ${phone} <br> ${address} </div>`)
//});
} else {
// If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
$('#icon').append('<h5>We discovered no results!</h5>');
}
}
});

};

});
