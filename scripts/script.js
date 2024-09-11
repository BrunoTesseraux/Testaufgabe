function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
        const arrow = tablinks[i].nextElementSibling;
        if (arrow) {
            arrow.src = "./../assets/arrow-grey.svg"; // Reset to grey
        }
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
    const activeArrow = evt.currentTarget.nextElementSibling;
    if (activeArrow) {
        activeArrow.src = "./../assets/arrow-orange.svg"; // Set to orange
    }
}const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const slidesToShow = 4;
const totalSlides = slideItems.length;
const slidesPerPage = Math.floor(totalSlides / slidesToShow);

// Create dots based on the number of "pages" of slides
const numberOfDots = Math.ceil(totalSlides / slidesToShow);
dotsContainer.innerHTML = Array.from({ length: numberOfDots }, (_, i) =>
    `<span class="dot${i === 0 ? ' active' : ''}"></span>`
).join('');

const dots = document.querySelectorAll('.dot');

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[Math.floor(currentIndex / slidesToShow)].classList.add('active');
}

function goToSlide(index) {
    const maxIndex = totalSlides - slidesToShow;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    slides.style.transform = `translateX(-${(currentIndex * 100) / slidesToShow}%)`;
    updateDots();
}

function nextSlide() {
    goToSlide(currentIndex + slidesToShow);
}

function prevSlide() {
    goToSlide(currentIndex - slidesToShow);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index * slidesToShow));
});

goToSlide(0);

// Uncomment for auto-slide every 10 seconds
// setInterval(nextSlide, 10000);