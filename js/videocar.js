var currentIndex = 0;
updateCarousel();

function nextSlide() {
  if (currentIndex < document.querySelectorAll(".video-card").length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = document.querySelectorAll(".video-card").length - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  var carousel = document.querySelector(".carousel-container");
  var cardWidth = document.querySelector(".video-card").offsetWidth;
  var newPosition = -currentIndex * cardWidth;
  carousel.style.transform = "translateX(" + newPosition + "px)";
}
