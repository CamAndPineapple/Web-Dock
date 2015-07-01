/* --------------------------------------------
Custom Javascript for Web Dock

Author:		Camden Rudisill	
License: 	MIT License (see LICENSE file)
----------------------------------------------- */

// Dock variables
var elements = document.getElementsByClassName('dock-item');
var label = document.getElementsByClassName('label');
var title = document.createElement('span');
var folder = document.createElement('span');
var numOfDockItems = [];

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
			if (label[i].nextSibling.firstChild === folder) {
				label[i].nextSibling.removeChild(folder);
			} else {
			title.innerHTML = numOfDockItems[i];
			label[i].appendChild(title);
			label[i].appendChild(downArrow);
			}
		};
	})(i), false);

	// if(folder), pop up folder when icon clicked on
	elements[i].addEventListener('click', (function(i){
		return function() {
			if (label[i].nextSibling.firstChild === folder) {
				label[i].nextSibling.removeChild(folder);
			} else if (label[i].nextSibling.className !== "folder") {
				return;
			} else {
				label[i].removeChild(title);
				label[i].removeChild(downArrow);
				label[i].nextSibling.appendChild(folder);
			}
		};
	})(i), false);

}









