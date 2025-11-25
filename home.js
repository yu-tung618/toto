window.onload = function () {

    const isDesktop = window.innerWidth >= 1024;
    const cameFromOutside = !document.referrer || !document.referrer.includes(location.hostname);

    // 只有桌機且從外部進入首頁才播放動畫
    if (isDesktop && cameFromOutside) {
        const dog = document.querySelector('.dog');
        const cat = document.querySelector('.cat');
        const house = document.querySelector('.house');
        const banner = document.querySelector('.banner');

        banner.classList.add("fade-out");

        setTimeout(() => {//setTimeout是延遲執行,常用來做動畫、倒數、延遲顯示訊息
            dog.classList.add('intro-center');
            cat.classList.add('intro-center');
            house.classList.add('intro-center');
        }, 100);

        setTimeout(() => {
            dog.classList.remove('intro-center');
            cat.classList.remove('intro-center');
            house.classList.remove('intro-center');

            dog.classList.add('to-logo');
            cat.classList.add('to-logo');
            house.classList.add('to-logo');
        }, 1800);

        setTimeout(() => {
            banner.classList.remove("fade-out");
            banner.classList.add("fade-in");
        }, 2500);
    } else {
        // 其他情況（手機或從內頁回首頁）直接顯示 banner
        const banner = document.querySelector(".banner");
        if (banner) banner.style.opacity = "1";

        const intro = document.getElementById("intro-anim");
        if (intro) intro.style.display = "none";
    }

    // about動畫
    if(window.innerWidth>=1024){
        const animatedElements= document.querySelectorAll(".about-left, .about-right")// 選取所有要動畫的元素

        function triggerAnimationOnScroll(){ //getBoundingClientRect() 是 DOM 方法，用來取得元素 相對於視窗的大小和位置
            const windowHeight = window.innerHeight;

            animatedElements.forEach(element =>{const elementTopPosition = element.getBoundingClientRect().top;
            if(elementTopPosition<windowHeight*0.8){
                element.classList.add("show");
            }    
            });
        }
        // 頁面載入時先檢查一次,用途：在頁面剛載入時先檢查一次元素是否已經在視窗中。效果：確保「一打開網頁就出現的動畫」可以立即觸發。執行時機：只在頁面載入時執行一次。
  triggerAnimationOnScroll();

  // 滾動時持續檢查,用途：監聽使用者滾動事件，每滾一次就檢查一次元素是否進入視窗。效果：讓「頁面滾動時元素才進場」的動畫可以持續觸發。執行時機：每次滾動都會觸發函式。
  window.addEventListener('scroll', triggerAnimationOnScroll);
    };
};


