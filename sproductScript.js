// Retrieve existing cart items from local storage
const storedItems = JSON.parse(localStorage.getItem('items')) || [];

// Access the elements in the product1 section
const productSection = document.getElementById('prodetails');
const productImage = productSection.querySelector('img');
const productName = productSection.querySelector('h4');
const productPrice = productSection.querySelector('h2');

// Check if there are stored items
if (storedItems.length > 0) {
  // Assuming you're only displaying the first item in this example
  const firstItem = storedItems[0];

  // Update the content of the elements with the retrieved data
  productImage.src = firstItem.imgSrc;
  productName.textContent = firstItem.name;
  productPrice.textContent = firstItem.price;
}

// Attach the click event to all cart buttons
const cartButtons = document.querySelectorAll('.cartBtn');
cartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to handle the click on the cart button
function addToCart(event) {
  const name = productName.textContent; // Get the product name
  const price = productPrice.textContent; // Get the product price
  const imgSrc = productImage.src; // Get the product image source

  const cartItem = {
    name: name,
    price: price,
    imgSrc: imgSrc,
    quantity: 1,
  };

  // Retrieve existing cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the new item to the cart
  cartItems.push(cartItem);

  // Store the updated cart items in local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  alert('Item added to cart!'); // You can use any other UI/UX feedback here
}
