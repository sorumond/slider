let transition = 0;
let maxTransition = 0;
let minTransition = 0;

function createSlider(id, slideCount) {
    let container = document.querySelector(`#${id}`);
    // console.log(container);
    container.style.position = 'relative';
    let slideList = `<div class="slide-list">${container.innerHTML}
${container.innerHTML}
${container.innerHTML}</div>`;
    container.innerHTML = slideList;

    let slides = [...container.querySelector('.slide-list').children];
    slides.forEach((slide) => {
        slide.style.minWidth = `${100 / slideCount}%`;
    });
    transition = 0 - (slides[0].offsetWidth * (slides.length / 3));
    let wrapper = document.querySelector('.slide-list');
    console.log (transition);
    wrapper.style.transform = `translateX(${transition}px)`;
    container.innerHTML += `<button class="right"></button>
        <button class="left"></button>`;
    addListener(id);
    minTransition = transition;
    maxTransition = transition + transition;
}

createSlider('cont', 3);



let currentIndex = 1;
console.log(minTransition);
console.log(maxTransition);
console.log(transition);
function moveRight(id) {
    let container = document.querySelector(`#${id}`);
    let slides = [...container.querySelector('.slide-list').children];
    let slideList = container.querySelector('.slide-list');

    transition -= slides[0].offsetWidth;
    slideList.style.transform = `translateX(${transition}px)`;
    console.log(transition);
//     if (currentIndex =) {
//         container.querySelector('.slide-list').appendChild(slides[0]);
// }
}
console.log(transition);

function moveLeft(id) {
    let container = document.querySelector(`#${id}`);
    let slides = [...container.querySelector('.slide-list').children];
    let slideList = container.querySelector('.slide-list');
    transition += slides[0].offsetWidth;
    slideList.style.transform = `translateX(${transition}px)`;
    if (transition > minTransition) {
        console.log('Гуси Летят');
        transition += minTransition;
        slideList.style.transition = '';
        slideList.style.transform = `translateX(${transition}px)`;
        slideList.style.transition = `1.5s`;
        console.log(transition);
    }
}




function addListener(id) {
    document.querySelector(`#${id}`).addEventListener('click', (event) => {
        const isLeftButton = event.target.matches('.left');
        const isRightButton = event.target.matches('.right');

        if (isLeftButton) {
            moveLeft(id);
        } else if (isRightButton) {
            moveRight(id);
        }

    });
}


