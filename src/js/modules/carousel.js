// Carousel Module

// Initialize carousel functionality
export function initCarousel() {
  const track = document.getElementById('carousel-track');
  const slides = track ? track.querySelectorAll('.carousel-slide') : [];
  const nextButton = document.querySelector('.next-btn');
  const prevButton = document.querySelector('.prev-btn');
  const dotsContainer = document.querySelector('.carousel-dots');
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
  
  if (!track || slides.length === 0) return;
  
  let currentIndex = 0;
  let interval;
  
  // Set up dots if they exist
  if (dots.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
      });
    });
  }
  
  // Set up next/prev buttons if they exist
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      goToSlide((currentIndex + 1) % slides.length);
      resetInterval();
    });
  }
  
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      goToSlide((currentIndex - 1 + slides.length) % slides.length);
      resetInterval();
    });
  }
  
  // Function to go to a specific slide
  function goToSlide(index) {
    if (currentIndex === index) return;
    
    // Update track position
    track.style.transform = `translateX(-${index * 100}%)`;
    
    // Update dots if they exist
    if (dots.length > 0) {
      dots[currentIndex].classList.remove('active');
      dots[index].classList.add('active');
    }
    
    currentIndex = index;
  }
  
  // Function to advance to the next slide automatically
  function nextSlide() {
    goToSlide((currentIndex + 1) % slides.length);
  }
  
  // Reset the interval timer (used when manually changing slides)
  function resetInterval() {
    clearInterval(interval);
    startInterval();
  }
  
  // Start the automatic slide rotation
  function startInterval() {
    interval = setInterval(nextSlide, 5000);
  }
  
  // Initialize the automatic rotation
  startInterval();
  
  // Pause rotation when hovering over the carousel
  track.addEventListener('mouseenter', () => {
    clearInterval(interval);
  });
  
  // Resume rotation when mouse leaves the carousel
  track.addEventListener('mouseleave', () => {
    startInterval();
  });
}