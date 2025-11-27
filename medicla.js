window.onload=function(){
    if(window.innerWidth>=350){
        const animatedElements= document.querySelectorAll(".to-top");// 選取所有要動畫的元素

        function triggerAnimationOnScroll(){
            const windowHeight =window.innerHeight;
            

            animatedElements.forEach(element =>{
                const elementTopPosition=element.getBoundingClientRect().top
                //getBoundingClientRect() 是 DOM 方法，用來取得元素 相對於視窗的大小和位置,,forEach() = 陣列（array）的成員迴圈方法，用來「逐一處理每一個元素」
                if(elementTopPosition<windowHeight*1){
                    element.classList.add("show");
                }// 頁面載入時先檢查一次,用途：在頁面剛載入時先檢查一次元素是否已經在視窗中。效果：確保「一打開網頁就出現的動畫」可以立即觸發。執行時機：只在頁面載入時執行一次。
            })
        }
        triggerAnimationOnScroll();// 滾動時持續檢查,用途：監聽使用者滾動事件，每滾一次就檢查一次元素是否進入視窗。效果：讓「頁面滾動時元素才進場」的動畫可以持續觸發。執行時機：每次滾動都會觸發函式。
        window.addEventListener("scroll",triggerAnimationOnScroll);
    }
}