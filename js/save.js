var elements = document.getElementsByClassName("dock-img");
var arrayOfIds = [];
var title = '';
var mouseIsOn = false;

for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener('mouseover', addTitle, false);
	arrayOfIds.push(elements[i].id);
	
}

function addTitle() {
	mouseIsOn = true;
	if (mouseIsOn) {
		title = elements.id;
		console.log(title);
	}



}


var elements = document.getElementsByClassName("dock-icon");
var arrayOfIds = [];

var addTitle = function() {

	for (var i = 0; i < arrayOfIds.length; i++) {

		if (arrayOfIds[i] == elements.id) {

			console.log(elements.id);
		}
	}

}


for (var i = 0; i < elements.length; i++) {
	arrayOfIds.push(elements[i].id);

	elements[i].addEventListener('mouseover', addTitle, false);
}
