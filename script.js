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
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Enhanced Intersection Observer for smooth section transitions
const observerOptions = {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const section = entry.target;
        const ratio = entry.intersectionRatio;
        
        if (entry.isIntersecting && ratio > 0.1) {
            section.classList.add('visible');
            
            // Add staggered animation to child elements
            const animatedElements = section.querySelectorAll('.about-card, .stat-item, .role-card, .gallery-item');
            animatedElements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe sections for fade animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-fade');
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Animate individual elements within sections (excluding gallery items)
    const animatedElements = document.querySelectorAll('.about-card, .stat, .role-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

// Enhanced scroll-based fade effect with smooth section transitions
let ticking = false;

function updateScrollFade() {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Create dynamic fade overlay based on scroll position
    const sections = document.querySelectorAll('.section-fade');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionHeight = rect.height;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Calculate fade intensity based on scroll position
        const scrollProgress = Math.max(0, Math.min(1, (scrollY - sectionTop + windowHeight) / (windowHeight + sectionHeight)));
        
        // Apply smooth fade effect to section overlays
        const opacity = Math.min(1, scrollProgress * 1.5);
        section.style.setProperty('--fade-opacity', opacity);
        
        // Add parallax effect to section content
        const parallaxOffset = (scrollY - sectionTop) * 0.05;
        section.style.setProperty('--parallax-offset', `${parallaxOffset}px`);
        
        // Add subtle scale effect based on scroll position
        const scale = 1 + (scrollProgress * 0.01);
        section.style.setProperty('--section-scale', scale);
    });
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateScrollFade);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Gallery expand functionality
document.addEventListener('DOMContentLoaded', () => {
    const expandBtn = document.getElementById('expand-gallery');
    const initialGallery = document.getElementById('initial-gallery');
    const fullGallery = document.getElementById('full-gallery');
    
    if (expandBtn && initialGallery && fullGallery) {
        expandBtn.addEventListener('click', () => {
            // Hide initial gallery and expand button
            initialGallery.classList.add('hidden');
            expandBtn.classList.add('hidden');
            
            // Show full gallery with animation
            fullGallery.classList.remove('hidden');
            fullGallery.classList.add('expanded');
            
            // Smooth scroll to gallery section
            fullGallery.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add click handlers for CTA buttons
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        // Add a subtle animation on click
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    });
});

// Lazy loading for images (when you add real images)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Counter animation for statistics
function animateCounter(element, target, suffix = '', duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format the number with proper formatting and suffix
        let displayValue;
        if (target >= 1000) {
            displayValue = Math.floor(current).toLocaleString();
        } else {
            displayValue = Math.floor(current);
        }
        
        element.textContent = displayValue + suffix;
    }, 16);
}

// Initialize counter animations
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.getAttribute('data-target'));
                const suffix = element.getAttribute('data-suffix') || '';
                
                if (target > 0) {
                    // Reset to 0 and animate
                    element.textContent = '0';
                    setTimeout(() => {
                        animateCounter(element, target, suffix);
                    }, 200);
                }
                
                counterObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
});

// Image Modal/Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentImageIndex = 0;
    let allImages = [];
    
    // Get all gallery images
    function getAllImages() {
        const initialGallery = document.getElementById('initial-gallery');
        const fullGallery = document.getElementById('full-gallery');
        const images = [];
        
        if (initialGallery) {
            const initialImgs = initialGallery.querySelectorAll('.gallery-img');
            initialImgs.forEach(img => images.push(img.src));
        }
        
        if (fullGallery) {
            const fullImgs = fullGallery.querySelectorAll('.gallery-img');
            fullImgs.forEach(img => images.push(img.src));
        }
        
        return [...new Set(images)]; // Remove duplicates
    }
    
    // Open modal with specific image
    function openModal(imageSrc) {
        allImages = getAllImages();
        currentImageIndex = allImages.indexOf(imageSrc);
        
        if (currentImageIndex === -1) {
            currentImageIndex = 0;
        }
        
        modalImage.src = allImages[currentImageIndex];
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        updateNavButtons();
    }
    
    // Close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Navigate to previous image
    function showPrevious() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
        } else {
            currentImageIndex = allImages.length - 1;
        }
        modalImage.src = allImages[currentImageIndex];
        updateNavButtons();
    }
    
    // Navigate to next image
    function showNext() {
        if (currentImageIndex < allImages.length - 1) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;
        }
        modalImage.src = allImages[currentImageIndex];
        updateNavButtons();
    }
    
    // Update navigation button states
    function updateNavButtons() {
        if (allImages.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }
    }
    
    // Add click event listeners to all gallery images
    function addImageClickListeners() {
        const galleryImages = document.querySelectorAll('.gallery-img');
        galleryImages.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                openModal(img.src);
            });
        });
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    showPrevious();
                    break;
                case 'ArrowRight':
                    showNext();
                    break;
            }
        }
    });
    
    // Initialize image click listeners
    addImageClickListeners();
    
    // Re-add listeners when gallery is expanded
    const expandBtn = document.getElementById('expand-gallery');
    if (expandBtn) {
        expandBtn.addEventListener('click', () => {
            setTimeout(() => {
                addImageClickListeners();
            }, 300);
        });
    }
});
