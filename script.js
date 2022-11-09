const carousel = document.querySelector('.carousel');
firstImg = carousel.querySelectorAll('img')[0];
arrowIcons = document.querySelectorAll('.wrapper i');

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14; // getting first img width and adding 14 margin value

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
});

const dragStart = (e) => {
    // updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    //Scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX -  prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
