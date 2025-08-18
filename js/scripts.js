let slideIndex = 1; // Initialize slideIndex before fetch

fetch('data.json')
  .then(response => response.json())
  .then(images => {
    console.log('Images loaded:', images);  // <--- Add this line here for debugging

    const container = document.getElementById('slideshow-container');
    images.forEach(({ filename, title }) => {
      const slideDiv = document.createElement('div');
      slideDiv.className = 'mySlides fade';
      slideDiv.style.display = 'none'; // hide all initially

      slideDiv.innerHTML = `
        <img src="images/artwork/${filename}" alt="${title}">
        <div class="text">${title}<p></p><h3></h3></div>
      `;

      container.appendChild(slideDiv);
    });
    
    // Show the first slide after all slides are loaded
    showSlides(slideIndex);
  })
  .catch(err => {
    console.error('Error loading slideshow data:', err);
  });


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
  // let dots = document.getElementsByClassName("dot"); // Uncomment if you add dots later

  if (slides.length === 0) return; // Safety check if no slides

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // if (dots.length > 0) {
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  // }

  slides[slideIndex - 1].style.display = "block";

  // if (dots.length > 0) {
  //   dots[slideIndex - 1].className += " active";
  // }
}

// Go to last slide
function goToLast() {
  let slides = document.getElementsByClassName("mySlides");
  showSlides(slideIndex = slides.length);
}

// Go to first slide
function goToFirst() {
  showSlides(slideIndex = 1);
}

// Go to random slide
function goToRandom() {
  let slides = document.getElementsByClassName("mySlides");
  let randomIndex = Math.floor(Math.random() * slides.length) + 1;
  showSlides(slideIndex = randomIndex);
}

// Prevent right-click and dragging on images
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});

// Fix vh unit issue on mobile browsers
function updateVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', updateVH);
window.addEventListener('orientationchange', updateVH);
updateVH();
