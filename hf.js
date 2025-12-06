
const btn = document.querySelector('.menu-btn');
const overlay = document.getElementById('overlay');


btn.addEventListener("click",function(){
  overlay.classList.toggle("active");
})

//選單顏色
  const page = window.location.pathname.split("/"
  ).pop();//window.location.pathname → 取得目前網址的路徑部分,split("/")把字串用 / 切開，變成陣列：["", "about.html"],pathname 就是 /about.html(之類的)
  const links = document.querySelectorAll("nav a");
  links.forEach(link =>{
    if(link.getAttribute("href") === page){
      link.classList.add("change");//getAttribute("href")取得這個 <a> 的 href 屬性值
    }
  })