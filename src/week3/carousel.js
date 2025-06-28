const slides = document.querySelectorAll(".carousel__slide")
const prevButton = document.querySelector(".nav-button:first-of-type")
const nextButton = document.querySelector(".nav-button:last-of-type")
const currentPage = document.querySelector(".current-page")

let currentIndex = 0
const totalSlides = slides.length

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("is-active", i === index)
  })
  currentPage.textContent = index + 1
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
  showSlide(currentIndex)
})

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides
  showSlide(currentIndex)
})


