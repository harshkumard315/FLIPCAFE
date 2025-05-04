// Café-specific JavaScript

import { getProducts } from './modules/products.js';
import { addToCart } from './modules/cart.js';

// Café menu items
const cafeItems = [
  {
    id: 'c1',
    name: 'Masala Chai',
    description: 'Traditional Indian tea with aromatic spices',
    price: 25.00,
    originalPrice: 30.00,
    image: 'https://images.pexels.com/photos/5946646/pexels-photo-5946646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'tea',
    isVeg: true,
    popular: true,
    deliveryTime: 10
  },
  {
    id: 'c2',
    name: 'Cold Coffee',
    description: 'Chilled coffee with vanilla ice cream',
    price: 85.00,
    originalPrice: 110.00,
    image: 'https://images.pexels.com/photos/2074120/pexels-photo-2074120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'tea',
    isVeg: true,
    popular: true,
    deliveryTime: 10
  },
  {
    id: 'c3',
    name: 'Samosa',
    description: 'Crispy fried pastry with savory potato filling',
    price: 20.00,
    originalPrice: 25.00,
    image: 'https://images.pexels.com/photos/14461460/pexels-photo-14461460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'snacks',
    isVeg: true,
    popular: true,
    deliveryTime: 10
  },
  {
    id: 'c4',
    name: 'Vegetable Sandwich',
    description: 'Grilled sandwich with mixed vegetables and cheese',
    price: 60.00,
    originalPrice: 75.00,
    image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'snacks',
    isVeg: true,
    popular: false,
    deliveryTime: 15
  },
  {
    id: 'c5',
    name: 'Gulab Jamun',
    description: 'Soft milk solids balls soaked in sugar syrup',
    price: 40.00,
    originalPrice: 50.00,
    image: 'https://images.pexels.com/photos/14467426/pexels-photo-14467426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sweets',
    isVeg: true,
    popular: true,
    deliveryTime: 10
  },
  {
    id: 'c6',
    name: 'Jalebi',
    description: 'Crispy, juicy sweet made with fermented batter',
    price: 35.00,
    originalPrice: 45.00,
    image: 'https://images.pexels.com/photos/14391636/pexels-photo-14391636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sweets',
    isVeg: true,
    popular: false,
    deliveryTime: 10
  },
  {
    id: 'c7',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice, no added sugar',
    price: 70.00,
    originalPrice: 90.00,
    image: 'https://images.pexels.com/photos/1536868/pexels-photo-1536868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'juices',
    isVeg: true,
    popular: true,
    deliveryTime: 8
  },
  {
    id: 'c8',
    name: 'Mixed Fruit Smoothie',
    description: 'Blend of seasonal fruits with yogurt',
    price: 95.00,
    originalPrice: 120.00,
    image: 'https://images.pexels.com/photos/1028711/pexels-photo-1028711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'juices',
    isVeg: true,
    popular: false,
    deliveryTime: 12
  },
  {
    id: 'c9',
    name: 'Espresso',
    description: 'Strong shot of coffee with rich crema',
    price: 60.00,
    originalPrice: 75.00,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'tea',
    isVeg: true,
    popular: false,
    deliveryTime: 5
  },
  {
    id: 'c10',
    name: 'Paneer Pakora',
    description: 'Cottage cheese fritters with mint chutney',
    price: 80.00,
    originalPrice: 100.00,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'snacks',
    isVeg: true,
    popular: true,
    deliveryTime: 15
  },
  {
    id: 'c11',
    name: 'Rasmalai',
    description: 'Soft cheese patties in creamy saffron milk',
    price: 50.00,
    originalPrice: 65.00,
    image: 'https://images.pexels.com/photos/14467431/pexels-photo-14467431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sweets',
    isVeg: true,
    popular: true,
    deliveryTime: 10
  },
  {
    id: 'c12',
    name: 'Watermelon Juice',
    description: 'Refreshing watermelon juice, perfect for summer',
    price: 60.00,
    originalPrice: 75.00,
    image: 'https://images.pexels.com/photos/2059170/pexels-photo-2059170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'juices',
    isVeg: true,
    popular: false,
    deliveryTime: 8
  }
];

// Initialize Café Page
document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('cafe-menu-container');
  const popularContainer = document.getElementById('popular-container');
  const categoryTabs = document.querySelectorAll('.category-tab');
  
  // Render all menu items initially
  if (menuContainer) {
    renderCafeItems(menuContainer, cafeItems);
  }
  
  // Render popular items
  if (popularContainer) {
    renderCafeItems(popularContainer, cafeItems.filter(item => item.popular));
  }
  
  // Set up category filtering
  if (categoryTabs) {
    categoryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active tab
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Filter items based on category
        const category = tab.getAttribute('data-category');
        let filteredItems = cafeItems;
        
        if (category !== 'all') {
          filteredItems = cafeItems.filter(item => item.category === category);
        }
        
        // Re-render the menu
        renderCafeItems(menuContainer, filteredItems);
      });
    });
  }
  
  // Set up café item modal
  setupCafeItemModal();
});

// Render café items
function renderCafeItems(container, items) {
  let html = '';
  
  items.forEach(item => {
    const discount = item.originalPrice ? Math.round(((item.originalPrice - item.price) / item.price) * 100) : 0;
    
    html += `
      <div class="cafe-item" data-id="${item.id}">
        <div class="cafe-item-image">
          <img src="${item.image}" alt="${item.name}" />
          <div class="${item.isVeg ? 'item-veg' : 'item-non-veg'}"></div>
        </div>
        <div class="cafe-item-info">
          <h3 class="cafe-item-title">${item.name}</h3>
          <div class="cafe-item-price">
            <span class="cafe-item-current-price">₹${item.price.toFixed(2)}</span>
            ${item.originalPrice ? `
              <span class="cafe-item-original-price">₹${item.originalPrice.toFixed(2)}</span>
              <span class="cafe-item-discount">${discount}% off</span>
            ` : ''}
          </div>
          <p class="cafe-item-description">${item.description}</p>
          <div class="cafe-item-footer">
            <div class="delivery-estimate">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>${item.deliveryTime} min</span>
            </div>
            <button class="cafe-add-to-cart" data-id="${item.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Add
            </button>
          </div>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
  
  // Add event listeners
  const cafeItems = container.querySelectorAll('.cafe-item');
  const addButtons = container.querySelectorAll('.cafe-add-to-cart');
  
  cafeItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (!e.target.closest('.cafe-add-to-cart')) {
        const itemId = item.getAttribute('data-id');
        openCafeItemModal(itemId);
      }
    });
  });
  
  addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemId = button.getAttribute('data-id');
      const item = getCafeItemById(itemId);
      if (item) {
        addToCart(item);
      }
    });
  });
}

// Set up café item modal
function setupCafeItemModal() {
  const modal = document.getElementById('cafe-item-modal');
  const closeModalButtons = document.querySelectorAll('.close-modal');
  const backdrop = document.getElementById('backdrop');
  
  if (!modal || !backdrop) return;
  
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      modal.classList.remove('active');
      backdrop.classList.remove('active');
    });
  });
}

// Open café item modal
function openCafeItemModal(itemId) {
  const item = getCafeItemById(itemId);
  if (!item) return;
  
  const modal = document.getElementById('cafe-item-modal');
  const modalContent = document.getElementById('cafe-item-content');
  const backdrop = document.getElementById('backdrop');
  
  if (!modal || !modalContent || !backdrop) return;
  
  const discount = item.originalPrice ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : 0;
  
  modalContent.innerHTML = `
    <div class="cafe-item-details">
      <div class="cafe-item-gallery">
        <div class="cafe-item-main-image">
          <img src="${item.image}" alt="${item.name}" />
        </div>
      </div>
      <div class="cafe-item-detail-info">
        <h2 class="cafe-item-detail-title">
          ${item.name}
          <div class="${item.isVeg ? 'item-veg' : 'item-non-veg'}"></div>
        </h2>
        <p class="cafe-item-detail-description">${item.description}</p>
        <div class="cafe-item-detail-prices">
          <span class="cafe-item-detail-current-price">₹${item.price.toFixed(2)}</span>
          ${item.originalPrice ? `
            <span class="cafe-item-detail-original-price">₹${item.originalPrice.toFixed(2)}</span>
            <span class="cafe-item-detail-discount">${discount}% off</span>
          ` : ''}
        </div>
        
        <div class="cafe-item-options">
          <h3 class="options-title">Size Options</h3>
          <div class="options-list">
            <div class="option-item active">
              <input type="radio" name="size" id="size-regular" checked />
              <label for="size-regular">Regular</label>
            </div>
            <div class="option-item">
              <input type="radio" name="size" id="size-large" />
              <label for="size-large">Large (+₹10)</label>
            </div>
          </div>
        </div>
        
        <div class="cafe-item-options">
          <h3 class="options-title">Add-ons</h3>
          <div class="options-list">
            <div class="option-item">
              <input type="checkbox" id="addon-extra-sugar" />
              <label for="addon-extra-sugar">Extra Sugar (Free)</label>
            </div>
            <div class="option-item">
              <input type="checkbox" id="addon-extra-spice" />
              <label for="addon-extra-spice">Extra Spice (+₹5)</label>
            </div>
          </div>
        </div>
        
        <div class="cafe-item-features">
          <h3 class="features-title">Features</h3>
          <div class="features-list">
            <div class="feature-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>${item.deliveryTime} min delivery</span>
            </div>
            <div class="feature-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              <span>Customizable</span>
            </div>
            <div class="feature-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <span>Pay on delivery</span>
            </div>
          </div>
        </div>
        
        <div class="cafe-item-actions">
          <div class="quantity-selector">
            <button class="quantity-btn decrease-btn">-</button>
            <input type="number" class="quantity-value" value="1" min="1" max="10" />
            <button class="quantity-btn increase-btn">+</button>
          </div>
          <button class="cafe-add-btn" data-id="${item.id}">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
  
  // Set up event listeners for quantity buttons
  const decreaseBtn = modalContent.querySelector('.decrease-btn');
  const increaseBtn = modalContent.querySelector('.increase-btn');
  const quantityInput = modalContent.querySelector('.quantity-value');
  const addToCartBtn = modalContent.querySelector('.cafe-add-btn');
  
  if (decreaseBtn && increaseBtn && quantityInput) {
    decreaseBtn.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value, 10);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
    
    increaseBtn.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value, 10);
      if (currentValue < 10) {
        quantityInput.value = currentValue + 1;
      }
    });
  }
  
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const quantity = parseInt(quantityInput.value, 10);
      addToCart(item, quantity);
      modal.classList.remove('active');
      backdrop.classList.remove('active');
    });
  }
  
  // Show the modal
  modal.classList.add('active');
  backdrop.classList.add('active');
}

// Get café item by ID
function getCafeItemById(id) {
  return cafeItems.find(item => item.id === id);
}