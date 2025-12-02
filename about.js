window.onload=function(){
  
  // about動畫

if(window.innerWidth >= 350){
    const animatedElements= document.querySelectorAll(".about-left, .about-right");// 選取所有要動畫的元素

    function triggerAnimationOnScroll(){
        const windowHeight = window.innerHeight;

        animatedElements.forEach(element =>{
            const elementTopPosition = element.getBoundingClientRect().top;//getBoundingClientRect() 是 DOM 方法，用來取得元素 相對於視窗的大小和位置
            if(elementTopPosition < windowHeight * 0.8){
                element.classList.add("show");
            } // 頁面載入時先檢查一次,用途：在頁面剛載入時先檢查一次元素是否已經在視窗中。效果：確保「一打開網頁就出現的動畫」可以立即觸發。執行時機：只在頁面載入時執行一次。
        });
    }

    triggerAnimationOnScroll();// 滾動時持續檢查,用途：監聽使用者滾動事件，每滾一次就檢查一次元素是否進入視窗。效果：讓「頁面滾動時元素才進場」的動畫可以持續觸發。執行時機：每次滾動都會觸發函式。
    window.addEventListener('scroll', triggerAnimationOnScroll);
}



 // team動畫

if(window.innerWidth >= 350){
    const animatedElements= document.querySelectorAll(".to-top");// 選取所有要動畫的元素

    function triggerAnimationOnScroll(){
        const windowHeight = window.innerHeight;

        animatedElements.forEach(element =>{
            const elementTopPosition = element.getBoundingClientRect().top;//getBoundingClientRect() 是 DOM 方法，用來取得元素 相對於視窗的大小和位置
            if(elementTopPosition < windowHeight * 0.8){
                element.classList.add("show");
            } // 頁面載入時先檢查一次,用途：在頁面剛載入時先檢查一次元素是否已經在視窗中。效果：確保「一打開網頁就出現的動畫」可以立即觸發。執行時機：只在頁面載入時執行一次。
        });
    }

    triggerAnimationOnScroll();// 滾動時持續檢查,用途：監聽使用者滾動事件，每滾一次就檢查一次元素是否進入視窗。效果：讓「頁面滾動時元素才進場」的動畫可以持續觸發。執行時機：每次滾動都會觸發函式。
    window.addEventListener('scroll', triggerAnimationOnScroll);
}

  
  
  
  
  //照片輪播
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides .hospital-pic');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let index = 1; //目前輪播到第幾張圖片（從 1 開始計數）
let isDragging = false; //用來判斷使用者 是否正在拖曳滑鼠或手指,這樣 JS 就知道什麼時候要移動輪播，什麼時候不要
let startX = 0; //記錄拖曳開始時的 X 座標
let currentTranslate = 0; //主要用於拖曳時即時更新圖片位置
let animationID = 0;//用來存 requestAnimationFrame 的 ID拖曳動畫 JS 會用 requestAnimationFrame 持續更新位置結束拖曳或重置動畫時，用 cancelAnimationFrame(animationID) 停掉動畫



// 顯示指定圖片
function showSlide(i) {
  index = i; // 不再做邊界判斷，直接移動到指定 index
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(-${index * 100}%)`;
}

  slides.style.transition = 'transform 0.5s ease-in-out';//建議css和js都寫
  slides.style.transform = `translateX(${-index * 100}%)`;//這行控制輪播容器 水平移動,-index * 100% 表示：第 0 張 → translateX(0%) → 不動,第 1 張 → translateX(-100%) → 往左移一個容器寬度,第 2 張 → translateX(-200%) → 往左移兩個容器寬度,因為每張圖片佔 100% 寬度，所以這樣可以正好切換到對應圖片



// 左右按鈕
prev.addEventListener('click', () => { showSlide(index - 1); resetInterval(); }); //假設現在 index 是 2（第三張圖）,index - 1 → 1就是第二張。也就是：把圖片切到前一張
next.addEventListener('click', () => { showSlide(index + 1); resetInterval(); });//避免：還沒看完圖片就被自動跳走,自動播放的時間亂掉,resetInterval()不需要參數

// 自動輪播
let autoSlide = setInterval(() => { showSlide(index + 1); }, 3000);//setInterval()：每隔一段時間執行裡面的程式,showSlide(index + 1) → 跳到下一張,每 3000 毫秒（3 秒） 執行一次
function resetInterval() {
  clearInterval(autoSlide); //停止之前的 setInterval,停止「每 3 秒換下一張」的程式
  autoSlide = setInterval(() => { showSlide(index + 1); }, 3000);//重新設一個新的計時器,每 3 秒繼續自動輪播
}

// ===== 拖曳功能 =====
slides.addEventListener('mousedown', dragStart);
slides.addEventListener('touchstart', dragStart);

slides.addEventListener('mousemove', dragMove);
slides.addEventListener('touchmove', dragMove);

slides.addEventListener('mouseup', dragEnd);
slides.addEventListener('touchend', dragEnd);

slides.addEventListener('mouseleave', dragEnd);

function dragStart(e) {
  isDragging = true;
  startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;//? 三元運算子（if 的縮寫）,如果條件成立 → 回傳「? 後面這個」如果條件不成立 → 回傳「: 後面這個」
  slides.style.transition = 'none';//要讓圖片 “跟著你的手指即時移動”,如果 transition 還開著，會滑得很卡、延遲、拖不動
  cancelAnimationFrame(animationID);//如果前一個動畫正在跑，先把它停止
}

function dragMove(e) {
  if(!isDragging) return;//結束函式
  const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  const moveX = x - startX;//算出 拖曳的水平距離,公式：目前座標 - 起始座標
  slides.style.transform = `translateX(${-index * 100 + moveX / slides.clientWidth * 100}%)`;//-index * 100,控制圖片本身「切到第幾張」,每張圖片佔 100% 寬度,例如 index = 2 → translateX(-200%) → 顯示第 3 張圖片,slides.clientWidth 是輪播區寬度,MoveX / slides.clientWidth * 100 → 移動多少 %
}

function dragEnd(e) {
  if(!isDragging) return;
  isDragging = false;//表示「拖曳結束
  const x = e.type.includes('mouse') ? e.pageX : (e.changedTouches ? e.changedTouches[0].clientX : startX);
  const diff = x - startX;

  slides.style.transition = 'transform 0.5s ease-in-out';

  if(diff > 50) showSlide(index - 1);
  else if(diff < -50) showSlide(index + 1);
  else showSlide(index);

  resetInterval();
}
slides.addEventListener('transitionend', () => {
  if (images[index].classList.contains('clone-first')) {
    slides.style.transition = 'none'; // 取消動畫
    index = 1; // 跳回真正的第一張
    slides.style.transform = `translateX(-${index * 100}%)`;
    setTimeout(() => slides.style.transition = 'transform 0.5s ease-in-out'); // 恢復動畫
  }
  if (images[index].classList.contains('clone-last')) {
    slides.style.transition = 'none';
    index = images.length - 2; // 跳回真正的最後一張
    slides.style.transform = `translateX(-${index * 100}%)`;
    setTimeout(() => slides.style.transition = 'transform 0.5s ease-in-out');
  }
});
}