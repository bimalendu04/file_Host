var elements = document.getElementsByClassName('clickableTitle');

var elementsArr = Array.prototype.slice.call( elements );

console.log('elementsArr', elementsArr);
if (elementsArr && elementsArr.length) {
	elementsArr.map((element) => {
        console.log('elements map', element);
		element.addEventListener("click", () => {
            if (element.nextSibling.style.display == "" || element.nextSibling.style.display == "block") {
                element.nextSibling.style.display = "none";
            } else {
                element.nextSibling.style.display = "block";
            }
            
            console.log('elements map2', element);
		  });
	});
}