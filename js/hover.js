/**
**** Javascript to add a title to dock icon when hovered over 
**/ 


var elements = document.getElementsByClassName('dock-icon');
var titleDiv = document.createElement("div");
// assign id to edit div in custom.css
titleDiv.id = "title-div"
var arrayOfIds = [];


// store each dock icon's id in an array
// ids are used as the title of the dock icon
for (var i = 0; i < elements.length; i++) {
	arrayOfIds.push(elements[i].id);
}

// iterate over the array of ids to add title on hover
for (var i = 0; i < arrayOfIds.length; i++) {

	// add title-div when mouse over
	elements[i].addEventListener('mouseover', (function(i) {
		return function() {
			titleDiv.innerHTML = '<span class="title-text">' + arrayOfIds[i] + '</span>';
			elements[i].appendChild(titleDiv);
		};
	})(i), false);

	// remove title-div when mouse out				
	elements[i].addEventListener('mouseout', (function(i) {
		return function() {
			elements[i].removeChild(titleDiv);
		};
	})(i), false);
}