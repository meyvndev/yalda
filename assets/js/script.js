// sliding corousel

let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto slide change every 5 seconds
setInterval(nextSlide, 5000);


// let currentIndex = 0;
// let slideInterval;

// function showSlide(index) {
//     // ... (your existing code)

//     const translateValue = -currentIndex * 100 + '%';
//     slider.style.transform = 'translateX(' + translateValue + ')';
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }

// function startSlideShow() {
//     slideInterval = setInterval(nextSlide, 5000);
// }

// function stopSlideShow() {
//     clearInterval(slideInterval);
// }

// // Start the slideshow
// startSlideShow();

// Stop the slideshow when needed (e.g., if user interacts with navigation buttons)
// Uncomment the line below and call stopSlideShow() where needed
// stopSlideShow();


//copyright

const currentYear = new Date().getFullYear();
document.getElementById('copyright').innerHTML = `&copy; Copyright Yalda Rwanda Foundation ${currentYear} | Design by <a href="https://instagram.com/iwmvictor">Iwmvictor</a>`;
