// Nölke Zahida Restaurant — Order Menu

// Set your live website URL here for the QR code (e.g. https://your-restaurant-menu.vercel.app)
// Leave empty to use the current page URL when deployed
const SITE_URL = "";

const MENU_DATA = {
  mainCourse: [
    {
      id: "black-paper",
      name: "Black Paper",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80",
      veg: false,
      price: 27,
      tagline: "Bold and peppery perfection.",
      description: "Premium beef steak crusted with cracked black pepper, pan-seared to your preference and finished with a rich peppercorn cream sauce.",
      servingSize: "280g",
      ingredients: ["Beef steak", "Black peppercorns", "Heavy cream", "Brandy", "Butter", "Garlic", "Beef stock"],
      allergens: ["Dairy", "Gluten (if served with bread)"],
    },
    {
      id: "roasted-beef",
      name: "Roasted Beef",
      image: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=800&q=80",
      veg: false,
      price: 27,
      tagline: "Tender, slow-roasted excellence.",
      description: "Succulent beef roast slow-cooked with rosemary, thyme, and garlic until fork-tender, served with roasted vegetables and jus.",
      servingSize: "250g",
      ingredients: ["Beef roast", "Rosemary", "Thyme", "Garlic", "Olive oil", "Carrots", "Potatoes", "Onions"],
      allergens: [],
    },
    {
      id: "spaghetti",
      name: "Spaghetti",
      image: "assets/spaghetti.png",
      veg: false,
      price: 28,
      tagline: "Classic Italian comfort.",
      description: "Al dente spaghetti tossed in our house-made marinara sauce with fresh basil, parmesan, and your choice of meatballs or mushrooms.",
      servingSize: "350g",
      ingredients: ["Spaghetti pasta", "San Marzano tomatoes", "Garlic", "Basil", "Parmesan", "Olive oil", "Onion"],
      allergens: ["Cereal containing gluten", "Dairy", "Eggs"],
    },
    {
      id: "wagyu-steak",
      name: "Wagyu Steak",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
      veg: false,
      price: 28,
      tagline: "Marbled luxury on a plate.",
      description: "A5-grade Wagyu beef, perfectly grilled and served with truffle butter, seasonal greens, and roasted fingerling potatoes.",
      servingSize: "200g",
      ingredients: ["Wagyu beef", "Truffle butter", "Sea salt", "Black pepper", "Fingerling potatoes", "Mixed greens"],
      allergens: ["Dairy"],
    },
    {
      id: "chicken-rise",
      name: "Chicken Rise",
      image: "assets/chicken-rise.png",
      veg: false,
      price: 22,
      tagline: "Hearty and satisfying.",
      description: "Tender chicken breast served over fragrant jasmine rice with a light herb gravy and steamed broccoli.",
      servingSize: "380g",
      ingredients: ["Chicken breast", "Jasmine rice", "Chicken stock", "Herbs", "Butter", "Broccoli", "Garlic"],
      allergens: ["Dairy"],
    },
    {
      id: "tender-rice",
      name: "Tender Rice",
      image: "assets/tender-rice.png",
      veg: true,
      price: 22,
      tagline: "Creamy, comforting rice.",
      description: "Creamy risotto-style rice with tender vegetables, finished with parmesan and a touch of lemon.",
      servingSize: "320g",
      ingredients: ["Arborio rice", "Vegetable stock", "Parmesan", "Butter", "Onion", "Peas", "Lemon zest"],
      allergens: ["Cereal containing gluten", "Dairy"],
    },
  ],
  appetizer: [
    {
      id: "french-fries",
      name: "French Fries",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
      veg: true,
      price: 12,
      tagline: "Crispy golden perfection.",
      description: "Hand-cut potatoes double-fried for a crispy exterior and fluffy interior, seasoned with sea salt.",
      servingSize: "150g",
      ingredients: ["Potatoes", "Vegetable oil", "Sea salt"],
      allergens: [],
    },
    {
      id: "humburger",
      name: "Humburger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
      veg: false,
      price: 14,
      tagline: "The classic done right.",
      description: "Juicy beef patty with melted cheese, crisp lettuce, tomato, onion, and our special sauce on a toasted brioche bun.",
      servingSize: "220g",
      ingredients: ["Beef patty", "Brioche bun", "Cheddar cheese", "Lettuce", "Tomato", "Onion", "Special sauce"],
      allergens: ["Cereal containing gluten", "Dairy", "Eggs"],
    },
    {
      id: "mini-burger",
      name: "Mini Burger",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80",
      veg: false,
      price: 12,
      tagline: "Bite-sized delight.",
      description: "Three sliders with beef patty, cheese, and pickles — perfect for sharing or a light bite.",
      servingSize: "180g",
      ingredients: ["Beef patty", "Mini buns", "American cheese", "Pickles", "Ketchup", "Mustard"],
      allergens: ["Cereal containing gluten", "Dairy", "Eggs"],
    },
    {
      id: "hotdog",
      name: "Hotdog",
      image: "https://images.unsplash.com/photo-1612392062422-ef19b42f74df?w=800&q=80",
      veg: false,
      price: 14,
      tagline: "All-American favorite.",
      description: "Grilled beef frank in a soft bun with mustard, ketchup, relish, and optional onions.",
      servingSize: "160g",
      ingredients: ["Beef frank", "Hot dog bun", "Mustard", "Ketchup", "Relish", "Onion"],
      allergens: ["Cereal containing gluten", "Soya"],
    },
    {
      id: "mini-hotdog",
      name: "Mini Hotdog",
      image: "assets/mini-hotdog.png",
      veg: false,
      price: 12,
      tagline: "Fun-sized and flavorful.",
      description: "Three mini hot dogs in soft rolls with classic toppings.",
      servingSize: "140g",
      ingredients: ["Mini beef franks", "Mini rolls", "Mustard", "Ketchup"],
      allergens: ["Cereal containing gluten", "Soya"],
    },
    {
      id: "pop-corn",
      name: "Pop Corn",
      image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=800&q=80",
      veg: true,
      price: 12,
      tagline: "Light and buttery.",
      description: "Freshly popped popcorn with melted butter and a sprinkle of salt. Add cheese or caramel on request.",
      servingSize: "100g",
      ingredients: ["Popcorn kernels", "Butter", "Salt"],
      allergens: ["Dairy"],
    },
  ],
};

function getVegSymbol(veg) {
  return veg
    ? '<span class="veg-symbol" title="Vegetarian">●</span>'
    : '<span class="nonveg-symbol" title="Non-Vegetarian">●</span>';
}

function renderQuickMenu() {
  const mainEl = document.getElementById("quickMainCourse");
  const appEl = document.getElementById("quickAppetizer");

  function createQuickItem(item) {
    const li = document.createElement("li");
    li.className = "quick-menu-item";
    li.innerHTML = `
      <span class="quick-item-thumb">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
      </span>
      <span class="quick-veg-symbol">${getVegSymbol(item.veg)}</span>
      <a href="#detail-${item.id}" class="quick-item-link">
        <span class="quick-item-name">${item.name}</span>
        <span class="quick-item-dots"></span>
        <span class="quick-item-price">$${item.price}</span>
      </a>
      <button class="quick-add-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" title="Add to cart">+</button>
    `;
    return li;
  }

  MENU_DATA.mainCourse.forEach((item) => mainEl.appendChild(createQuickItem(item)));
  MENU_DATA.appetizer.forEach((item) => appEl.appendChild(createQuickItem(item)));
}

function renderMenuItems() {
  const mainCourseEl = document.getElementById("mainCourse");
  const appetizerEl = document.getElementById("appetizer");

  function createItemCard(item) {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.id = `detail-${item.id}`;
    card.dataset.id = item.id;

    const allergensHtml = item.allergens.length
      ? `<p class="allergen-warning"><strong>Allergen Warning!</strong> Contains: ${item.allergens.join(", ")}</p>`
      : "";

    const ingredientsList = item.ingredients.map((i) => `<li>${i}</li>`).join("");

    card.innerHTML = `
      <div class="menu-card-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
      </div>
      <div class="menu-card-content">
        <div class="menu-card-main">
          <h3 class="item-title">${item.name} ${getVegSymbol(item.veg)}</h3>
          <p class="item-tagline">${item.tagline}</p>
          <p class="item-description">${item.description}</p>
          <p class="serving-size"><strong>Serving Size:</strong> ${item.servingSize}</p>
          ${allergensHtml}
          <div class="ingredients-box">
            <h4>Ingredients</h4>
            <ul class="ingredients-list">${ingredientsList}</ul>
          </div>
        </div>
        <div class="menu-card-actions">
          <span class="item-price">$${item.price}</span>
          <button class="add-to-cart-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">
            Add to Cart
          </button>
        </div>
      </div>
    `;

    return card;
  }

  MENU_DATA.mainCourse.forEach((item) => mainCourseEl.appendChild(createItemCard(item)));
  MENU_DATA.appetizer.forEach((item) => appetizerEl.appendChild(createItemCard(item)));

  initScrollReveal();
}

// Scroll reveal effect for menu items (visible when scrolling through ingredients)
function initScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".menu-card, .quick-menu-item, .details-section-title, .details-intro, .quick-menu-section").forEach((el) => {
      el.classList.add("scroll-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  document.querySelectorAll(".menu-card").forEach((el) => observer.observe(el));
  document.querySelectorAll(".quick-menu-item").forEach((el) => observer.observe(el));
  document.querySelectorAll(".details-section-title, .details-intro, .quick-menu-section").forEach((el) => observer.observe(el));
}

// Cart logic
let cart = JSON.parse(localStorage.getItem("nolkeCart")) || {};

function updateCartUI() {
  const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").textContent = count;

  const cartItemsEl = document.getElementById("cartItems");
  const cartEmptyEl = document.getElementById("cartEmpty");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (count === 0) {
    cartEmptyEl.style.display = "block";
    cartItemsEl.querySelectorAll(".cart-item").forEach((el) => el.remove());
    checkoutBtn.disabled = true;
    document.getElementById("cartTotal").textContent = "$0";
    return;
  }

  cartEmptyEl.style.display = "none";
  checkoutBtn.disabled = false;

  const existingItems = cartItemsEl.querySelectorAll(".cart-item");
  existingItems.forEach((el) => el.remove());

  let total = 0;
  for (const [id, item] of Object.entries(cart)) {
    total += item.price * item.qty;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="cart-item-info">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">$${item.price} × ${item.qty}</span>
      </div>
      <div class="cart-item-controls">
        <button class="cart-qty-btn" data-id="${id}" data-action="minus">−</button>
        <span class="cart-qty">${item.qty}</span>
        <button class="cart-qty-btn" data-id="${id}" data-action="plus">+</button>
        <button class="cart-remove" data-id="${id}" aria-label="Remove">×</button>
      </div>
    `;
    cartItemsEl.appendChild(div);
  }

  document.getElementById("cartTotal").textContent = `$${total}`;
  localStorage.setItem("nolkeCart", JSON.stringify(cart));
}

function addToCart(id, name, price) {
  if (!cart[id]) cart[id] = { name, price, qty: 0 };
  cart[id].qty += 1;
  updateCartUI();
}

function updateCartQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartUI();
}

function removeFromCart(id) {
  delete cart[id];
  updateCartUI();
}

function openCart() {
  document.getElementById("cartSidebar").classList.add("open");
  document.getElementById("cartOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function openCheckout() {
  const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
  if (count === 0) return;

  const total = Object.values(cart).reduce((sum, item) => sum + item.price * item.qty, 0);

  const summaryEl = document.getElementById("checkoutSummary");
  summaryEl.innerHTML = Object.entries(cart)
    .map(
      ([_, item]) =>
        `<div class="checkout-summary-item"><span>${item.name} × ${item.qty}</span><span>$${item.price * item.qty}</span></div>`
    )
    .join("");

  document.getElementById("checkoutTotal").textContent = `$${total}`;
  document.getElementById("checkoutPage").classList.add("open");
}

function closeCheckout() {
  document.getElementById("checkoutPage").classList.remove("open");
}

function confirmOrder() {
  const payment = document.querySelector('input[name="payment"]:checked').value;
  const total = Object.values(cart).reduce((sum, item) => sum + item.price * item.qty, 0);
  const orderSummary = Object.entries(cart)
    .map(([_, item]) => `${item.name} × ${item.qty}`)
    .join(", ");

  const message =
    payment === "online"
      ? `Order confirmed!\n\n${orderSummary}\n\nTotal: $${total}\n\nYou will be redirected to complete your online payment. Your order has been sent to the kitchen. Thank you!`
      : `Order confirmed!\n\n${orderSummary}\n\nTotal: $${total}\n\nPlease pay at the counter when your order is ready. Thank you!`;

  alert(message);
  cart = {};
  updateCartUI();
  closeCheckout();
  closeCart();
}

// QR Code for scan-to-order
function initQRCode() {
  const qrImg = document.getElementById("qrCode");
  if (!qrImg) return;

  const url = SITE_URL || (typeof window !== "undefined" ? window.location.href : "");
  if (!url || url.startsWith("file://")) {
    qrImg.style.display = "none";
    qrImg.parentElement.querySelector(".footer-qr-hint").textContent =
      "Deploy your site to get a QR code";
    return;
  }

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(url)}`;
  qrImg.style.display = "";
}

// Parallax scroll effect (inspired by Ideathon-style depth)
function initParallax() {
  const heroBg = document.getElementById("parallaxHeroBg");
  if (!heroBg) return;

  // Respect reduced motion preference
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function onScroll() {
    const scrolled = window.scrollY;
    const rate = 0.25;
    heroBg.style.transform = `translate3d(0, ${scrolled * rate}px, 0)`;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";
  requestAnimationFrame(() => {
    document.body.style.opacity = "1";
  });

  initParallax();
  renderQuickMenu();
  renderMenuItems();
  updateCartUI();
  initQRCode();

  document.querySelectorAll(".quick-add-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      addToCart(btn.dataset.id, btn.dataset.name, Number(btn.dataset.price));
      openCart();
    });
  });

  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(btn.dataset.id, btn.dataset.name, Number(btn.dataset.price));
      openCart();
    });
  });

  document.getElementById("cartToggle").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);
  document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
  document.getElementById("checkoutBack").addEventListener("click", closeCheckout);
  document.getElementById("checkoutOverlay").addEventListener("click", closeCheckout);
  document.getElementById("checkoutConfirm").addEventListener("click", confirmOrder);

  document.getElementById("cartItems").addEventListener("click", (e) => {
    const btn = e.target.closest(".cart-qty-btn");
    const removeBtn = e.target.closest(".cart-remove");
    if (btn) updateCartQty(btn.dataset.id, btn.dataset.action === "plus" ? 1 : -1);
    if (removeBtn) removeFromCart(removeBtn.dataset.id);
  });
});
