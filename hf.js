
const btn = document.querySelector('.menu-btn');
const btnClose = document.querySelector('.menu-btn1');
const overlay = document.getElementById('overlay');
const checkbox = document.getElementById('menu-control');

// 打開選單
btn.addEventListener('click', (e) => {
  e.preventDefault(); // 阻止跳到頂部
  checkbox.checked = true;
  overlay.classList.add('active');
});

// 關閉選單
btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  checkbox.checked = false;
  overlay.classList.remove('active');
});

// 點灰色背景也能關閉
overlay.addEventListener('click', () => {
  checkbox.checked = false;
  overlay.classList.remove('active');
});
