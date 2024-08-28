// Hamburger menu
const hamburgerOutside = document.querySelector(".hamburger-outside");
const hamburgerInside =  document.getElementById("hamburger-inside");
const section = document.querySelectorAll(".section-a");

hamburgerOutside.addEventListener("click", function () {
  hamburgerOutside.classList.toggle("active");
  hamburgerInside.classList.toggle("active");
});

section.forEach((section)=> {
  section.addEventListener("click", function() {
    hamburgerOutside.classList.remove("active");
    hamburgerInside.classList.remove("active");
  })
})

// Slide show
const images = [
  'img/mainvisual1.jpg',
  'img/mainvisual2.jpg',
  'img/mainvisual3.jpg',
]

let currentIndex = 0;

const slideImage = document.getElementById("slide-image");

function nextSlide() {
  // Fade Out
  slideImage.classList.remove('active');
  currentIndex++;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  
  // Switch src
  setTimeout(() => {
    slideImage.src = images[currentIndex];
    // Fade In
    slideImage.classList.add('active');
  }, 1000);
}

function startSlide() {
  setInterval(nextSlide, 5000);
}

window.onload = () => {
  slideImage.classList.add('active');
  startSlide();
};


// Reason
document.addEventListener("DOMContentLoaded", function() {
  const reasons = document.querySelectorAll('.reason');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reasons.forEach(reason => {
    observer.observe(reason);
  });
});

// Review
document.addEventListener("DOMContentLoaded", function() {
  const reviews = document.querySelectorAll('.review');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const review = entry.target;
        // 100% state: apply the transition and final styles
        review.style.transition = 'transform 0.5s ease-out, opacity 1s ease-out';
        review.style.opacity = '1';
        review.style.transform = 'scale(1)';
        observer.unobserve(review); // Stop observing once the animation is triggered
      }
    });
  }, observerOptions);

  // Initial state (0%)
  reviews.forEach((review) => {
    review.style.opacity = '0';
    review.style.transform = 'scale(0.1)';
    observer.observe(review); // Start observing each review
  });
});