// Handle contact form submission
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            const formContainer = contactForm.parentElement;

            // Create success message if it doesn't exist
            let successMessage = formContainer.querySelector('.form-success');
            if (!successMessage) {
                successMessage = document.createElement('div');
                successMessage.className = 'form-success';
                formContainer.insertBefore(successMessage, contactForm);
            }

            // Show success message
            successMessage.textContent = `Bedankt ${name}! We hebben je bericht ontvangen en nemen zo spoedig mogelijk contact met je op.`;
            successMessage.classList.add('show');

            // Reset form
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        });
    }
});

// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add animation to product cards when they come into view
document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');

    if (productCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        productCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    }
});

// Shopping cart functionality
class ShoppingCart {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.init();
    }

    init() {
        // Add event listeners to all "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productCard = e.target.closest('.product-card');
                const product = {
                    id: productCard.dataset.id,
                    name: productCard.querySelector('h3').textContent,
                    price: productCard.querySelector('.price').textContent,
                    quantity: 1
                };
                this.addToCart(product);
            });
        });

        // Initialize cart icon
        this.updateCartIcon();
    }

    addToCart(product) {
        const existingProduct = this.cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            this.cart.push(product);
        }

        this.saveCart();
        this.updateCartIcon();
        this.showNotification('Product toegevoegd aan winkelwagen');
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartIcon();
        this.updateCartDisplay();
    }

    updateQuantity(productId, quantity) {
        const product = this.cart.find(item => item.id === productId);
        if (product) {
            product.quantity = Math.max(1, quantity);
            this.saveCart();
            this.updateCartIcon();
            this.updateCartDisplay();
        }
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    updateCartIcon() {
        const cartCount = this.cart.reduce((total, item) => total + item.quantity, 0);
        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) {
            cartIcon.setAttribute('data-count', cartCount);
        }
    }

    updateCartDisplay() {
        const cartItems = document.querySelector('.cart-items');
        if (!cartItems) return;

        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus">+</button>
                </div>
                <button class="remove-item">×</button>
            </div>
        `).join('');

        // Add event listeners to quantity buttons
        cartItems.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const cartItem = e.target.closest('.cart-item');
                const productId = cartItem.dataset.id;
                const quantityElement = cartItem.querySelector('span');
                let quantity = parseInt(quantityElement.textContent);

                if (e.target.classList.contains('plus')) {
                    quantity += 1;
                } else if (e.target.classList.contains('minus')) {
                    quantity -= 1;
                }

                this.updateQuantity(productId, quantity);
            });
        });

        // Add event listeners to remove buttons
        cartItems.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.closest('.cart-item').dataset.id;
                this.removeFromCart(productId);
            });
        });

        // Update total
        const total = this.cart.reduce((sum, item) => {
            const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
            return sum + (price * item.quantity);
        }, 0);

        const totalElement = document.querySelector('.cart-total');
        if (totalElement) {
            totalElement.textContent = `Totaal: €${total.toFixed(2)}`;
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Scroll animation for headings
function handleScrollAnimation() {
    const headings = document.querySelectorAll('h2, h3');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    headings.forEach(heading => {
        observer.observe(heading);
    });
}

// Cart sidebar functionality
function initCartSidebar() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCart = document.querySelector('.close-cart');

    if (cartIcon && cartSidebar) {
        cartIcon.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            window.shoppingCart.updateCartDisplay();
        });
    }

    if (closeCart && cartSidebar) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
        });
    }
}

// Checkout page functionality
function initCheckoutPage() {
    const checkoutForm = document.getElementById('checkoutForm');
    const successMessage = document.querySelector('.success-message');

    if (checkoutForm && successMessage) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            checkoutForm.style.display = 'none';
            successMessage.classList.add('show');
            localStorage.removeItem('cart');
            const cartIcon = document.querySelector('.cart-icon');
            if (cartIcon) {
                cartIcon.setAttribute('data-count', '0');
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize shopping cart
    window.shoppingCart = new ShoppingCart();

    // Initialize scroll animations
    handleScrollAnimation();

    // Initialize cart sidebar
    initCartSidebar();

    // Initialize checkout page if we're on it
    initCheckoutPage();
}); 