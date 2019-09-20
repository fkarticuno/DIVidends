$(document).ready(function(){
    document.write('Js Linked');
    
    var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://yourmapper2.p.rapidapi.com/datasetlist?format=json&sort=location&num=5&maxlat=40&maxlon=-70&minlat=30&minlon=-90",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "yourmapper2.p.rapidapi.com",
		"x-rapidapi-key": "1bb40a3f2cmsh737e756f49ff562p1d4980jsn6537251a9bc1"
	    }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

//    $('#container').text(JSON.stringify(response));

});
