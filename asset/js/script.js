const sliderItems = document.querySelectorAll(".slider-item");
const sliderContainer = document.querySelector(".slider-items");
const arrowRight = document.querySelector(".ri-arrow-right-fill");
const arrowLeft = document.querySelector(".ri-arrow-left-fill");
let currentIndex = 0;

sliderItems.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});

arrowRight.addEventListener("click", () => {
  if (currentIndex < sliderItems.length - 1) {
    currentIndex++;
    slide();
  }
});

arrowLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    slide();
  }
});

function slide() {
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide function (uncomment if needed)
// function autoSlide() {
//   if (currentIndex < sliderItems.length - 1) {
//     currentIndex++;
//   } else {
//     currentIndex = 0;
//   }
//   slide();
// }
// setInterval(autoSlide, 3000);
