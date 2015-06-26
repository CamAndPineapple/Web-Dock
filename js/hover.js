var elements = document.getElementsByClassName('dock-icon');

var arrayOfIds = [];

for (var i = 0; i < elements.length; i++) {
	arrayOfIds.push(elements[i].id);
}

for (var i = 0; i < arrayOfIds.length; i++) {
    elements[i].addEventListener('mouseover', (function(i) {
        return function() {
            elements[i].innerHTML = "<h1>" + arrayOfIds[i] + "<h1>";
        };
    })(i), false);
}



