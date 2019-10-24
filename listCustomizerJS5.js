var elements = document.getElementsByClassName('clickableTitle');

var elementsArr = Array.prototype.slice.call( elements );

console.log('elementsArr', elementsArr);
if (elementsArr && elementsArr.length) {
	elementsArr.map((element) => {
        console.log('elements map', element);
        element.nextSibling.style.transition = "all 0.5s";
		element.addEventListener("click", () => {
            if (element.nextSibling.style.height == "" || element.nextSibling.style.height == "auto") {
                element.style.borderBottom = "none";
                element.children[0].style.transform = "rotate(0deg)";
                element.nextSibling.style.height = "0";
            } else {
                element.style.borderBottom = "1px solid #f2f2f2";
                element.children[0].style.transform = "rotate(90deg)";
                element.nextSibling.style.height = "";
            }
            
            console.log('elements map2', element);
		  });
	});
}