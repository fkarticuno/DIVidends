// this did work when integrated into place-searching/script.js but it was too buggy to keep
var pos ={};
function createMap () {
  var ricmond = {lat: 37.5743047, lng: -77.5398895}
  var map2 = new google.maps.Map(
    document.getElementById('map'), {zoom: 10, center: ricmond});
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
        };                
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map2);
        map2.setCenter(pos);
    }, function() {
        handleLocationError(true, infoWindow, map2.getCenter());
    });
    } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map2.getCenter());
    }
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map2);}
    console.log(pos)  
  $(document).keyup(function(){
    var options = {
    center: { lat: pos.lat , lng: pos.lng  },
    zoom: 15
  };
})
};	