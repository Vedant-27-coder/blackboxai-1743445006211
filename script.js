// Form Validation for Contact Page
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Validate Name
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('error');
                nameError.classList.remove('hidden');
                isValid = false;
            } else {
                nameInput.classList.remove('error');
                nameError.classList.add('hidden');
            }

            // Validate Email
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.classList.add('error');
                emailError.classList.remove('hidden');
                isValid = false;
            } else {
                emailInput.classList.remove('error');
                emailError.classList.add('hidden');
            }

            // Validate Message
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (messageInput.value.trim() === '') {
                messageInput.classList.add('error');
                messageError.classList.remove('hidden');
                isValid = false;
            } else {
                messageInput.classList.remove('error');
                messageError.classList.add('hidden');
            }

            // If form is valid, show success message
            if (isValid) {
                // In a real implementation, you would send the form data to a server here
                contactForm.reset();
                const successMessage = document.getElementById('successMessage');
                successMessage.classList.remove('hidden');
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            }
        });
    }

    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const navMenu = document.querySelector('.hidden.md\\:flex');
            if (navMenu) {
                navMenu.classList.toggle('hidden');
                navMenu.classList.toggle('flex');
                navMenu.classList.toggle('flex-col');
                navMenu.classList.toggle('absolute');
                navMenu.classList.toggle('top-16');
                navMenu.classList.toggle('left-0');
                navMenu.classList.toggle('right-0');
                navMenu.classList.toggle('bg-blue-900');
                navMenu.classList.toggle('p-4');
                navMenu.classList.toggle('space-y-4');
                navMenu.classList.toggle('space-x-0');
                navMenu.classList.toggle('z-50');
            }
        });
    }
});