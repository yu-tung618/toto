let header = document.getElementById("header");
window.addEventListener("scroll", function(){
    if(this.window.scrollY>50){
        header.classList.add("smallPanel ");
    }else{
        header.classList.remove("smallPanel ");
    }
})