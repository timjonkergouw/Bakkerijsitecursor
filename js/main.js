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