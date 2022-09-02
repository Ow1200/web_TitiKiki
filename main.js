const slideBox = document.querySelector('.slideBox')

const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

let imgNumber = document.getElementsByClassName('mainImg').length;

let translate = 0;

let imgEnd = imgNumber * -100 + 100;

nextBtn.addEventListener('click', () => {
    if (!(translate <= imgEnd)) {
        translate -= 100;
        slideBox.style.transform = `translate(${translate}vw)`;
    }
})

prevBtn.addEventListener('click', () => {
    if (!(translate >= 0)) {
        translate += 100;
        slideBox.style.transform = `translate(${translate}vw)`;
    }
})

const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.link__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    // icons.classList.toggle('active');
});