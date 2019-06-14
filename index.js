// function makeSlider(id, slidesCount) {
//     let slider = document.querySelector(`#${id}`);
//     let slides = [...slider.children];
//     slider.style.overflow = 'hidden';
// }

function createSlider(id, slideCount) {
    let container = document.querySelector(`#${id}`);
    console.log(container);
    let slideList = `<div class="slide-list">${container.innerHTML}</div>`;
    container.innerHTML = slideList;
    [...container.querySelector('.slide-list').children].forEach((slide) => {
        slide.style.minWidth = `${100 / slideCount}%`;
    });

}

createSlider('cont', 3);

function moveRight(id) {
    let container = document.querySelector(`#${id}`);
    let slides = [...container.querySelector('.slide-list').children];

    container.querySelector('.slide-list').appendChild(slides[0]);
}


function moveLeft(id) {
    let container = document.querySelector(`#${id}`);
    let slides = [...container.querySelector('.slide-list').children];

    container.querySelector('.slide-list').insertBefore(slides[slides.length-1], container.querySelector('.slide-list').firstChild);
}

// makeSlider('slider');

