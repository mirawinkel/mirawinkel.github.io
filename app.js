const elementsArray = document.querySelectorAll(".tile");
const textArray = document.querySelectorAll(".textFade");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (let i = 0; i < elementsArray.length; i++) {
        let elem = elementsArray[i]
        let distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();