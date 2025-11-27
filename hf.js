const btn = document.getElementById('menu-control');
const menu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// 點背景關閉選單
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});