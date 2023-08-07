const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


// Function to handle the click on the cart icon
function addToCart(event) {
  const product = event.currentTarget.closest('.pro'); // Get the parent product element
  const name = product.querySelector('h5').textContent; // Get the product name
  const price = product.querySelector('h4').textContent; // Get the product price
  const imgSrc = product.querySelector('img').getAttribute('src'); // Get the product image source

  const cartItem = {
      name: name,
      price: price,
      imgSrc: imgSrc, 
      quantity: 1
  };

  // Retrieve existing cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  let items = [];

  // Add the new item to the cart
  cartItems.push(cartItem);

  // Store the updated cart items in local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  alert('Item added to cart!'); // You can use any other UI/UX feedback here
}

function addItem(event) {
  const product = event.currentTarget.closest('.pro'); // Get the parent product element
  const name = product.querySelector('h5').textContent; // Get the product name
  const price = product.querySelector('h4').textContent; // Get the product price
  const imgSrc = product.querySelector('img').getAttribute('src'); // Get the product image source

  const item = {
      name: name,
      price: price,
      imgSrc: imgSrc
  };

  // Retrieve existing cart items from local storage
  let items = [];

  // Add the new item to the cart
  items.push(item);

  // Store the updated cart items in local storage
  localStorage.setItem('items', JSON.stringify(items));

  // Redirect immediately to the sproduct page
  window.location.href = "sproduct.html";
}

// Attach the click event to all cart icons
const cartIcons = document.querySelectorAll('.fa-solid.fa-cart-shopping');
cartIcons.forEach(icon => {
  icon.addEventListener('click', addToCart);
});

// Attach the click event to all cart icons
const items = document.querySelectorAll('.pro');
items.forEach(item => {
  item.addEventListener('click', addItem);
});

const signInButton = document.querySelector('.signBtn');
signInButton.addEventListener('click', function (e) {
  e.preventDefault();
  // Successful sign-up, redirect to the sign-up/in page
  window.location.href = 'signUpIn.html'; // Change to your actual page URL
});
