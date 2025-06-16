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

// Initialize shopping cart when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.shoppingCart = new ShoppingCart();
}); 