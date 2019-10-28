var elements = document.getElementsByClassName('clickableTitle');

var elementsArr = Array.prototype.slice.call(elements);

console.log('elementsArr', elementsArr);
if (elementsArr && elementsArr.length) {
	elementsArr.map((element, index) => {
		console.log('elements map', element);
		element.nextSibling.style.transition = "all 0.5s";
		element.style.transition = "all 0.5s";
		element.addEventListener("click", () => {
			if (element.nextSibling.style.height == "" || element.nextSibling.style.height == "auto") {
				element.style.borderBottom = "none";
				element.children[0].style.transform = "rotate(0deg)";
				// element.nextSibling.style.display = "none";
				element.nextSibling.style.paddingTop = "0px";
				element.nextSibling.style.paddingBottom = "0px";
				element.nextSibling.style.height = "0px";
			} else {
				element.style.borderBottom = "1px solid #f2f2f2";
				element.children[0].style.transform = "rotate(90deg)";
				// element.nextSibling.style.display = "block";
				element.nextSibling.style.height = "auto";
				element.nextSibling.style.paddingBottom = "10px";
				element.nextSibling.style.marginTop = "20px";
				elementsArr.map((otherElement, otherIndex) => {
					if (otherIndex !== index) {
						otherElement.style.borderBottom = "none";
						otherElement.children[0].style.transform = "rotate(0deg)";
						// otherElement.nextSibling.style.display = "none";
						element.nextSibling.style.paddingTop = "0px";
						element.nextSibling.style.paddingBottom = "0px";
						element.nextSibling.style.marginTop = "0px";
						element.nextSibling.style.height = "0px";
					}
				});
			}

			console.log('elements map2', element);
		});
	});
}