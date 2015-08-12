/* --------------------------------------------
Custom Javascript for Web Dock

Author:		Camden Rudisill	
License: 	MIT License (see LICENSE file)
----------------------------------------------- */
var Dock = (function(){

	var elements = document.getElementsByClassName('dock-item'),
	label = document.getElementsByClassName('label'),
	span = document.createElement('span'),
	numOfDockItems = [];

	// down arrow attached to label 
	// assigned class in order to style in Dock.css
	var downArrow = document.createElement("div");
	downArrow.className = "down-arrow";


// store each dock icon's id in an array
// ids are used as the title of the dock icon
for (var i = 0; i < elements.length; i++) {
	numOfDockItems.push(elements[i].id);
}


// iterate over the array of ids to add title on hover
for (var i = 0; i < numOfDockItems.length; i++) {

	// add labels to icons when moused over
	elements[i].addEventListener('mouseover', (function(i) {
		return function() {
			if (label[i].nextSibling.firstChild === span) {
				label[i].nextSibling.removeChild(span);
			} else {
				span.innerHTML = numOfDockItems[i];
				label[i].appendChild(span);
				label[i].appendChild(downArrow);
			}
		};
	})(i), false);

	// if(folder), pop up folder when icon clicked on
	elements[i].addEventListener('click', (function(i) {
		return function() {
			if (label[i].nextSibling.firstChild === span) {
				label[i].nextSibling.removeChild(span);
			} else if (label[i].nextSibling.className !== "folder") {
				return;
			} else {
				label[i].removeChild(span);
				label[i].removeChild(downArrow);
				label[i].nextSibling.appendChild(span);
			}
		};
	})(i), false);
}
})();
