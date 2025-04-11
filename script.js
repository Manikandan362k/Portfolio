// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Form submission handling
$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // prevent the form from submitting normally

        const form = $(this);
        const formData = form.serialize(); // gather form fields

        $('#formStatus').html('<div class="loading">Sending message...</div>');

        $.ajax({
            url: "https://formspree.io/f/xgvarggr",
            method: "POST",
            data: formData,
            dataType: "json",
            success: function(response) {
                $('#formStatus').html('<div class="success">Message sent successfully!</div>');
                form[0].reset(); // reset the form

                // Optional redirect after 2 seconds
                setTimeout(() => {
                    window.location.href = "";
                }, 2000);
            },
            error: function(error) {
                $('#formStatus').html('<div class="error">Oops! Something went wrong. Please try again.</div>');
            }
        });
    });
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.querySelectorAll('.animate-fade-in').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);
// Trigger once on load
window.addEventListener('load', animateOnScroll);

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'var(--background)';
        navbar.style.boxShadow = 'none';
    }
}); 