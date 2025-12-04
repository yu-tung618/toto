
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

//選單顏色
  const page = window.location.pathname.split("/"
  ).pop();//window.location.pathname → 取得目前網址的路徑部分,split("/")把字串用 / 切開，變成陣列：["", "about.html"],pathname 就是 /about.html(之類的)
  const links = document.querySelectorAll("nav a");
  links.forEach(link =>{
    if(link.getAttribute("href") === page){
      link.classList.add("change");//getAttribute("href")取得這個 <a> 的 href 屬性值
    }
  })