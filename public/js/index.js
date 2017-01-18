$(document).ready(function(){

	$.getJSON("http://localhost:3000/api/articles", function(result){
        console.log(result);
    });

})