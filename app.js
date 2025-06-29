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


// Lightbox
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











// Search Box

$(document).ready(function () {
    $("#search-box").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $(".wraper").filter(function () {
            $(this).toggle($(this).find(".project-name").text().toLowerCase().includes(value));
        });
    });
});


// carousal

const carouselTrack = document.querySelector('.carousel-track');
const slides = Array.from(carouselTrack.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let slideWidth = slides[0].getBoundingClientRect().width;
let slideIndex = 1;

// Clone first and last slides for seamless looping
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
carouselTrack.appendChild(firstClone);
carouselTrack.insertBefore(lastClone, slides[0]);

const allSlides = Array.from(carouselTrack.children);
carouselTrack.style.transform = `translateX(-${slideWidth}px)`;

// Adjust slide width on window resize
const updateSlideWidth = () => {
    slideWidth = allSlides[0].getBoundingClientRect().width;
    carouselTrack.style.transition = 'transform 0.3s ease-in-out';
    carouselTrack.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
};

window.addEventListener('resize', updateSlideWidth);

// Move to a specific slide
const moveToSlide = (index) => {
    carouselTrack.style.transition = 'transform 0.5s ease-in-out';
    carouselTrack.style.transform = `translateX(-${slideWidth * index}px)`;
    slideIndex = index;

    setTimeout(() => {
        if (slideIndex === 0) {
            carouselTrack.style.transition = 'none';
            slideIndex = allSlides.length - 2;
            carouselTrack.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
        } else if (slideIndex === allSlides.length - 1) {
            carouselTrack.style.transition = 'none';
            slideIndex = 1;
            carouselTrack.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
        }
    }, 500);
};

// Next and Previous buttons
prevButton.addEventListener('click', () => moveToSlide(slideIndex - 1));
nextButton.addEventListener('click', () => moveToSlide(slideIndex + 1));

// Auto-scroll
const autoScroll = () => moveToSlide(slideIndex + 1);
let autoScrollInterval = setInterval(autoScroll, 1500);

carouselTrack.addEventListener('mouseover', () => clearInterval(autoScrollInterval));
carouselTrack.addEventListener('mouseout', () => autoScrollInterval = setInterval(autoScroll, 3000));

// Mobile Swipe Support
let touchStartX = 0;
let touchEndX = 0;

carouselTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

carouselTrack.addEventListener('touchmove', (e) => {
    touchEndX = e.touches[0].clientX;
});

carouselTrack.addEventListener('touchend', () => {
    if (touchEndX < touchStartX - 30) {
        moveToSlide(slideIndex + 1);
    } else if (touchEndX > touchStartX + 30) {
        moveToSlide(slideIndex - 1);
    }
});


