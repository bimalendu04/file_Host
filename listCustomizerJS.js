var elements = document.getElementsByClassName('parentClass');

var elementsArr = Array.prototype.slice.call( elements );

console.log('elementsArr', elementsArr);
if (elementsArr && elementsArr.length) {
	elementsArr.map((element) => {
        console.log('elements map', element);
		element.addEventListener("click", () => {
            element.firstElementChild.setAttribute("style", "display: block;");
            
            console.log('elements map2', element);
		  });
	});
}