// Data
const typingTexts = [
    'Java Backend Developer',
    'Spring Boot Developer',
    'Microservices',
    'API Developer',
    'Team Lead'
];
// Global Variables
let currentTextIndex = 0;
let currentText = '';
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseDuration = 2000;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimatedBackground();
    initializeNavigation();
    initializeTypingAnimation();
    initializeScrollAnimations();
    initializeSkillBars();
    generateProjects();
    generateExperience();
    initializeContactForm();

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // ONLY prevent default for internal anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();

                const sectionId = href.substring(1);
                const section = document.getElementById(sectionId);

                if (section) {
                    // Your smooth scroll logic here
                    window.scrollTo({
                        top: section.offsetTop - document.querySelector('.navbar').offsetHeight,
                        behavior: 'smooth'
                    });
                }
            }
            // For other links (like the PDF), do nothing and let the browser handle it.
        });
    });
});

// Animated Background
function initializeAnimatedBackground() {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    let animationId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles = [];
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.1
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(6, 182, 212, 0.02)');
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.02)');
        gradient.addColorStop(1, 'rgba(236, 72, 153, 0.02)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw and update particles
        particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;

            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
            ctx.fill();
        });

        // Draw connections between nearby particles
        particles.forEach((particleA, i) => {
            particles.slice(i + 1).forEach(particleB => {
                const dx = particleA.x - particleB.x;
                const dy = particleA.y - particleB.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particleA.x, particleA.y);
                    ctx.lineTo(particleB.x, particleB.y);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
                    ctx.stroke();
                }
            });
        });

        animationId = requestAnimationFrame(animate);
    }

    animate();
}

// Navigation
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const progressBar = document.querySelector('.scroll-progress');

    // Scroll progress and active section tracking
    function updateNavigation() {
        const scrolled = window.scrollY;
        const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxHeight) * 100;
        progressBar.style.width = `${progress}%`;

        // Update active section
        const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
        let activeSection = 'hero';

        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    activeSection = sectionId;
                }
            }
        });

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.section === activeSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateNavigation);
}

// Typing Animation
function initializeTypingAnimation() {
    const typingElement = document.getElementById('typing-text');

    function typeText() {
        const fullText = typingTexts[currentTextIndex];

        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }

        typingElement.textContent = currentText;

        let timeout;
        if (isDeleting) {
            timeout = deletingSpeed;
        } else {
            timeout = typingSpeed;
        }

        if (!isDeleting && currentText === fullText) {
            timeout = pauseDuration;
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
        }

        setTimeout(typeText, timeout);
    }

    typeText();
}

// Scroll Animations
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.dataset.animation || 'fade';
                
                setTimeout(() => {
                    element.classList.add(`animate-${animation}`);
                }, element.dataset.delay || 0);
                
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Skill Bars Animation
function initializeSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target;
                const progressBar = skillItem.querySelector('.skill-progress');
                const percentage = skillItem.dataset.percentage;

                setTimeout(() => {
                    progressBar.style.width = `${percentage}%`;
                    progressBar.classList.add('animate');
                }, 200);

                observer.unobserve(skillItem);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        observer.observe(item);
    });
}

// Generate Projects
function generateProjects() {
    // No-op: Static HTML is now used for projects. Remove dynamic generation to avoid duplicates.
}

// Generate Experience Timeline
function generateExperience() {
    // No-op: Static HTML is now used for experience. Remove dynamic generation to avoid duplicates.
}

// Project Modal
function openProjectModal(projectIndex) {
    const project = projects[projectIndex];
    const modal = document.getElementById('project-modal');
    
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    
    document.getElementById('modal-details').innerHTML = `
        <h4>Project Details</h4>
        <p>${project.details}</p>
    `;
    
    document.getElementById('modal-features').innerHTML = `
        <h4>Key Features</h4>
        <ul>
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
    `;
    
    document.getElementById('modal-tech-stack').innerHTML = `
        <h4>Technology Stack</h4>
        <div class="tech-stack">
            ${project.techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>
    `;
    
    if (project.githubUrl) {
        document.getElementById('modal-actions').innerHTML = `
            <button class="btn btn-primary btn-full" onclick="window.open('${project.githubUrl}', '_blank')">
                View on GitHub
            </button>
        `;
    } else {
        document.getElementById('modal-actions').innerHTML = '';
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Contact Form
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Clear errors on input
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', function() {
            clearError(this.name);
            this.classList.remove('error');
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };

        const errors = validateForm(formData);

        // Clear previous errors
        clearAllErrors();

        if (Object.keys(errors).length === 0) {
            // Success
            alert('Thank you for your message! I\'ll get back to you soon.');
            form.reset();
        } else {
            // Show errors
            Object.keys(errors).forEach(field => {
                showError(field, errors[field]);
            });
        }
    });
}

function validateForm(data) {
    const errors = {};

    if (!data.name) {
        errors.name = 'Name is required';
    }

    if (!data.email) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!data.message) {
        errors.message = 'Message is required';
    }

    return errors;
}

function showError(field, message) {
    const input = document.getElementById(field);
    const errorElement = document.getElementById(`${field}-error`);
    
    input.classList.add('error');
    errorElement.textContent = message;
}

function clearError(field) {
    const errorElement = document.getElementById(`${field}-error`);
    errorElement.textContent = '';
}

function clearAllErrors() {
    ['name', 'email', 'message'].forEach(field => {
        clearError(field);
        document.getElementById(field).classList.remove('error');
    });
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = document.createElement('script');
    smoothScrollPolyfill.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@v2.0.0/dist/smoothscroll.min.js';
    document.head.appendChild(smoothScrollPolyfill);
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll event handlers are already attached in initializeNavigation
}, 16)); // ~60fps