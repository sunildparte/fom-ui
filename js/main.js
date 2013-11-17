console.log("In JS");
$(document).ready(function() {
$.ajax
	({
	  type: "GET",
	  url: "http://localhost:8080/histomon/sites",
	  contentType: "application/json; charset=utf-8",
	  username: "restapiuser",
	  password: "Z3IzM25mMTNsZA==",
	})	
	.done(function(data) { alert("success: " + data); })
	.fail(function(data) { console.log(data);alert("error: " + data); })
	.always(function() { alert("complete"); });
	
	
});	
console.log("After JS");