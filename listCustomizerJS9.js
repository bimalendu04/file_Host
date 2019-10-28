var elements = document.getElementsByClassName('clickableTitle');

var elementsArr = Array.prototype.slice.call(elements);

console.log('elementsArr', elementsArr);
if (elementsArr && elementsArr.length) {
	elementsArr.map((element, index) => {
		console.log('elements map', element);
		element.nextSibling.style.transition = "all 0.5s";
		element.style.transition = "all 0.5s";
		element.addEventListener("click", () => {
			if (element.nextSibling.style.display == "" || element.nextSibling.style.display == "block") {
				element.style.borderBottom = "none";
				element.children[0].style.transform = "rotate(0deg)";
				// element.nextSibling.style.display = "none";
				element.nextSibling.style.overflow = "hidden";
				element.nextSibling.style.paddingTop = "0";
				element.nextSibling.style.paddingBottom = "0";
				element.nextSibling.style.height = "0";
			} else {
				element.style.borderBottom = "1px solid #f2f2f2";
				element.children[0].style.transform = "rotate(90deg)";
				// element.nextSibling.style.display = "block";
				element.nextSibling.style.height = "auto";
				element.nextSibling.style.paddingBottom = "10px";
				elementsArr.map((otherElement, otherIndex) => {
					if (otherIndex !== index) {
						otherElement.style.borderBottom = "none";
						otherElement.children[0].style.transform = "rotate(0deg)";
						otherElement.nextSibling.style.display = "none";
						element.nextSibling.style.overflow = "hidden";
						element.nextSibling.style.paddingTop = "0";
						element.nextSibling.style.paddingBottom = "0";
						element.nextSibling.style.height = "0";
					}
				});
			}

			console.log('elements map2', element);
		});
	});
}