(function(){
var elements = document.getElementsByClassName("dock-img");

for(var i = 0; i < elements.length; i++) {
	elements[i].addEventListener('mouseover', sayalert, false); 
}

function sayalert(){

	console.log("it worked");
}






})();
