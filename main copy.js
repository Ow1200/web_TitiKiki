
const toggleBtn = document.querySelector('.toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.link__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    // icons.classList.toggle('active');
});