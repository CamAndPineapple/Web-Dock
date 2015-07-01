// code text variables 
var JScodeSnippet = document.getElementById("js-code");
var CSScodeSnippet = document.getElementById("css-code");
var js = document.getElementById("js");
var css = document.getElementById("css");
js.style.cursor = "pointer";
css.style.cursor = "pointer";


// show js code snippet when javascript clicked
function showCode(code) {
	if (code.id === "js") {
		if (JScodeSnippet.className === "hidden") {
			JScodeSnippet.className = "code";
		} else {
			JScodeSnippet.className = "hidden";
		}
	} else if (code.id === "css") {

		if (CSScodeSnippet.className === "hidden") {
			CSScodeSnippet.className = "code";
		} else {
			CSScodeSnippet.className = "hidden";
		}
	}

}

js.addEventListener('click', function() {
	showCode(js);
}, false);

css.addEventListener('click', function() {
	showCode(css);
}, false);