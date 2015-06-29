/**
 **** Javascript to add a title to dock icon when hovered over 
 **/


var elements = document.getElementsByClassName('dock-item');
var label = document.getElementsByClassName('label');
var titleDiv = document.createElement("span");
//var triangle = document.createElpent("div");
var codeSnippet = document.getElementById("code");
var js = document.getElementById("js");
var arrayOfIds = [];
js.style.cursor = "pointer";
var title;

// assign id to enable easier editing in custom.css
//titleDiv.className = "title-div";
//triangle.id = "triangle-div";


// store each dock icon's id in an array
// ids are used as the title of the dock icon
for (var i = 0; i < elements.length; i++) {
	arrayOfIds.push(elements[i].id);

}
console.log(arrayOfIds);


// iterate over the array of ids to add title on hover
for (var i = 0; i < arrayOfIds.length; i++) {

	// add title-div when mouse over
	elements[i].addEventListener('mouseover', (function(i) {
		return function() {
			console.log(title);
			titleDiv.innerHTML = arrayOfIds[i];
			label[i].appendChild(titleDiv);

		};
	})(i), false);

	// rpove title-div when mouse out				
	label[i].addEventListener('mouseout', (function(i) {
		return function() {
			elements[i].removeChild(title);
		};
	})(i), false);
}

function showCode() {
	if (codeSnippet.className === "hidden") {
		codeSnippet.className = "";
		js.appendChild(codeSnippet);
	} else {
		codeSnippet.className = "hidden";
	}

}

js.addEventListener('click', showCode, false);