// const yelp = require('yelp-fusion');

// // Place holder for Yelp Fusion's API Key. Grab them
// // from https://www.yelp.com/developers/v3/manage_app
// const apiKey = '2lov69gUldxfBjwyuo57Py6pq-S8K1unfqBh9pBqHgg0h_BESErErf5x-wZpnbRx9EOVqdEyd-0Ru6ElqplGFdnrkwxHhFWKPp8AoS4rrU5lOPE7bRtBprZ4bHaPXXYx';

// const searchRequest = {
//   term:'Four Barrel Coffee',
//   location: 'san francisco, ca'
// };

// const client = yelp.client(apiKey);

// client.search(searchRequest).then(response => {
//   const firstResult = response.jsonBody.businesses[0];
//   const prettyJson = JSON.stringify(firstResult, null, 4);
//   console.log(prettyJson);
// }).catch(e => {
//   console.log(e);
// });

//======================================================================
/*
var settings = {
	"async": true,
	"crossDomain": false,
	"url": "https://api.yelp.com/v3/businesses/search",
	"method": "GET",
	"headers": {
        "Authorization": "Bearer 2lov69gUldxfBjwyuo57Py6pq-S8K1unfqBh9pBqHgg0h_BESErErf5x-wZpnbRx9EOVqdEyd-0Ru6ElqplGFdnrkwxHhFWKPp8AoS4rrU5lOPE7bRtBprZ4bHaPXXYx",

	}
}
$.ajax(settings).done(function (response) {
    console.log(response);

});
// GET https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972
*/

//=======================================================================
//Try #3

// JavaScript Document
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/";
var apiKey = "2lov69gUldxfBjwyuo57Py6pq-S8K1unfqBh9pBqHgg0h_BESErErf5x-wZpnbRx9EOVqdEyd-0Ru6ElqplGFdnrkwxHhFWKPp8AoS4rrU5lOPE7bRtBprZ4bHaPXXYx" 

$.ajax({
    url: queryURL,
    method: "GET",
    headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin":"*",
        "Authorization": `Bearer ${apiKey}`
     }
 }).then(function(res) {
     var results = res.data
     console.log(results);
 });