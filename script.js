// Preloader functionality
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 2000); // Show preloader for at least 2 seconds
  }
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile-nav");
const closeButton = document.querySelector(".close-button");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.add("open");
  mobileNav.classList.add("open");
});

closeButton.addEventListener("click", (e) => {
  e.stopPropagation();
  hamburgerMenu.classList.remove("open");
  mobileNav.classList.remove("open");
});

// Close mobile nav when clicking on the dark overlay (outside the menu)
document.addEventListener("click", (event) => {
  const mobileNavContainer = document.querySelector(".mobile-nav-container");

  // Check if the mobile nav is open and if the click is outside the container and hamburger
  if (
    mobileNav.classList.contains("open") &&
    !mobileNavContainer.contains(event.target) &&
    !hamburgerMenu.contains(event.target)
  ) {
    hamburgerMenu.classList.remove("open");
    mobileNav.classList.remove("open");
  }
});

// Sticky header functionality
const header = document.querySelector("header");
const heroSection = document.querySelector(".hero");
const pageHeroSection = document.querySelector(".page-hero");

// Determine which hero section is present and get its height
let scrollThreshold = 0;
if (heroSection) {
  scrollThreshold = heroSection.offsetHeight - 50; // Use hero height for index.html
} else if (pageHeroSection) {
  scrollThreshold = pageHeroSection.offsetHeight - 50; // Use page-hero height for other pages
}

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// FAQ Accordion functionality
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Modal functionality
const subscribeButton = document.querySelector(".footer-brand .cta-button");
const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseButton = document.querySelector(".modal-content .close-button");

subscribeButton.addEventListener("click", () => {
  modalOverlay.classList.add("visible");
});

modalCloseButton.addEventListener("click", () => {
  modalOverlay.classList.remove("visible");
});

// Close modal when clicking outside the modal content
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove("visible");
  }
});

// Back to Top Button functionality
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    // Show button after scrolling past the hero section
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling animation
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Testimonial Slider functionality
  const testimonialItems = document.querySelectorAll(".testimonial-item");
  let currentTestimonialIndex = 0;

  function showTestimonial(index) {
    testimonialItems.forEach((item, i) => {
      item.classList.remove("active");
      if (i === index) {
        item.classList.add("active");
      }
    });
  }

  function nextTestimonial() {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonialItems.length;
    showTestimonial(currentTestimonialIndex);
  }

  // Show the first testimonial initially
  if (testimonialItems.length > 0) {
    showTestimonial(currentTestimonialIndex);
  }

  // Auto-rotate testimonials every 4 seconds
  setInterval(nextTestimonial, 4000);

  // Add other script functionalities here if needed
});
