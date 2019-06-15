let transition = 0;
let maxTransition = 0;
let minTransition = 0;
let container = document.querySelector('#cont');

function createSlider(id, slideCount) {
    let container = document.querySelector(`#${id}`);
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
    console.log(transition);
    wrapper.style.transform = `translateX(${transition}px)`;
    container.innerHTML += `<button class="right"></button>
        <button class="left"></button>`;
    minTransition = transition;
    maxTransition = transition + transition;
}

createSlider('cont', 3);

console.log(minTransition);
console.log(maxTransition);
console.log(transition);

function moveRight() {
    let container = document.querySelector(`#cont`);
    let slides = [...container.querySelector('.slide-list').children];
    let slideList = container.querySelector('.slide-list');
    transition -= slides[0].offsetWidth;
    slideList.style.transition = `.75s`;
    slideList.style.transform = `translateX(${transition}px)`;
    container.querySelector('.right').removeEventListener('click', moveRight);
}

console.log(transition);

function moveLeft() {
    let container = document.querySelector(`#cont`);
    let slides = [...container.querySelector('.slide-list').children];
    let slideList = container.querySelector('.slide-list');
    transition += slides[0].offsetWidth;
    slideList.style.transition = `.75s`;
    slideList.style.transform = `translateX(${transition}px)`;
    container.querySelector('.left').removeEventListener('click', moveLeft);
}

container.querySelector('.left').addEventListener('click', moveLeft);
container.querySelector('.right').addEventListener('click', moveRight);

document.querySelector('.slide-list').addEventListener('transitionend', (event) => {
    document.querySelector('#cont').querySelector('.right').addEventListener('click', moveRight);
    document.querySelector('#cont').querySelector('.left').addEventListener('click', moveLeft);
    let container = document.querySelector(`#cont`);
    let slideList = container.querySelector('.slide-list');
    if (transition > minTransition) {
        transition += minTransition;
        slideList.style.transition = '';
        slideList.style.transform = `translateX(${transition}px)`;
    } else if (transition < maxTransition) {
        transition -= minTransition;
        slideList.style.transition = '';
        slideList.style.transform = `translateX(${transition}px)`;
    }
});
