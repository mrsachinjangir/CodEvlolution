document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // // Circuit animation
    // const canvas = document.getElementById('circuit-animation');
    // const ctx = canvas.getContext('2d');

    // canvas.width = canvas.offsetWidth;
    // canvas.height = canvas.offsetHeight;

    // const points = [];
    // const lines = [];

    // function createPoints() {
    //     const numPoints = 50;
    //     for (let i = 0; i < numPoints; i++) {
    //         points.push({
    //             x: Math.random() * canvas.width,
    //             y: Math.random() * canvas.height,
    //             vx: (Math.random() - 0.5) * 0.5,
    //             vy: (Math.random() - 0.5) * 0.5
    //         });
    //     }
    // }

    // function createLines() {
    //     for (let i = 0; i < points.length; i++) {
    //         for (let j = i + 1; j < points.length; j++) {
    //             if (Math.random() < 0.1) {
    //                 lines.push({ start: i, end: j });
    //             }
    //         }
    //     }
    // }

    // function animate() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);

    //     points.forEach(point => {
    //         point.x += point.vx;
    //         point.y += point.vy;

    //         if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
    //         if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
    //     });

    //     ctx.strokeStyle = '#8CC63F';
    //     ctx.lineWidth = 0.5;
    //     lines.forEach(line => {
    //         const start = points[line.start];
    //         const end = points[line.end];
    //         const dx = end.x - start.x;
    //         const dy = end.y - start.y;
    //         const distance = Math.sqrt(dx * dx + dy * dy);
            
    //         if (distance < 150) {
    //             ctx.globalAlpha = 1 - distance / 150;
    //             ctx.beginPath();
    //             ctx.moveTo(start.x, start.y);
    //             ctx.lineTo(end.x, end.y);
    //             ctx.stroke();
    //         }
    //     });

    //     ctx.fillStyle = '#8CC63F';
    //     ctx.globalAlpha = 1;
    //     points.forEach(point => {
    //         ctx.beginPath();
    //         ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
    //         ctx.fill();
    //     });

    //     requestAnimationFrame(animate);
    // }

    // createPoints();
    // createLines();
    // animate();

    // Intersection Observer for fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We will get back to you soon!');
        this.reset();
    });
});

// Add this to the end of your existing script.js file

// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    // Here you would typically send the email to your server or newsletter service
    console.log('Subscribing email:', email);
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});

// Smooth scrolling for footer links
document.querySelectorAll('.footer-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});