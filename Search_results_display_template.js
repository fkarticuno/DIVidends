



$("#search").on("click", function(){
    getStuff();
});

function getStuff(){

    var key = "_______"
    var url = "https:/___________"+key;

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