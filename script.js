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

// Email obfuscation function
function setupEmailObfuscation() {
    const contactLink = document.getElementById('contact-email');
    if (contactLink) {
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Split email into parts to obfuscate
            const emailParts = [
                'contactsolarcar',
                '@',
                'lists',
                '.',
                'stanford',
                '.',
                'edu'
            ];
            
            const email = emailParts.join('');
            window.location.href = 'mailto:' + email;
        });
    }
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
    
    // Initialize email obfuscation
    setupEmailObfuscation();
    
    // Initialize dynamic gallery
    initializeDynamicGallery();
});

// Image Modal/Lightbox functionality
let modal, modalImage, closeBtn, prevBtn, nextBtn;
let currentImageIndex = 0;
let modalImages = [];

// Initialize modal elements
function initializeModal() {
    modal = document.getElementById('imageModal');
    modalImage = document.getElementById('modalImage');
    closeBtn = document.querySelector('.close');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    
    if (!modal || !modalImage || !closeBtn || !prevBtn || !nextBtn) {
        console.error('Modal elements not found');
        return false;
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
        if (modal && modal.style.display === 'block') {
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
    
    return true;
}

// Get all currently displayed gallery images
function getAllDisplayedImages() {
    const galleryImages = document.querySelectorAll('.gallery-img');
    return Array.from(galleryImages).map(img => img.src);
}

// Open modal with specific image
function openModal(imageSrc) {
    if (!modal) {
        if (!initializeModal()) {
            console.error('Failed to initialize modal');
            return;
        }
    }
    
    modalImages = getAllDisplayedImages();
    currentImageIndex = modalImages.indexOf(imageSrc);
    
    if (currentImageIndex === -1) {
        currentImageIndex = 0;
    }
    
    if (modalImages.length > 0) {
        modalImage.src = modalImages[currentImageIndex];
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        updateNavButtons();
    }
}

// Close modal
function closeModal() {
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Navigate to previous image
function showPrevious() {
    if (modalImages.length === 0) return;
    
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = modalImages.length - 1;
    }
    modalImage.src = modalImages[currentImageIndex];
    updateNavButtons();
}

// Navigate to next image
function showNext() {
    if (modalImages.length === 0) return;
    
    if (currentImageIndex < modalImages.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    modalImage.src = modalImages[currentImageIndex];
    updateNavButtons();
}

// Update navigation button states
function updateNavButtons() {
    if (!prevBtn || !nextBtn) return;
    
    if (modalImages.length <= 1) {
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
        // Remove existing listeners to avoid duplicates
        img.removeEventListener('click', handleImageClick);
        img.addEventListener('click', handleImageClick);
    });
}

// Handle image click
function handleImageClick(e) {
    e.preventDefault();
    console.log('Image clicked:', e.target.src);
    openModal(e.target.src);
}

// Initialize modal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeModal();
});

// Dynamic Gallery System
let allImages = [];
let displayedImages = 0;
const imagesPerLoad = 12; // Reduced batch size for better performance
let isLoading = false;
let imageLoadQueue = [];
let lazyLoadObserver = null;

// Define all available images
const imageList = [
    // Original images
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
    // FSGP images
    'fsgp1.jpeg', 'fsgp2.jpeg', 'fsgp3.jpeg', 'fsgp4.jpeg', 'fsgp5.jpeg', 'fsgp6.jpeg', 'fsgp7.jpeg', 'fsgp8.jpeg', 'fsgp9.jpg', 'fsgp10.jpg',
    'fsgp13.jpg', 'fsgp14.jpg', 'fsgp15.jpg', 'fsgp16.jpg', 'fsgp17.jpg', 'fsgp18.jpg', 'fsgp19.jpg', 'fsgp20.jpg',
    // New scan images
    'scan0001.jpg', 'scan0002.jpg', 'scan0003.jpg', 'scan0004.jpg', 'scan0005.jpg', 'scan0006.jpg', 'scan0007.jpg', 'scan0008.jpg', 'scan0009.jpg', 'scan0010.jpg',
    'scan0011.jpg', 'scan0012.jpg', 'scan0013.jpg', 'scan0014.jpg', 'scan0015.jpg', 'scan0016.jpg', 'scan0017.jpg', 'scan0018.jpg', 'scan0019.jpg', 'scan0020.jpg',
    'scan0021.jpg', 'scan0022.jpg', 'scan0023.jpg', 'scan0024.jpg', 'scan0025.jpg', 'scan0026.jpg', 'scan0027.jpg', 'scan0028.jpg', 'scan0029.jpg', 'scan0030.jpg',
    'scan0037.jpg', 'scan0038.jpg', 'scan0039.jpg', 'scan0040.jpg', 'scan0041.jpg', 'scan0042.jpg', 'scan0043.jpg', 'scan0044.jpg', 'scan0045.jpg', 'scan0046.jpg',
    'scan0047.jpg', 'scan0048.jpg', 'scan0049.jpg', 'scan0050.jpg', 'scan0051.jpg', 'scan0052.jpg', 'scan0053.jpg', 'scan0054.jpg', 'scan0055.jpg', 'scan0056.jpg',
    'scan0057.jpg', 'scan0058.jpg', 'scan0059.jpg', 'scan0060.jpg', 'scan0061.jpg', 'scan0062.jpg', 'scan0063.jpg'
];

function initializeDynamicGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const imageCount = document.getElementById('imageCount');
    
    if (!galleryGrid || !loadMoreBtn) {
        console.error('Gallery elements not found');
        return;
    }
    
    // Shuffle images for variety
    allImages = [...imageList].sort(() => Math.random() - 0.5);
    
    // Add skeleton styles
    addSkeletonStyles();
    
    // Load initial batch
    loadMoreImages();
    
    // Update image count
    updateImageCount();
    
    // Load more button event
    loadMoreBtn.addEventListener('click', () => {
        if (!isLoading) {
            console.log('Load more button clicked');
            loadMoreImages();
            updateImageCount();
        }
    });
}

function loadMoreImages() {
    if (isLoading) return;
    
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (!galleryGrid) {
        console.error('Gallery grid not found');
        return;
    }
    
    isLoading = true;
    if (loadMoreBtn) {
        loadMoreBtn.textContent = 'Loading...';
        loadMoreBtn.disabled = true;
    }
    
    const startIndex = displayedImages;
    const endIndex = Math.min(startIndex + imagesPerLoad, allImages.length);
    
    console.log(`Loading images ${startIndex} to ${endIndex} of ${allImages.length}`);
    
    // Create gallery items with skeleton placeholders
    const fragment = document.createDocumentFragment();
    for (let i = startIndex; i < endIndex; i++) {
        const imageName = allImages[i];
        const galleryItem = createGalleryItemWithSkeleton(imageName, i);
        fragment.appendChild(galleryItem);
        displayedImages++;
    }
    
    galleryGrid.appendChild(fragment);
    
    // Process images in batches to prevent blocking
    processImageBatch(startIndex, endIndex);
    
    // Hide load more button if all images are loaded
    if (displayedImages >= allImages.length) {
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
    }
    
    // Re-add click listeners for new images
    addImageClickListeners();
}

function processImageBatch(startIndex, endIndex) {
    // Reset loading state after a short delay
    setTimeout(() => {
        isLoading = false;
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.textContent = 'Load More Photos';
            loadMoreBtn.disabled = false;
        }
    }, 500);
}

function createGalleryItemWithSkeleton(imageName, index) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item skeleton';
    
    // Create skeleton placeholder
    const skeleton = document.createElement('div');
    skeleton.className = 'skeleton-placeholder';
    
    // Create image element
    const img = document.createElement('img');
    img.src = `images/${imageName}`;
    img.alt = `Race Photo ${index + 1}`;
    img.className = 'gallery-img';
    img.style.cursor = 'pointer';
    img.style.display = 'none';
    
    // Add click listener directly to this image
    img.addEventListener('click', () => {
        console.log('Image clicked:', img.src);
        openModal(img.src);
    });
    
    // Handle image load
    img.onload = function() {
        const aspectRatio = this.naturalWidth / this.naturalHeight;
        const sizeClass = getImageSizeClass(aspectRatio, this.naturalWidth, this.naturalHeight);
        galleryItem.className = `gallery-item ${sizeClass}`;
        skeleton.style.display = 'none';
        img.style.display = 'block';
    };
    
    // Handle image load errors
    img.onerror = function() {
        console.warn(`Failed to load image: ${imageName}`);
        galleryItem.className = 'gallery-item standard';
        skeleton.style.display = 'none';
        img.style.display = 'block';
    };
    
    galleryItem.appendChild(skeleton);
    galleryItem.appendChild(img);
    return galleryItem;
}

function createGalleryItem(imageName, index) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = `images/${imageName}`;
    img.alt = `Race Photo ${index + 1}`;
    img.className = 'gallery-img';
    img.loading = 'lazy';
    img.style.cursor = 'pointer';
    
    // Add click listener directly to this image
    img.addEventListener('click', () => {
        console.log('Image clicked:', img.src);
        openModal(img.src);
    });
    
    // Analyze image dimensions and apply appropriate sizing
    img.onload = function() {
        const aspectRatio = this.naturalWidth / this.naturalHeight;
        const sizeClass = getImageSizeClass(aspectRatio, this.naturalWidth, this.naturalHeight);
        galleryItem.className = `gallery-item ${sizeClass}`;
    };
    
    // Handle image load errors
    img.onerror = function() {
        console.warn(`Failed to load image: ${imageName}`);
        galleryItem.className = 'gallery-item standard';
    };
    
    galleryItem.appendChild(img);
    return galleryItem;
}

function getImageSizeClass(aspectRatio, width, height) {
    // Define size categories based on aspect ratio and dimensions
    const isVeryWide = aspectRatio > 2.5;
    const isWide = aspectRatio > 1.5 && aspectRatio <= 2.5;
    const isSquare = aspectRatio >= 0.9 && aspectRatio <= 1.1;
    const isPortrait = aspectRatio < 0.7;
    const isTall = aspectRatio >= 0.7 && aspectRatio < 0.9;
    
    // Consider image resolution for additional sizing
    const isHighRes = width > 2000 || height > 2000;
    const isLowRes = width < 800 && height < 800;
    
    if (isVeryWide) {
        return isHighRes ? 'extra-wide large' : 'extra-wide';
    } else if (isWide) {
        return isHighRes ? 'wide large' : 'wide';
    } else if (isSquare) {
        return isHighRes ? 'square large' : 'square';
    } else if (isPortrait) {
        return isHighRes ? 'portrait large' : 'portrait';
    } else if (isTall) {
        return isHighRes ? 'tall large' : 'tall';
    } else {
        // Standard landscape
        return isHighRes ? 'standard large' : 'standard';
    }
}

function updateImageCount() {
    const imageCount = document.getElementById('imageCount');
    if (imageCount) {
        imageCount.textContent = `Showing ${displayedImages} of ${allImages.length} photos`;
    }
}

// Initialize lazy loading observer
function initializeLazyLoading() {
    if (lazyLoadObserver) return;
    
    lazyLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.remove('lazy');
                    lazyLoadObserver.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px 0px', // Start loading 50px before entering viewport
        threshold: 0.1
    });
}

// Add skeleton CSS styles
function addSkeletonStyles() {
    if (document.getElementById('skeleton-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'skeleton-styles';
    style.textContent = `
        .skeleton-placeholder {
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: skeleton-loading 1.5s infinite;
            border-radius: 15px;
        }
        
        .gallery-item.skeleton {
            background: #f0f0f0;
        }
        
        @keyframes skeleton-loading {
            0% {
                background-position: 200% 0;
            }
            100% {
                background-position: -200% 0;
            }
        }
        
        .gallery-img.lazy {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .gallery-img:not(.lazy) {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
}
