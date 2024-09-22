function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Set default tab on load
window.onload = function() {
    openTab({ currentTarget: document.getElementById('defaultTab') }, 'entwickeln');
};


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, 
    spaceBetween: 25, 
    watchSlidesVisibility: true, 
    cssMode: true,

    loop: true,
    // centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    overflow: false,
    breakpoints: {
        1260: {
            slidesPerView: 4, 
        },
        768: {
            slidesPerView: 3, 
        },
        100: {
            slidesPerView: 2, 
        },
    },
});