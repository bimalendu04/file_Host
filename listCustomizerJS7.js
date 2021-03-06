var elements = document.getElementsByClassName('clickableTitle');

var elementsArr = Array.prototype.slice.call(elements);

console.log('elementsArr', elementsArr);
if (elementsArr && elementsArr.length) {
    elementsArr.map((element, index) => {
        console.log('elements map', element);
        element.nextSibling.style.transition = "all 0.5s";
        element.addEventListener("click", () => {
            if (element.nextSibling.style.display == "" || element.nextSibling.style.display == "block") {
                element.style.borderBottom = "none";
                element.children[0].style.transform = "rotate(0deg)";
                element.nextSibling.style.display = "none";
                elementsArr.map((otherElement, otherIndex) => {
                    if (otherIndex !== index) {
                        otherElement.style.borderBottom = "none";
                        otherElement.children[0].style.transform = "rotate(0deg)";
                        otherElement.nextSibling.style.display = "none";
                    }
                });
            } else {
                element.style.borderBottom = "1px solid #f2f2f2";
                element.children[0].style.transform = "rotate(90deg)";
                element.nextSibling.style.display = "block";
            }

            console.log('elements map2', element);
        });
    });
}