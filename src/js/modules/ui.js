// UI Module

// Initialize UI components
export function initUI() {
  setupLoginModal();
  setupMobileMenu();
  setupScrollButtons();
}

// Setup login modal
function setupLoginModal() {
  const loginBtn = document.getElementById('login-btn');
  const loginModal = document.getElementById('login-modal');
  const closeModalButtons = document.querySelectorAll('.close-modal');
  const backdrop = document.getElementById('backdrop');
  const loginForm = document.getElementById('login-form');
  
  if (loginBtn && loginModal && backdrop) {
    loginBtn.addEventListener('click', () => {
      loginModal.classList.add('active');
      backdrop.classList.add('active');
    });
    
    closeModalButtons.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(modal => {
          modal.classList.remove('active');
        });
        backdrop.classList.remove('active');
      });
    });
    
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate login
        alert('This is a demo. In a real application, you would be logged in now.');
        loginModal.classList.remove('active');
        backdrop.classList.remove('active');
      });
    }
  }
}

// Setup mobile menu for responsive design
function setupMobileMenu() {
  // This could be expanded for mobile-specific navigation
  // For now, we're relying on CSS media queries for most responsive behaviors
}

// Setup horizontal scrolling buttons for product listings
function setupScrollButtons() {
  const scrollPrevBtns = document.querySelectorAll('.scroll-prev');
  const scrollNextBtns = document.querySelectorAll('.scroll-next');
  
  scrollPrevBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const container = e.target.closest('.product-scroll').querySelector('.product-grid');
      container.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    });
  });
  
  scrollNextBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const container = e.target.closest('.product-scroll').querySelector('.product-grid');
      container.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    });
  });
}