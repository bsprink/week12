//alert();
//$.getJSON("http://www.omdbapi.com/?s=moana", function (data){
	//console.log(data);

	//for(var i = 0; i < data.Search.length; i++){
		//$("body").append("<h1>" + data.Search[i].Title + "</h1>" + "<img src="+ data.Search[i].Poster +" />");
	//}
	//$("body").html("<h1>" + data.Search[0].Title + "</h1>" + "<img src="+ data.Search[0].Poster +" />");
//});


var app = angular.module('movieApp', []);
app.controller('movieCtrl', function($scope, $http) {
    $scope.titleButton = function(){
    	$http.get("http://www.omdbapi.com/?s=moana")
    	.then(function(response){
    		$scope.movies = response.data.Search;

    	});
    };
});