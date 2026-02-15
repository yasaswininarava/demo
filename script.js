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

// Get all menu items with category
function getAllMenuItems() {
  return [
    ...MENU_DATA.mainCourse.map((item) => ({ ...item, category: "mainCourse" })),
    ...MENU_DATA.appetizer.map((item) => ({ ...item, category: "appetizer" })),
  ];
}

// Search and similarity logic
function searchMenu(query) {
  const q = query.trim().toLowerCase();
  if (!q) return { exact: getAllMenuItems(), similar: [], isSimilar: false };

  const allItems = getAllMenuItems();
  const words = q.split(/\s+/).filter((w) => w.length > 1);

  const exact = allItems.filter((item) => {
    const searchText = [
      item.name,
      item.tagline,
      item.description,
      item.ingredients.join(" "),
      item.category === "mainCourse" ? "main course" : "appetizer",
    ]
      .join(" ")
      .toLowerCase();
    return words.every((w) => searchText.includes(w)) || searchText.includes(q);
  });

  if (exact.length > 0) {
    return { exact, similar: [], isSimilar: false };
  }

  // No exact match - find similar (partial match, shared words)
  const scored = allItems.map((item) => {
    const searchText = [
      item.name,
      item.tagline,
      item.description,
      item.ingredients.join(" "),
    ]
      .join(" ")
      .toLowerCase();
    let score = 0;
    for (const w of words) {
      if (item.name.toLowerCase().includes(w)) score += 10;
      if (searchText.includes(w)) score += 5;
      if (item.ingredients.some((i) => i.toLowerCase().includes(w))) score += 3;
    }
    if (item.name.toLowerCase().includes(q) || q.includes(item.name.toLowerCase())) score += 8;
    return { item, score };
  });

  const similar = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((s) => s.item);

  return {
    exact: [],
    similar: similar.length > 0 ? similar : allItems.slice(0, 6),
    isSimilar: true,
  };
}

function renderQuickMenu(filteredItems = null) {
  const mainEl = document.getElementById("quickMainCourse");
  const appEl = document.getElementById("quickAppetizer");
  mainEl.innerHTML = "";
  appEl.innerHTML = "";

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

  const mainItems = filteredItems
    ? filteredItems.filter((i) => i.category === "mainCourse")
    : MENU_DATA.mainCourse.map((i) => ({ ...i, category: "mainCourse" }));
  const appItems = filteredItems
    ? filteredItems.filter((i) => i.category === "appetizer")
    : MENU_DATA.appetizer.map((i) => ({ ...i, category: "appetizer" }));

  mainItems.forEach((item) => mainEl.appendChild(createQuickItem(item)));
  appItems.forEach((item) => appEl.appendChild(createQuickItem(item)));
}

function createItemCard(item) {
  const card = document.createElement("article");
  card.className = "menu-card";
  card.id = `detail-${item.id}`;
  card.dataset.id = item.id;

  const allergens = item.allergens || [];
  const allergensHtml = allergens.length
    ? `<p class="allergen-warning"><strong>Allergen Warning!</strong> Contains: ${allergens.join(", ")}</p>`
    : "";

  const ingredients = item.ingredients || [];
  const ingredientsList = ingredients.map((i) => `<li>${i}</li>`).join("");

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

function renderMenuItems(filteredItems = null) {
  const mainCourseEl = document.getElementById("mainCourse");
  const appetizerEl = document.getElementById("appetizer");
  mainCourseEl.innerHTML = "";
  appetizerEl.innerHTML = "";

  const mainItems = filteredItems
    ? filteredItems.filter((i) => i.category === "mainCourse")
    : MENU_DATA.mainCourse.map((i) => ({ ...i, category: "mainCourse" }));
  const appItems = filteredItems
    ? filteredItems.filter((i) => i.category === "appetizer")
    : MENU_DATA.appetizer.map((i) => ({ ...i, category: "appetizer" }));

  mainItems.forEach((item) => mainCourseEl.appendChild(createItemCard(item)));
  appItems.forEach((item) => appetizerEl.appendChild(createItemCard(item)));

  initScrollReveal();
}

function renderSimilarDishes(items, query, isSimilar) {
  const section = document.getElementById("similarDishesSection");
  const titleEl = document.getElementById("similarDishesTitle");
  const grid = document.getElementById("similarDishesGrid");
  const mainSection = document.getElementById("mainMenuSection");

  if (!items || items.length === 0) {
    section.style.display = "none";
    mainSection.style.display = "";
    return;
  }

  section.style.display = "block";
  mainSection.style.display = isSimilar ? "none" : "";

  titleEl.textContent = isSimilar
    ? `We couldn't find "${query}". Similar dishes you might like:`
    : "Search results";

  grid.innerHTML = "";
  items.forEach((item) => grid.appendChild(createItemCard(item)));
  initScrollReveal();
}

function applySearch() {
  const query = document.getElementById("menuSearch").value.trim();
  const messageEl = document.getElementById("searchMessage");
  const similarSection = document.getElementById("similarDishesSection");
  const mainSection = document.getElementById("mainMenuSection");

  if (!query) {
    messageEl.textContent = "";
    similarSection.style.display = "none";
    mainSection.style.display = "";
    renderQuickMenu();
    renderMenuItems();
    return;
  }

  const { exact, similar, isSimilar } = searchMenu(query);

  if (exact.length > 0) {
    messageEl.textContent = `Found ${exact.length} dish${exact.length > 1 ? "es" : ""} for "${query}"`;
    messageEl.className = "search-message search-message-success";
    similarSection.style.display = "none";
    mainSection.style.display = "";
    renderQuickMenu(exact);
    renderMenuItems(exact);
  } else {
    messageEl.textContent = `No exact match for "${query}"`;
    messageEl.className = "search-message search-message-similar";
    renderSimilarDishes(similar, query, true);
  }
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

  // Search
  const searchInput = document.getElementById("menuSearch");
  const searchClear = document.getElementById("searchClear");
  let searchDebounce;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(applySearch, 200);
  });
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    applySearch();
  });

  // Event delegation for add-to-cart (works with dynamically added content)
  document.addEventListener("click", (e) => {
    const quickBtn = e.target.closest(".quick-add-btn");
    const cartBtn = e.target.closest(".add-to-cart-btn");
    if (quickBtn) {
      e.preventDefault();
      addToCart(quickBtn.dataset.id, quickBtn.dataset.name, Number(quickBtn.dataset.price));
      openCart();
    }
    if (cartBtn) {
      addToCart(cartBtn.dataset.id, cartBtn.dataset.name, Number(cartBtn.dataset.price));
      openCart();
    }
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
