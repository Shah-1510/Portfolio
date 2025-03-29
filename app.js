// Auto input
var typed = new Typed(".auto-input", {
    strings: ["BUSINESS INTELLIGENCE ANALYST", "DATA ANALYST","POWER BI DEVELOPER","DATA SCIENTIST"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


// Scroll to Top
const totop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
   if (window.scrollY> 100){
       totop.classList.add("active");
   }else{
       totop.classList.remove("active");
   }

})

 

// load more & Load less
$(document).ready(function () {
    let visibleImages = 8; // Default images to display
    const totalImages = $(".wraper").length;

    $(".wraper").hide().slice(0, visibleImages).fadeIn(); // Ensure only first 8 are shown initially
    $(".load-less").hide(); // Hide "Load Less" button initially

    $(".load-more").click(function () {
        let newVisible = visibleImages + 4;
        $(".wraper").slice(visibleImages, newVisible).fadeIn(); // Show next 4 images
        visibleImages = newVisible;

        if (visibleImages >= totalImages) {
            $(this).fadeOut(); // Hide "Load More" when all images are visible
        }
        $(".load-less").fadeIn(); // Show "Load Less" button when more than 8 are visible
    });

    $(".load-less").click(function () {
        let newVisible = visibleImages - 4;
        $(".wraper").slice(newVisible, visibleImages).fadeOut(); // Hide the last 4 shown images
        visibleImages = newVisible;

        if (visibleImages <= 8) {
            $(this).fadeOut(); // Hide "Load Less" button if we reach 8 images
        }
        $(".load-more").fadeIn(); // Always show "Load More" button when not all images are visible
    });
});



let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.style.display = "block";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    lightboxImg.src = images[currentIndex].src;
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    lightboxImg.src = images[currentIndex].src;
}

// Attach click event to all images
images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
});

