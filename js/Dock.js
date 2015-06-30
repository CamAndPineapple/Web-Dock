/**
 **** Javascript to add a title to dock icon when hovered over 
 **/


var elements = document.getElementsByClassName('dock-item');
var label = document.getElementsByClassName('label');

var folders = document.getElementsByClassName('folder');
var folder = document.createElement('span');
console.log(folders);

var title = document.createElement('span');
var codeSnippet = document.getElementById("code");
var js = document.getElementById("js");
var numOfDockItems = [];
js.style.cursor = "pointer";
var title;


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

	// add title-div when mouse over
	elements[i].addEventListener('mouseover', (function(i) {
		return function() {
			title.innerHTML = numOfDockItems[i];
			label[i].appendChild(title);
			label[i].appendChild(downArrow);


		};
	})(i), false);

}

for (var i = 0; i < numOfDockItems.length; i++) {
// if(folder), pop up folder when icon clicked on
		elements[i].addEventListener('click', (function(i){
			return function() {
			label[i].nextSibling.appendChild(folder);

		};
		})(i), false);

}


// show js code snippet when javascript clicked
function showCode() {
	if (codeSnippet.className === "hidden") {
		codeSnippet.className = "";
		js.appendChild(codeSnippet);
	} else {
		codeSnippet.className = "hidden";
	}

}

js.addEventListener('click', showCode, false);