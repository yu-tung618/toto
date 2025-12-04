window.onload=function(){
    if(window.innerHeight>=250){
        const animatedElements =document.querySelectorAll(".left,.right")
   

    function triggerAnimationOnScroll(){
        const windowHeight =window.innerHeight;

        animatedElements.forEach(element=>{
            const elementTopPosition =element.getBoundingClientRect().top;

            if(elementTopPosition<windowHeight*0.8){
                element.classList.add("show");
            }
        })
 };
        triggerAnimationOnScroll();
        window.addEventListener("scroll",triggerAnimationOnScroll);
    }



}