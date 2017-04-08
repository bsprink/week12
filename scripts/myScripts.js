//alert()
$.getJSON("http://www.omdbapi.com/?s=moana", function (data){
	console.log(data);
	$("results").html("<h1>" + data.Search[0].Title + "</h1>" + "<br><img src="+ data.Search[0].Poster +" ")
});
