function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        arrows = tablinks[i].nextElementSibling; // Assuming the arrow image is next to the tablink
        arrows.src = "./../assets/arrow-grey.svg"; // Reset to grey
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
    evt.currentTarget.nextElementSibling.src = "./../assets/arrow-orange.svg"; // Set to orange

}
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const slidesToShow = 4; 
const totalSlides = slideItems.length;
const slidesPerPage = Math.floor(totalSlides / slidesToShow);

// Create dots based on the number of "pages" of slides
for (let i = 0; i < Math.ceil(totalSlides / slidesToShow); i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

// Update the dot navigation
function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[Math.floor(currentIndex / slidesToShow)].classList.add('active');
}

// Go to a specific slide
function goToSlide(index) {
    const maxIndex = totalSlides - slidesToShow;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    slides.style.transform = `translateX(-${(currentIndex * 100) / slidesToShow}%)`;
    updateDots();
}

// Next slide function
function nextSlide() {
    goToSlide(currentIndex + slidesToShow);
}

// Previous slide function
function prevSlide() {
    goToSlide(currentIndex - slidesToShow);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Dots navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index * slidesToShow);
    });
});

// Initialize the first slide
goToSlide(0);

// Auto-slide every 10 seconds
// setInterval(nextSlide, 10000);