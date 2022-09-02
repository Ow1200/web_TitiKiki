
// btn2를 누르면 transform: translate(-100vw)

let translate = 0;

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const container = document.querySelector('.container');

btn1.addEventListener('click', () => {
    container.style.transform = 'translate(0vw)';
    translate = 0;
})

btn2.addEventListener('click', () => {
    container.style.transform = 'translate(-100vw)';
    translate = -100;
})

btn3.addEventListener('click', () => {
    container.style.transform = 'translate(-200vw)';
    translate = -200;
})

// 1. 다음 이전 버튼

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let imgNumber = document.getElementsByClassName('inner').length

let clicks = 1;

nextBtn.addEventListener('click', () => {
    if (!(translate <= -200)) {
        translate -= 100;
        container.style.transform = `translate(${translate}vw)`
    };
})

prevBtn.addEventListener('click', () => {
    if (!(translate >= 0)) {
        translate += 100;
        container.style.transform = `translate(${translate}vw)`
    }
})

// 2. 확장성잡기 (그림/버튼이 몇개 있든 잘 동작하게 하려면)
