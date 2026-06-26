const menus = {
  burger: { name: 'Burger House', items: [
    ['Chicken Burger', 8.90, 'images/Chicken Burger.jpg'],
    ['Beef Burger', 10.50, 'images/Beef Burger.jpg'],
    ['French Fries', 4.50, 'images/French Fries.jpg'],
    ['Crispy Chicken Wrap', 7.90, 'images/Crispy Chicken Wrap.jpg'],
    ['Iced Lemon Tea', 2.80, 'images/Iced Lemon Tea.jpg']
  ]},
  pizza: { name: 'Pizza Corner', items: [
    ['Pepperoni Pizza', 12.50, 'images/Pepperoni Pizza.jpg'],
    ['Cheese Pizza', 11.00, 'images/Cheese Pizza.jpg'],
    ['Garlic Bread', 5.00, 'images/Garlic Bread.jpg'],
    ['Hawaiian Pizza', 13.50, 'images/Hawaiian Pizza.jpg'],
    ['Mushroom Soup', 4.90, 'images/Mushroom Soup.jpg']
  ]},
  sushi: { name: 'Sushi Express', items: [
    ['Salmon Sushi Set', 15.00, 'images/Salmon Sushi Set.jpg'],
    ['Chicken Teriyaki Bowl', 13.50, 'images/Chicken Teriyaki Bowl.jpg'],
    ['Steamed Fish Bread', 3.50, 'images/Steamed Fish Bread.jpg'],
    ['California Roll', 9.80, 'images/California Roll.jpg'],
    ['Green Tea', 2.50, 'images/Green Tea.jpg']
  ]},
  thai: { name: 'Thai Kitchen', items: [
    ['Thai Fried Rice', 9.50, 'images/Thai Fried Rice.jpg'],
    ['Pad Thai', 10.90, 'images/Pad Thai.jpg'],
    ['Tom Yum Soup', 8.00, 'images/Tom Yum Soup.jpg'],
    ['Green Curry Chicken', 11.90, 'images/Green Curry Chicken.jpg'],
    ['Sticky Rice', 6.50, 'images/Sticky Rice.jpg']
  ]},
  korean: { name: 'Korean BBQ', items: [
    ['Korean Fried Chicken', 12.90, 'images/Korean Fried Chicken.jpg'],
    ['Bibimbap', 11.50, 'images/Bibimbap.jpg'],
    ['Kimchi Soup', 8.50, 'images/Kimchi Soup.jpg'],
    ['Beef Bulgogi Rice', 13.90, 'images/Beef Bulgogi Rice.jpg'],
    ['Tteokbokki', 7.90, 'images/Tteokbokki.jpg']
  ]},
  indian: { name: 'Indian Spice', items: [
    ['Chicken Biryani', 12.00, 'images/Chicken Biryani.jpg'],
    ['Butter Chicken', 13.50, 'images/Butter Chicken.jpg'],
    ['Garlic Naan', 3.50, 'images/Garlic Naan.jpg'],
    ['Vegetable Curry', 9.90, 'images/Vegetable Curry.jpg'],
    ['Mango Lassi', 4.50, 'images/Mango Lassi.jpg']
  ]},
  pasta: { name: 'Pasta Palace', items: [
    ['Spaghetti Bolognese', 12.50, 'images/Spaghetti Bolognese.jpg'],
    ['Carbonara Pasta', 11.90, 'images/Carbonara Pasta.jpg'],
    ['Caesar Salad', 7.50, 'images/Caesar Salad.jpg'],
    ['Lasagna', 13.90, 'images/Lasagna.jpg'],
    ['Tiramisu', 6.90, 'images/Tiramisu.jpg']
  ]},
  dessert: { name: 'Dessert Cafe', items: [
    ['Chocolate Cake', 6.50, 'images/Chocolate Cake.jpg'],
    ['Waffle with Ice Cream', 7.90, 'images/Waffle with Ice Cream.jpg'],
    ['Strawberry Smoothie', 5.50, 'images/Strawberry Smoothie.jpg'],
    ['Cheesecake', 6.90, 'images/Cheesecake.jpg'],
    ['Iced Coffee', 4.50, 'images/Iced Coffee.jpg']
  ]}
};

const menuSelectedQuantities = {};

function getCart() {
  return JSON.parse(localStorage.getItem('quickBiteCart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('quickBiteCart', JSON.stringify(cart));
  updateCartCount();
}

function getCartItemCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function updateCartCount() {
  const count = getCartItemCount();
  const badges = document.querySelectorAll('#cartCount, .cart-count-badge');

  badges.forEach(badge => {
    badge.textContent = count;
  });
}

function getSafeId(name) {
  return name.replace(/[^a-zA-Z0-9]/g, '-');
}

function getItemQuantity(name) {
  const cart = getCart();
  const item = cart.find(food => food.name === name);
  return item ? item.quantity : 0;
}

function getMenuSelectedQuantity(name) {
  return menuSelectedQuantities[name] || 1;
}

function updateMenuSelectedQuantity(name) {
  const safeId = getSafeId(name);
  const quantityText = document.getElementById('menu-qty-' + safeId);

  if (quantityText) {
    quantityText.textContent = getMenuSelectedQuantity(name);
  }
}

function updateMenuItemQuantity(name) {
  const cartQuantity = getItemQuantity(name);
  const safeId = getSafeId(name);
  const quantityBadge = document.getElementById('qty-' + safeId);

  if (quantityBadge) {
    quantityBadge.textContent = cartQuantity;
  }
}

function showCartMessage(message) {
  const msg = document.getElementById('cartMessage');

  if (msg) {
    msg.innerHTML = message + ' <a href="cart.html" class="alert-link">View Cart</a>';
    msg.classList.remove('d-none');
  }
}

function increaseMenuItem(name) {
  menuSelectedQuantities[name] = getMenuSelectedQuantity(name) + 1;
  updateMenuSelectedQuantity(name);
}

function decreaseMenuItem(name) {
  const currentQuantity = getMenuSelectedQuantity(name);

  if (currentQuantity > 1) {
    menuSelectedQuantities[name] = currentQuantity - 1;
  }

  updateMenuSelectedQuantity(name);
}

function addToCart(name, price) {
  const quantityToAdd = getMenuSelectedQuantity(name);
  const cart = getCart();
  const item = cart.find(food => food.name === name);

  if (item) {
    item.quantity += quantityToAdd;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: quantityToAdd
    });
  }

  saveCart(cart);
  updateMenuItemQuantity(name);
  showCartMessage(`${quantityToAdd} x ${name} added to cart!`);
}

function loadMenu() {
  const params = new URLSearchParams(window.location.search);
  const restaurant = params.get('restaurant') || 'burger';
  const data = menus[restaurant] || menus.burger;

  document.getElementById('restaurantName').textContent = data.name + ' Menu';

  let html = '';

  data.items.forEach(item => {
    const name = item[0];
    const price = item[1];
    const image = item[2];
    const safeId = getSafeId(name);
    const cartQuantity = getItemQuantity(name);
    const selectedQuantity = getMenuSelectedQuantity(name);

    html += `
      <div class="col-md-4">
        <div class="food-card">
          <img src="${image}" alt="${name}">

          <div class="d-flex justify-content-between align-items-center gap-2">
            <h3 class="mb-0">${name}</h3>
            <span id="qty-${safeId}" class="badge bg-danger menu-card-badge">${cartQuantity}</span>
          </div>

          <p class="food-price mt-3">$${price.toFixed(2)}</p>

          <div class="menu-quantity-control">
            <button class="menu-qty-btn minus" onclick="decreaseMenuItem('${name}')">-</button>
            <span id="menu-qty-${safeId}" class="menu-qty-number">${selectedQuantity}</span>
            <button class="menu-qty-btn plus" onclick="increaseMenuItem('${name}')">+</button>
          </div>

          <button class="btn btn-danger w-100 mt-3" onclick="addToCart('${name}', ${price})">
            Add to Cart
          </button>
        </div>
      </div>`;
  });

  document.getElementById('menuList').innerHTML = html;
  updateCartCount();
}

function changeQuantity(name, change) {
  let cart = getCart();
  const item = cart.find(food => food.name === name);

  if (item) {
    item.quantity += change;

    if (item.quantity <= 0) {
      cart = cart.filter(food => food.name !== name);
    }

    saveCart(cart);
    updateMenuItemQuantity(name);
    displayCart();
  }
}

function removeItem(name) {
  let cart = getCart();
  cart = cart.filter(food => food.name !== name);
  saveCart(cart);
  updateMenuItemQuantity(name);
  displayCart();
}

function displayCart() {
  const cart = getCart();
  const box = document.getElementById('cartItems');
  const total = document.getElementById('cartTotal');
  let subtotal = 0;

  if (!box || !total) {
    return;
  }

  if (cart.length === 0) {
    box.innerHTML = '<p>Your cart is empty. Please go back to restaurants and add food.</p>';
    total.textContent = '0.00';
    updateCartCount();
    return;
  }

  box.innerHTML = '';

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    box.innerHTML += `
      <div class="cart-row">
        <div>
          <strong>${item.name}</strong>
          <div class="mt-2">
            <button class="btn btn-sm btn-outline-danger" onclick="changeQuantity('${item.name}', -1)">-</button>
            <span class="mx-2">${item.quantity}</span>
            <button class="btn btn-sm btn-outline-success" onclick="changeQuantity('${item.name}', 1)">+</button>
            <button class="btn btn-sm btn-outline-secondary ms-2" onclick="removeItem('${item.name}')">Remove</button>
          </div>
        </div>
        <strong>$${itemTotal.toFixed(2)}</strong>
      </div>`;
  });

  total.textContent = (subtotal + 3).toFixed(2);
  updateCartCount();
}

function clearCart() {
  localStorage.removeItem('quickBiteCart');
  updateCartCount();
  displayCart();
}

function displayCheckoutTotal() {
  const cart = getCart();
  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  const checkoutTotal = document.getElementById('checkoutTotal');
  if (checkoutTotal) {
    checkoutTotal.textContent = cart.length ? (subtotal + 3).toFixed(2) : '0.00';
  }

  updateCartCount();
}

function placeOrder(event) {
  event.preventDefault();
  localStorage.removeItem('quickBiteCart');
  updateCartCount();
  window.location.href = 'success.html';
}

document.addEventListener('DOMContentLoaded', updateCartCount);
