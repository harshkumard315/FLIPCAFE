// Products Module
import { addToCart } from './cart.js';

// Sample product data
const products = [
  {
    id: 'p1',
    name: 'Apple iPhone 15 Pro',
    description: 'A15 Bionic chip, 256GB Storage, Triple camera system',
    price: 119999.00,
    originalPrice: 129999.00,
    rating: 4.7,
    ratingCount: 2356,
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/r/l/h/-original-imagtc5fz9spysyk.jpeg?q=70',
    category: 'mobiles',
    featured: true
  },
  {
    id: 'p2',
    name: 'Samsung Galaxy S23 Ultra',
    description: 'Snapdragon 8 Gen 2, 512GB Storage, 108MP camera',
    price: 109999.00,
    originalPrice: 124999.00,
    rating: 4.6,
    ratingCount: 1892,
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/l/o/-original-imagmg6gz3bsjan7.jpeg?q=70',
    category: 'mobiles',
    featured: true
  },
  {
    id: 'p3',
    name: 'Sony WH-1000XM5',
    description: 'Wireless Noise Cancelling Headphones with 30 hour battery',
    price: 26990.00,
    originalPrice: 34990.00,
    rating: 4.8,
    ratingCount: 743,
    image: 'https://rukminim2.flixcart.com/image/416/416/l31x2fk0/headphone/a/s/d/-original-image9ehehexktzj.jpeg?q=70',
    category: 'electronics',
    featured: false
  },
  {
    id: 'p4',
    name: 'PlayStation 5 Console',
    description: 'Next-gen gaming with ultra-high speed SSD, 825GB storage',
    price: 49990.00,
    originalPrice: 54990.00,
    rating: 4.9,
    ratingCount: 3214,
    image: 'https://rukminim2.flixcart.com/image/416/416/kj7gwi80/gamingconsole/t/v/v/cfi-1008a01r-825-sony-no-original-imafytxe7twjskbx.jpeg?q=70',
    category: 'electronics',
    featured: true
  },
  {
    id: 'p5',
    name: 'Lenovo Legion Pro 5',
    description: 'AMD Ryzen 7, 16GB RAM, RTX 4060, 1TB SSD',
    price: 129990.00,
    originalPrice: 149990.00,
    rating: 4.5,
    ratingCount: 582,
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/computer/y/i/j/legion-pro-5-16arh8-gaming-laptop-lenovo-original-imagp7tfdj75hcgz.jpeg?q=70',
    category: 'electronics',
    featured: false
  },
  {
    id: 'p6',
    name: 'Nike Air Zoom Pegasus 38',
    description: 'Running shoes with React foam for a responsive feel',
    price: 8995.00,
    originalPrice: 11995.00,
    rating: 4.4,
    ratingCount: 862,
    image: 'https://rukminim2.flixcart.com/image/832/832/kqidx8w0/shoe/i/4/n/6-cw7356-002nike-nike-black-white-anthracite-volt-original-imag4dudyzsbfgh7.jpeg?q=70',
    category: 'fashion',
    featured: false
  },
  {
    id: 'p7',
    name: 'Amazfit GTR 4 Smartwatch',
    description: 'AMOLED display, 14-day battery, GPS, 150+ sport modes',
    price: 16999.00,
    originalPrice: 23999.00,
    rating: 4.3,
    ratingCount: 378,
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/h/e/p/-original-imagh9hkbyheenuz.jpeg?q=70',
    category: 'electronics',
    featured: false
  },
  {
    id: 'p8',
    name: 'Sony Bravia 65" 4K OLED TV',
    description: 'Cognitive Processor XR, Acoustic Surface Audio+',
    price: 249990.00,
    originalPrice: 309990.00,
    rating: 4.7,
    ratingCount: 216,
    image: 'https://rukminim2.flixcart.com/image/416/416/kkec4280/television/u/a/m/kd-65a8h-sony-original-imafzqmhshzfggtm.jpeg?q=70',
    category: 'electronics',
    featured: true
  },
  {
    id: 'p9',
    name: 'Philips Air Purifier',
    description: 'HEPA filter, Removes 99.97% allergens and pollutants',
    price: 14999.00,
    originalPrice: 19999.00,
    rating: 4.2,
    ratingCount: 142,
    image: 'https://rukminim2.flixcart.com/image/416/416/l5ld8y80/air-purifier/c/b/a/-original-imagg8dzbfvkrqtk.jpeg?q=70',
    category: 'appliances',
    featured: false
  },
  {
    id: 'p10',
    name: 'Apple Watch Series 8',
    description: 'Always-On Retina display, Temperature sensor, ECG',
    price: 41999.00,
    originalPrice: 45999.00,
    rating: 4.6,
    ratingCount: 857,
    image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/y/l/e/-original-imaghxg9gkpbnggh.jpeg?q=70',
    category: 'electronics',
    featured: true
  },
  {
    id: 'p11',
    name: 'Boat Rockerz 550 Headphones',
    description: 'Wireless over-ear headphones with 20 hours playback',
    price: 1999.00,
    originalPrice: 4999.00,
    rating: 4.3,
    ratingCount: 12569,
    image: 'https://rukminim2.flixcart.com/image/416/416/kzogn0w0/headphone/e/h/b/rockerz-550-boat-original-imagbny4agvgn6cs.jpeg?q=70',
    category: 'electronics',
    featured: false
  },
  {
    id: 'p12',
    name: 'JBL Flip 5 Bluetooth Speaker',
    description: 'Waterproof portable speaker with 12 hours of playtime',
    price: 8999.00,
    originalPrice: 11999.00,
    rating: 4.5,
    ratingCount: 3685,
    image: 'https://rukminim2.flixcart.com/image/416/416/k7usyvk0/speaker/mobile-tablet-speaker/4/n/n/jbl-flip-5-original-imafpzxtg5xt6dbx.jpeg?q=70',
    category: 'electronics',
    featured: false
  }
];

// Initialize products functionality
export function initProducts() {
  // Populate product listings
  const dealsContainer = document.getElementById('deals-container');
  const featuredContainer = document.getElementById('featured-container');
  
  if (dealsContainer) {
    renderProductGrid(dealsContainer, products.slice(0, 6));
  }
  
  if (featuredContainer) {
    renderProductGrid(featuredContainer, products.filter(product => product.featured));
  }
  
  // Set up quick view modal functionality
  setupQuickViewModal();
}

// Render a grid of products
function renderProductGrid(container, productList) {
  let html = '';
  
  productList.forEach(product => {
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    html += `
      <div class="product-card" data-id="${product.id}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" />
          <button class="wishlist-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <div class="product-rating">
            <div class="rating-badge">${product.rating} ★</div>
            <span class="rating-count">(${product.ratingCount})</span>
          </div>
          <div class="product-price">
            <span class="current-price">₹${product.price.toFixed(2)}</span>
            ${product.originalPrice ? `
              <span class="original-price">₹${product.originalPrice.toFixed(2)}</span>
              <span class="discount">${discount}% off</span>
            ` : ''}
          </div>
        </div>
        <div class="product-actions">
          <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
  
  // Add event listeners to the product cards
  const productCards = container.querySelectorAll('.product-card');
  const addToCartButtons = container.querySelectorAll('.add-to-cart');
  
  productCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open quick view if clicking on add to cart button
      if (!e.target.closest('.add-to-cart') && !e.target.closest('.wishlist-button')) {
        const productId = card.getAttribute('data-id');
        openQuickView(productId);
      }
    });
  });
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent the card click event
      const productId = button.getAttribute('data-id');
      const product = products.find(p => p.id === productId);
      if (product) {
        addToCart(product);
      }
    });
  });
}

// Set up quick view modal functionality
function setupQuickViewModal() {
  const modal = document.getElementById('quick-view-modal');
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

// Open the quick view modal for a product
function openQuickView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('quick-view-modal');
  const modalContent = document.getElementById('quick-view-content');
  const backdrop = document.getElementById('backdrop');
  
  if (!modal || !modalContent || !backdrop) return;
  
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  
  modalContent.innerHTML = `
    <div class="product-details">
      <div class="product-gallery">
        <div class="gallery-main">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="gallery-thumbnails">
          <div class="gallery-thumbnail active">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="gallery-thumbnail">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="gallery-thumbnail">
            <img src="${product.image}" alt="${product.name}" />
          </div>
        </div>
      </div>
      <div class="product-detail-info">
        <h2 class="product-detail-title">${product.name}</h2>
        <div class="product-detail-rating">
          <div class="rating-badge">${product.rating} ★</div>
          <span class="rating-count">(${product.ratingCount} ratings)</span>
        </div>
        <div class="product-detail-prices">
          <span class="product-detail-current-price">₹${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `
            <span class="product-detail-original-price">₹${product.originalPrice.toFixed(2)}</span>
            <span class="product-detail-discount">${discount}% off</span>
          ` : ''}
        </div>
        <div class="product-offers">
          <h3 class="offer-title">Available offers</h3>
          <div class="offer-list">
            <div class="offer-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span>
            </div>
            <div class="offer-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Bank Offer 10% Off on Bank of Baroda Credit Card (first time transaction)</span>
            </div>
            <div class="offer-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Special Price Get extra ₹${(product.originalPrice - product.price).toFixed(2)} off (price inclusive of discount)</span>
            </div>
          </div>
        </div>
        <div class="product-description">
          <h3 class="description-title">Description</h3>
          <p class="description-text">${product.description}</p>
        </div>
        <div class="product-detail-actions">
          <button class="detail-add-to-cart" data-id="${product.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            ADD TO CART
          </button>
          <button class="buy-now">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners to the detail view buttons
  const addToCartBtn = modalContent.querySelector('.detail-add-to-cart');
  const buyNowBtn = modalContent.querySelector('.buy-now');
  
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      addToCart(product);
      modal.classList.remove('active');
      backdrop.classList.remove('active');
    });
  }
  
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      addToCart(product);
      modal.classList.remove('active');
      backdrop.classList.remove('active');
      
      // Simulate redirect to checkout
      alert('This is a demo. In a real application, you would be redirected to the checkout page.');
    });
  }
  
  // Show the modal
  modal.classList.add('active');
  backdrop.classList.add('active');
}

// Get products data for use in other modules
export function getProducts() {
  return products;
}