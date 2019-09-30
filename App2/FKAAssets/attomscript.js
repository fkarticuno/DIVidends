// Documentation Found Here
// https://www.yelp.com/developers/documentation/v3/business

var myurl;
var lookup = 0;

$('.nearby').on('click',function() {
    if ($(this).attr("data")=="Housing") {
        myurl = "https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail?";
        lookup = $(this).text();
        console.log(`${lookup} was clicked`)
        console.log($(this).attr("data"))
  
        $.ajax({
            url: `${myurl}postalcode=23834`,
            headers: {
            "accept": "application/json",
            'apikey':'3aa89d8842065dc09e6c55f752ca06cf',
         },
            method: 'GET',
            dataType: 'json',
            success: function(data){
                // Grab the results from the API JSON return

        console.log(data);
        //Object.keys(data.porperty[0].forEach(function(key,index) {
            // key: the name of the object key
            // index: the ordinal position of the key within the object 
        //    $('#results').append(key, index)
        //}));

        $('#icon').html('<div>'+ data.property[0].address.line1 +'</div>')
        // If our results are greater than 0, continue

        }
}); 
    
    };
});

// ===============================================================


$('.nearby').on('click',function() {
    if ($(this).attr("data")=="School") {
        myurl = "https://api.gateway.attomdata.com/propertyapi/v1.0.0/school/detail?";
        lookup = $(this).text();
        console.log(`${lookup} was clicked`)
        console.log($(this).attr("data"))
  
        $.ajax({
            url: `${myurl}id=00892645`,
            headers: {
            "accept": "application/json",
            'apikey':'3aa89d8842065dc09e6c55f752ca06cf',
         },
            method: 'GET',
            dataType: 'json',
            success: function(data){    
                // Grab the results from the API JSON return

        console.log(data);
        //Object.keys(data.porperty[0].forEach(function(key,index) {
            // key: the name of the object key
            // index: the ordinal position of the key within the object 
        //    $('#results').append(key, index)
        //}));

        $('#icon').html('<div>'+ data.school[0].Identifier.OBInstID +'</div>')
        // If our results are greater than 0, continue

        }
}); 
    
    };
});
