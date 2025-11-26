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

// 翻卡動畫
(function () {
  const cards = Array.from(document.querySelectorAll('.serve-pic'));

  if (cards.length === 0) return;

  const observer = new IntersectionObserver//IntersectionObserver用來「監聽某個元素是否進入或離開另一個元素的可視範圍（通常是瀏覽器視窗）」。
  ((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const card = entry.target;//entry.isIntersecting 表示元素是否進入視窗範圍。
      if (!card.classList.contains('flip')) {
        //.contains 其實是 DOM 的方法，用來檢查某個元素的 class 名稱或節點關係
        card.classList.add('flip');
        observer.unobserve(card);//一旦元素翻過一次，就停止觀察它。.unobserve() 是 IntersectionObserver 物件的方法，用來「停止觀察某個元素」。

      }//.forEach 是陣列的方法，用來讓你對陣列裡的每個元素依序執行一段程式。這裡 (entries) => { ... } 是一個 回呼函式 (callback function)。entries，裡面包含所有被觀察元素的狀態物件。
    });
  }, { threshold: 0.3 });//目標元素有多少比例進入（或離開）觀察範圍時要觸發回呼。

  cards.forEach(card => {
    // 每次進頁面先移除舊狀態，確保重新整理時能再跑一次
    card.classList.remove('flip', 'no-anim');
    observer.observe(card);
  });
})();
};


