var elements = document.getElementsByClassName('parentClass');

var elementsArr = Array.prototype.slice.call( elements );

if (elementsArr && elementsArr.length) {
	elementsArr.map((element) => {
		element.addEventListener("click", () => {
			element.firstElementChild.setAttribute("style", "display: block;");
		  });
	});
}