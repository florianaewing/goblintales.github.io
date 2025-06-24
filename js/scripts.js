let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Go to first slide
function goToLast() {
  showSlides(slideIndex = 1);
}

// Go to last slide
function goToFirst() {
  let slides = document.getElementsByClassName("mySlides");
  showSlides(slideIndex = slides.length);
}

// Go to random slide
function goToRandom() {
  let slides = document.getElementsByClassName("mySlides");
  let randomIndex = Math.floor(Math.random() * slides.length) + 1;
  showSlides(slideIndex = randomIndex);
}
