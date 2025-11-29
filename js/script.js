
// HTML Include System
async function loadIncludes() {
    const includes = document.querySelectorAll('[data-include]');
    
    for (const element of includes) {
        const file = element.getAttribute('data-include');
        try {
            const response = await fetch(file);
            if (response.ok) {
                const html = await response.text();
                element.innerHTML = html;
            } else {
                console.error(`Failed to load: ${file}`);
            }
        } catch (error) {
            console.error(`Error loading ${file}:`, error);
        }
    }
    
    // Initialize Feather Icons after all includes are loaded
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize scroll spy
    initScrollSpy();
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add delay for staggered effect
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

// Scroll Spy - Update URL hash based on visible section
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Update URL hash without triggering scroll
                history.replaceState(null, null, `#${id}`);
                
                // Update active nav link
                document.querySelectorAll('nav a[href^="#"]').forEach(link => {
                    link.classList.remove('text-white');
                    link.classList.add('text-gray-300');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.remove('text-gray-300');
                        link.classList.add('text-white');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

// Mobile Menu

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.setAttribute('data-feather', 'x');
    } else {
        menu.classList.add('hidden');
        icon.setAttribute('data-feather', 'menu');
    }
    
    // Re-render feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    menu.classList.add('hidden');
    icon.setAttribute('data-feather', 'menu');
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Project Filter

function filterProjects(category) {
    // Update active tab
    document.querySelectorAll('.project-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.filter === category) {
            tab.classList.add('active');
        }
    });

    // Filter cards
    document.querySelectorAll('.project-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}


// Contact Form Functions

function sendEmail() {
    const name = document.querySelector('input[placeholder="Your name"]')?.value || '';
    const email = document.querySelector('input[placeholder="Your email"]')?.value || '';
    const subject = document.querySelector('input[placeholder="Subject"]')?.value || '';
    const message = document.querySelector('textarea[placeholder="Your message"]')?.value || '';
    
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:agusdzuriana@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

function sendWhatsApp() {
    const name = document.querySelector('input[placeholder="Your name"]')?.value || '';
    const message = document.querySelector('textarea[placeholder="Your message"]')?.value || '';
    
    // WhatsApp message without subject
    const waMessage = `Hi, I'm ${name}.\n\nMessage:\n${message}`;
    const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`;
    window.open(waLink, '_blank');
}


// Initialize on DOM Ready

document.addEventListener('DOMContentLoaded', loadIncludes);
