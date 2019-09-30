$( document ).ready(function() {
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWNQ6Q9zHEJqIWIXyX0HTOdEJCUgUQ9HM&callback=initMap"
        type="text/javascript"></script>

        //pull data from the vicinity and with a price level and rating -33.8670522,151.1957362
        $("#submit").on("click", function(){
            getStuff();
        });

        function getStuff(){

            var key = "AIzaSyBWNQ6Q9zHEJqIWIXyX0HTOdEJCUgUQ9HM"; 
            var busSearchUrl = "https://api.yelp.com/v3/businesses/search"+key;
            var eventURL = "https://api.yelp.com/v3/events/{id}"+key;
           
            var htmlResults = $("#results");
            var htmlDiv = $("<div>");

            $.ajax({
                url: url,
                method: "GET"
            }).then(function(response){
                var results = response.response.docs;
                var title, section, date, link; 

                console.log(results);
                //console.log("URL Response" + JSON.stringify(results));

                for (var i = 0; i < results.length; i++) {
                    title = results[i].headline.main;
                    section = results[i].section_name;
                    date = results[i].pub_date;
                    link = results[i].web_url;
                    console.log(i);
                    let h2 = $("<h2>");
                    h2.append(title);
                    let h1 = $("<h1>");
                    h1.append(section);
                    let h1_1 = $("<h1>");
                    h1_1.append(date);
                    let p = $("<p>");
                    let hr = $("<hr>");
                    p.append(link);
                    htmlDiv.append(h2,h1,h1_1,p,hr);  
                    htmlResults.append(htmlDiv); 
                }

                
        });
        }
});