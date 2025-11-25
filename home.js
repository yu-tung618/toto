window.onload = function () {
  
  // 只在桌機顯示動畫
    if (window.innerWidth < 1024) {

    // 讓 banner 直接顯示 (不淡出)
    const banner = document.querySelector(".banner");  //document.querySelector是所有 CSS 選擇器//
    if (banner) banner.style.opacity = "1";

    const intro = document.getElementById("intro-anim");
    if (intro) intro.style.display = "none";

    return;
}

    // ===== 若是桌機，開始動畫 =====
    const dog = document.querySelector('.dog');
    const cat = document.querySelector('.cat');
    const house = document.querySelector('.house');
    const banner = document.querySelector('.banner');


    banner.classList.add("fade-out");

    setTimeout(() => {  //setTimeout是延遲執行,常用來做動畫、倒數、延遲顯示訊息
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
        // document.getElementById("main-content").style.opacity = "1";
    }, 2500);
};