 let currentIndex = 0;
    const images = document.querySelectorAll('.slideshow-images img');

    function showNextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        updateSlideshow();
    }

    function updateSlideshow() {
        const offset = -currentIndex * 100;
        document.querySelector('.slideshow-images').style.transform = `translateX(${offset}%)`;  // Corrected this line
    }

    setInterval(showNextImage, 3000);

    // Function to increase quantity
    function increaseQuantity(button) {
        const quantityInput = button.previousElementSibling;
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;

        updatePrice(button); // Update the price when quantity changes
    }

    // Function to decrease quantity
    function decreaseQuantity(button) {
        const quantityInput = button.nextElementSibling;
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }

        updatePrice(button); // Update the price when quantity changes
    }

    // Function to update the price based on quantity
    function updatePrice(button) {
        const quantityInput = button.closest('.coffee-item').querySelector('.quantity-input'); // Find the correct quantity input
        const quantity = parseInt(quantityInput.value);
        const pricePerItem = 18.75; // Price per item in SAR
        const priceDisplay = button.closest('.coffee-item').querySelector('.price'); // Find the correct price display element

        const totalPrice = (quantity * pricePerItem).toFixed(2); // Calculate total price
        priceDisplay.textContent = `${totalPrice} SAR`; // Corrected this line
    }

    // Attach event listeners to all increase and decrease buttons
    document.addEventListener('DOMContentLoaded', () => {
        const increaseButtons = document.querySelectorAll('.increase');
        const decreaseButtons = document.querySelectorAll('.decrease');

        increaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                increaseQuantity(button);
            });
        });

        decreaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                decreaseQuantity(button);
            });
        });
    });

   let cart = []; // To store cart items

// Function to add items to the cart
function addToCart() {
    const newItem = {
        name: "Coffee",
        price: 18.75,
        quantity: 1
    };

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === newItem.name);
    if (existingItem) {
        existingItem.quantity += 1; // Increase the quantity
    } else {
        cart.push(newItem); // Add new item to the cart
    }

    updateCartCount(); // Update the displayed count

    alert("Item added to the cart!");
}

// Function to update the cart count display
function updateCartCount() {
    const totalCups = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalCups;
}
