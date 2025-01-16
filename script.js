
let slideIndex = 0;
showSlides();
startAutoSlide();
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
function startAutoSlide() {
    autoSlideTimer = setInterval(() => {
        plusSlides(1);
    }, 2000); // Change image every 2 seconds
}
function revealText() {
    // Hide encrypted text
    document.getElementById("encrypted-text").style.display = "none";
    
    // Show decrypted text
    document.getElementById("decrypted-text").style.display = "block";
}
function showAlert(){
    alert("You promised, no takesies backsies");
}
