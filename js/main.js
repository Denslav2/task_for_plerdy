let active = 0;
const images = document.querySelectorAll('.slider__img');

document.querySelector('.btn__next').onclick = () => {
    images[active].classList.remove('active-img');
    if (active + 1 == images.length) {
        active = 0;
    }
    else {
        active++;
    }
    images[active].classList.add('active-img');
};



document.querySelector('.btn__prev').onclick = () => {
    images[active].classList.remove('active-img');
    if (active + 1 == images.length) {
        active = 0;
    }
    else {
        ++active;
    }
    images[active].classList.add('active-img');
};

