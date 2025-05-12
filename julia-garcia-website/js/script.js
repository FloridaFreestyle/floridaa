/**
 * Julia Garcia Portfolio Website
 * Main JavaScript File
 * 
 * This file contains JavaScript functionality for:
 * 1. Mobile menu toggle
 * 2. Smooth scrolling for navigation links
 * 3. Form validation and submission handling
 * 4. Current year display in footer
 */

document.addEventListener('DOMContentLoaded', function() {
    /**
     * Mobile Menu Toggle
     * Shows/hides the navigation menu on mobile devices
     */
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav__list');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('nav__list--active');
            menuToggle.classList.toggle('menu-toggle--active');
        });
    }
    
    /**
     * Smooth Scrolling for Navigation Links
     * Provides smooth scrolling to section anchors
     */
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply to links that point to an ID on the page
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    if (navList.classList.contains('nav__list--active')) {
                        navList.classList.remove('nav__list--active');
                        menuToggle.classList.remove('menu-toggle--active');
                    }
                    
                    // Scroll to the target element with offset for header
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    /**
     * Contact Form Validation and Submission
     * Validates form fields and handles form submission
     */
    const contactForm = document.querySelector('.contact__form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            const formStatus = document.querySelector('.form-status');
            
            // Reset previous error messages
            resetFormErrors();
            
            // Validate form fields
            let isValid = true;
            
            // Name validation
            if (!nameInput.value.trim()) {
                isValid = false;
                showError(nameInput, 'Please enter your name');
            } else {
                removeError(nameInput);
            }
            
            // Email validation
            if (!emailInput.value.trim()) {
                isValid = false;
                showError(emailInput, 'Please enter your email');
            } else if (!isValidEmail(emailInput.value)) {
                isValid = false;
                showError(emailInput, 'Please enter a valid email address');
            } else {
                removeError(emailInput);
            }
            
            // Message validation
            if (!messageInput.value.trim()) {
                isValid = false;
                showError(messageInput, 'Please enter your message');
            } else {
                removeError(messageInput);
            }
            
            // If form is valid, simulate submission
            if (isValid) {
                // In a real implementation, you would send the form data to a server
                // For now, we'll just show a success message
                
                // Show loading state
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalButtonText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                // Simulate server request with timeout
                setTimeout(() => {
                    // Show success message
                    if (formStatus) {
                        formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
                        formStatus.className = 'form-status success';
                    } else {
                        alert('Thank you for your message! I will get back to you soon.');
                    }
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                    
                    // Clear success message after 5 seconds
                    setTimeout(() => {
                        if (formStatus) {
                            formStatus.textContent = '';
                            formStatus.className = 'form-status';
                        }
                    }, 5000);
                    
                }, 1000);
            }
        });
    }
    
    /**
     * Helper Functions for Form Validation
     */
    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorElement = formGroup.querySelector('.error-message');
        
        // Add error class to input
        input.classList.add('error');
        
        // Create error message element if it doesn't exist
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }
    
    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        // Remove error class from input
        input.classList.remove('error');
        
        // Remove error message if it exists
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
    }
    
    function resetFormErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        const errorInputs = document.querySelectorAll('.form-input.error, .form-textarea.error');
        
        errorMessages.forEach(element => {
            element.parentElement.removeChild(element);
        });
        
        errorInputs.forEach(input => {
            input.classList.remove('error');
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    /**
     * Update Copyright Year
     * Automatically updates the year in the footer copyright
     */
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});