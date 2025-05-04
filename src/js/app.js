// Import necessary modules
import { initCart } from './modules/cart.js';
import { initProducts } from './modules/products.js';
import { initUI } from './modules/ui.js';
import { initTheme } from './modules/theme.js';
import { initCarousel } from './modules/carousel.js';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the UI components
  initUI();
  
  // Initialize the theme functionality
  initTheme();
  
  // Initialize the product data and rendering
  initProducts();
  
  // Initialize the shopping cart functionality
  initCart();
  
  // Initialize the carousel if it exists on the page
  const carouselTrack = document.getElementById('carousel-track');
  if (carouselTrack) {
    initCarousel();
  }
});