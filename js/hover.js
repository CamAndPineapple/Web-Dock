var elements = document.getElementsByClassName('dock-icon');
var titleDiv = document.getElementById('title-div');
var arrayOfIds = [];


// store each dock icon's id in an array
for (var i = 0; i < elements.length; i++) {
	arrayOfIds.push(elements[i].id);
}

// iterate over the array of ids to add title on hover
for (var i = 0; i < arrayOfIds.length; i++) {
	elements[i].addEventListener('mouseover', (function(i) {
		return function() {
			titleDiv.innerHTML = arrayOfIds[i];
			elements[i].appendChild(titleDiv);

		

				elements[i].addEventListener('mouseout', (function(i) {
		return function() {
			elements[i].removeChild(titleDiv);
			console.log('trigger');	
		};
	})(i), false);



		};
	})(i), false);
}