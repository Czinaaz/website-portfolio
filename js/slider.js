document.addEventListener("DOMContentLoaded", () => {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const slides = document.querySelectorAll(".project__card");
    const prevBtn = document.querySelector(".slider-btn.prev");
    const nextBtn = document.querySelector(".slider-btn.next");

    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + 20; 

    function updateSliderPosition() {
      sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSliderPosition();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
        }
    });


    // setInterval(() => {
    // if (currentIndex < slides.length - 1) {
    //     currentIndex++;
    // } else {
    //     currentIndex = 0;
    // }
    // updateSliderPosition();
    // }, 8000);
});
