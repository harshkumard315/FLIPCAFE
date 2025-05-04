// Cart Module
let cart = [];
let cartTotal = 0;

// Initialize cart functionality
export function initCart() {
  loadCart();
  setupCartListeners();
  updateCartDisplay();
}

// Load cart data from localStorage if available
function loadCart() {
  const savedCart = localStorage.getItem('flipkartCart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
      calculateCartTotal();
    } catch (error) {
      console.error('Error loading cart:', error);
      cart = [];
    }
  }
}

// Save cart data to localStorage
function saveCart() {
  localStorage.setItem('flipkartCart', JSON.stringify(cart));
}

// Calculate cart total
function calculateCartTotal() {
  cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Add an item to the cart
export function addToCart(product, quantity = 1) {
  // Check if the product is already in the cart
  const existingItemIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingItemIndex !== -1) {
    // Update quantity if the product is already in the cart
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Add new product to the cart
    cart.push({
      ...product,
      quantity
    });
  }
  
  // Recalculate total, save cart and update the display
  calculateCartTotal();
  saveCart();
  updateCartDisplay();
  
  // Show confirmation message
  showCartNotification(product.name);
  
  // Open the cart sidebar
  const cartSidebar = document.getElementById('cart-sidebar');
  const backdrop = document.getElementById('backdrop');
  cartSidebar.classList.add('active');
  backdrop.classList.add('active');
}

// Remove an item from the cart
export function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  calculateCartTotal();
  saveCart();
  updateCartDisplay();
}

// Update quantity of an item in cart
export function updateCartItemQuantity(productId, quantity) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  
  if (itemIndex !== -1) {
    if (quantity <= 0) {
      // Remove the item if quantity is 0 or less
      removeFromCart(productId);
    } else {
      // Update the quantity
      cart[itemIndex].quantity = quantity;
      calculateCartTotal();
      saveCart();
      updateCartDisplay();
    }
  }
}

// Update the cart display
function updateCartDisplay() {
  // Update cart count display
  const cartCountElements = document.querySelectorAll('.cart-count');
  cartCountElements.forEach(element => {
    element.textContent = cart.reduce((count, item) => count + item.quantity, 0);
  });
  
  // Update cart sidebar contents
  const cartItemsContainer = document.getElementById('cart-items');
  const cartSidebarCount = document.getElementById('cart-sidebar-count');
  const cartTotalElement = document.getElementById('cart-total');
  
  if (cartItemsContainer && cartSidebarCount && cartTotalElement) {
    const totalQuantity = cart.reduce((count, item) => count + item.quantity, 0);
    cartSidebarCount.textContent = `(${totalQuantity})`;
    cartTotalElement.textContent = `₹${cartTotal.toFixed(2)}`;
    
    if (cart.length === 0) {
      // Display empty cart message
      cartItemsContainer.innerHTML = `
        <div class="empty-cart">
          <img src="./src/images/empty-cart.png" alt="Empty Cart" />
          <p>Your cart is empty!</p>
          <a href="#" class="shop-now-btn">Shop Now</a>
        </div>
      `;
    } else {
      // Display cart items
      let cartHTML = '';
      
      cart.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        const discount = item.originalPrice ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : 0;
        
        cartHTML += `
          <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
              <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="cart-item-info">
              <h3 class="cart-item-title">${item.name}</h3>
              <div class="cart-item-price">
                <span class="cart-item-current-price">₹${item.price.toFixed(2)}</span>
                ${item.originalPrice ? `
                  <span class="cart-item-original-price">₹${item.originalPrice.toFixed(2)}</span>
                  <span class="cart-item-discount">${discount}% off</span>
                ` : ''}
              </div>
              <div class="cart-item-actions">
                <div class="quantity-control">
                  <button class="quantity-btn quantity-decrease" data-id="${item.id}">-</button>
                  <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="10" data-id="${item.id}" />
                  <button class="quantity-btn quantity-increase" data-id="${item.id}">+</button>
                </div>
                <span class="remove-item" data-id="${item.id}">Remove</span>
              </div>
            </div>
          </div>
        `;
      });
      
      cartItemsContainer.innerHTML = cartHTML;
      
      // Add event listeners to cart item controls
      const decreaseButtons = cartItemsContainer.querySelectorAll('.quantity-decrease');
      const increaseButtons = cartItemsContainer.querySelectorAll('.quantity-increase');
      const quantityInputs = cartItemsContainer.querySelectorAll('.quantity-input');
      const removeButtons = cartItemsContainer.querySelectorAll('.remove-item');
      
      decreaseButtons.forEach(button => {
        button.addEventListener('click', () => {
          const productId = button.getAttribute('data-id');
          const currentItem = cart.find(item => item.id === productId);
          if (currentItem) {
            updateCartItemQuantity(productId, currentItem.quantity - 1);
          }
        });
      });
      
      increaseButtons.forEach(button => {
        button.addEventListener('click', () => {
          const productId = button.getAttribute('data-id');
          const currentItem = cart.find(item => item.id === productId);
          if (currentItem) {
            updateCartItemQuantity(productId, currentItem.quantity + 1);
          }
        });
      });
      
      quantityInputs.forEach(input => {
        input.addEventListener('change', () => {
          const productId = input.getAttribute('data-id');
          const quantity = parseInt(input.value, 10);
          updateCartItemQuantity(productId, quantity);
        });
      });
      
      removeButtons.forEach(button => {
        button.addEventListener('click', () => {
          const productId = button.getAttribute('data-id');
          removeFromCart(productId);
        });
      });
    }
  }
}

// Set up event listeners for cart functionality
function setupCartListeners() {
  const cartLink = document.getElementById('cart-link');
  const closeCartBtn = document.getElementById('close-cart');
  const backdrop = document.getElementById('backdrop');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (cartLink) {
    cartLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('cart-sidebar').classList.add('active');
      backdrop.classList.add('active');
    });
  }
  
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
      document.getElementById('cart-sidebar').classList.remove('active');
      backdrop.classList.remove('active');
    });
  }
  
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      document.getElementById('cart-sidebar').classList.remove('active');
      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
      });
      backdrop.classList.remove('active');
    });
  }
  
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length > 0) {
        alert('Thank you for your order! This is a demo, so no actual order will be placed.');
      } else {
        alert('Your cart is empty. Add some items before checking out.');
      }
    });
  }
}

// Show notification when product is added to cart
function showCartNotification(productName) {
  // Create notification element if it doesn't exist
  let notification = document.querySelector('.cart-notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.className = 'cart-notification';
    document.body.appendChild(notification);
  }
  
  // Set notification content and show it
  notification.textContent = `${productName} added to cart`;
  notification.classList.add('active');
  
  // Hide notification after a delay
  setTimeout(() => {
    notification.classList.remove('active');
  }, 3000);
}