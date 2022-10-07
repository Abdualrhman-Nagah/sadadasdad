const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
 /*********************button up**********************/
 let button = document.getElementById('but')
 window.onscroll = function(){
     if (window.pageYOffset >= 300){
         button.style.display = 'block';
     }else{
         button.style.display = 'none';
     }
 }
 button.onclick = function(){
     window.scrollTo(0,0);
 }
 /*************************end************************/