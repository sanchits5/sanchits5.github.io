const NAV_HEIGHT = document.querySelector('.navbar').offsetHeight;

document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});

// Timeline reveal
function revealTimeline() {
  const items = document.querySelectorAll('.timeline li');
  const trigger = window.innerHeight * 0.8;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < trigger) {
      item.classList.add('visible');
    } else {
      item.classList.remove('visible');
    }
  });
}

// Slideshow class for multiple slideshows
class Slideshow {
  constructor(container, index) {
    this.container = container;
    this.slides = container.getElementsByClassName("mySlides");
    this.slideIndex = index;
    this.showSlides();
  }

  showSlides() {
    // Hide all slides
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }

    // Increment slide index and reset if necessary
    this.slideIndex++;
    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }


    // Show current slide and activate corresponding dot
    this.slides[this.slideIndex - 1].style.display = "block";

    // Schedule the next slide
    setTimeout(() => this.showSlides(), 2000);
  }
}

// Initialize all slideshows on the page
document.addEventListener("DOMContentLoaded", () => {
  const slideshowContainers = document.getElementsByClassName("slideshow-container");
  for (let i = 0; i < slideshowContainers.length; i++) {
    new Slideshow(slideshowContainers[i], 0);
  }
});

window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);