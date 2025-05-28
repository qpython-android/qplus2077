// This file contains JavaScript code for handling animations, potentially using GSAP for enhanced visual effects.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP animations
    const heroTitle = document.querySelector('.hero-title');
    const callToAction = document.querySelector('.call-to-action');

    // Fade in hero title
    gsap.from(heroTitle, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: 'power2.out'
    });

    // Fade in call to action
    gsap.from(callToAction, {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: 0.5,
        ease: 'power2.out'
    });

    // Navigation highlight on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.classList.contains(current)) {
                link.classList.add('active');
            }
        });
    });
});