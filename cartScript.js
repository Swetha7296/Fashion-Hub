// Function to retrieve cart items from local storage
function getCartItems() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

// Function to display cart items
function displayCartItems() {
    const cartItems = getCartItems();
    const cartTableBody = document.querySelector('#cart tbody');

    cartTableBody.innerHTML = ''; // Clear the table body content

    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');

        // Remove Button
        const removeCell = document.createElement('td');
        const removeLink = document.createElement('a');
        const removeIcon = document.createElement('i');
        removeIcon.classList.add('far', 'fa-times-circle');
        removeLink.appendChild(removeIcon);
        removeLink.addEventListener('click', () => deleteCartItem(index)); // Add event listener
        removeCell.appendChild(removeLink);
        row.appendChild(removeCell);

        // Image Cell
        const imageCell = document.createElement('td');
        const image = document.createElement('img');
        image.src = item.imgSrc;
        image.alt = item.name;
        imageCell.appendChild(image);
        row.appendChild(imageCell);

        // Product Name Cell
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        // Price Cell
        const priceCell = document.createElement('td');
        priceCell.classList.add('price');
        priceCell.textContent = item.price;
        row.appendChild(priceCell);

        // Quantity Input
        const quantityCell = document.createElement('td');
        const quantityInput = document.createElement('input');
        quantityInput.classList.add('quantity-input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity; // Set the input value from local storage
        quantityInput.addEventListener('input', () => updateSubtotal(index)); // Add event listener
        quantityCell.appendChild(quantityInput);
        row.appendChild(quantityCell);

        // Subtotal Cell
        const subtotalCell = document.createElement('td');
        subtotalCell.classList.add('subtotal');
    
        // Extract numerical value from price string
        const priceNumeric = parseFloat(item.price.replace('Rs.', '').trim());

        // Debug log
        console.log('Numeric Price:', priceNumeric, 'Quantity:', item.quantity);

        // Calculate and set subtotal
        subtotalCell.textContent = (priceNumeric * item.quantity).toFixed(2);
        row.appendChild(subtotalCell);

        // Calculate cart subtotal
        const cartSubtotalElement = document.querySelector('#cart-subtotal');
        const cartSubtotal = calculateCartSubtotal(cartItems); // Call a function to calculate subtotal
        cartSubtotalElement.textContent = `Rs. ${cartSubtotal}`;

        // Calculate cart total
        const cartTotalElement = document.querySelector('#cart-total');
        const cartTotal = parseFloat(cartSubtotal) + 50; // Add shipping
        cartTotalElement.textContent = `Rs. ${cartTotal.toFixed(2)}`;

        cartTableBody.appendChild(row);
    });
}

// Calculate cart subtotal
function calculateCartSubtotal(cartItems) {
    let subtotal = 0;

    cartItems.forEach(item => {
        const priceNumeric = parseFloat(item.price.replace('Rs.', '').trim());
        subtotal += priceNumeric * item.quantity;
    });

    return subtotal.toFixed(2);
}

// Call the function to display cart items
displayCartItems();

// Function to delete an item from local storage
function deleteCartItem(index) {
    const cartItems = getCartItems();
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    location.reload(); // Reload the page
}

// Function to calculate and update subtotal
function updateSubtotal(index) {
    const cartItems = getCartItems();
    const quantityInput = document.querySelectorAll('.quantity-input')[index];
    const priceCell = document.querySelectorAll('.price')[index];
    const subtotalCell = document.querySelectorAll('.subtotal')[index];
    
    const quantity = parseInt(quantityInput.value); // Get the input value as an integer
    const price = parseFloat(priceCell.textContent); // Get the price from the price cell

    if (quantity <= 0) {
        alert("Check your quantity value");
        quantityInput.value = 1; // Set the value to 1
        cartItems[index].quantity = 1; // Update the cartItems array with the new quantity
    } 
    else {
        const subtotal = quantity * price; // Calculate the subtotal
        subtotalCell.textContent = subtotal.toFixed(2); // Update the subtotal cell with calculated value

        // Update the cartItems array with the new quantity
        cartItems[index].quantity = quantity;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    location.reload(); // Reload the page
}
