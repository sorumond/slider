
function createSlider(id, slideCount) {
    let container = document.querySelector(`#${id}`);
    console.log(container);
    container.style.position = 'relative';
    let slideList = `<div class="slide-list">${container.innerHTML}</div>`;
    container.innerHTML = slideList;
    [...container.querySelector('.slide-list').children].forEach((slide) => {
        slide.style.minWidth = `${100 / slideCount}%`;
    });
    container.innerHTML += `<button class="right"></button>
        <button class="left"></button>`;
    addListener(id);
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


function addListener (id) {
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


