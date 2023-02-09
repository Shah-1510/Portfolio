// Auto input
var typed = new Typed(".auto-input", {
    strings: ["DATA ANALYST","BUSINESS ANALYST","POWER BI DEVELOPER","FRONT END DEVELOPER"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


// Scroll to Top
const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
   if (window.pageYOffset > 100){
       totop.classList.add("active");
   }else{
       totop.classList.remove("active");
   }

})

 

// load more & Load less
$(document).ready(function(){
    $(".wraper").slice(0, 8).fadeIn();
    $(".load-more").click(function(){
        $(".wraper").slice(0,20).fadeIn();
        $(this).fadeout();
    });
    $(".load-less").click(function(){
        $(".wraper").slice(0,8).fadeOut();
        $(this).fadeout();
    });
    
});
