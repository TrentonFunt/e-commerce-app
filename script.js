  let cartCount = 0;

        // Add to Cart Logic
        document.querySelector('.add-to-cart').addEventListener('click', () => {
    cartCount++;
  document.querySelector('.cart-counter').textContent = cartCount;
            // Add animation/confetti here
        });

        // Checkout Form Submission
        document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
  alert('🎉 Your magical order has been placed!');
  cartCount = 0;
  document.querySelector('.cart-counter').textContent = cartCount;
            // Hide checkout and show product page again
        });

        // Variation Selection
        document.querySelectorAll('.variation-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.variation-option').forEach(opt =>
        opt.classList.remove('selected'));
      option.classList.add('selected');
      // Update main image logic here
    });
        });
