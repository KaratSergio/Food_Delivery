const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function updateSliderPosition() {
  const offset = currentIndex * -300; // Ширина одного слайда
  slider.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
});

updateSliderPosition();
