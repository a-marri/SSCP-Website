// Component Loader
// This script loads common components and sets active navigation states

class ComponentLoader {
    constructor() {
        this.components = {};
        this.currentPage = this.getCurrentPage();
    }

    // Get the current page identifier from the filename
    getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop().split('.')[0];
        
        // Map filenames to page identifiers
        const pageMap = {
            'index': 'home',
            'team': 'team',
            'team-history': 'team-history',
            'faculty': 'faculty',
            'sponsors': 'sponsors',
            'join': 'join',
            'contact': 'contact'
        };
        
        return pageMap[filename] || 'home';
    }

    // Load a component from a file
    async loadComponent(componentName, targetElement) {
        try {
            // Determine the correct path for navigation component
            let componentPath = `components/${componentName}.html`;
            if (componentName === 'navigation') {
                // Check if we're in the pages directory
                const isInPagesDirectory = window.location.pathname.includes('/pages/');
                if (isInPagesDirectory) {
                    componentPath = `../components/navigation-pages.html`;
                } else {
                    componentPath = `components/navigation.html`;
                }
            } else if (window.location.pathname.includes('/pages/')) {
                // For other components when in pages directory, use relative path
                componentPath = `../components/${componentName}.html`;
            }
            
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentName} component`);
            }
            const html = await response.text();
            
            // Store the component HTML
            this.components[componentName] = html;
            
            // Insert into target element
            const target = document.querySelector(targetElement);
            if (target) {
                target.innerHTML = html;
                
                // Set active navigation state after loading
                if (componentName === 'navigation') {
                    this.setActiveNavigation();
                    // Initialize mobile menu after navigation is loaded
                    this.initializeMobileMenu();
                }
            }
        } catch (error) {
            console.error(`Error loading ${componentName} component:`, error);
        }
    }

    // Set the active navigation state based on current page
    setActiveNavigation() {
        // Remove active class from all nav links
        const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        allNavLinks.forEach(link => link.classList.remove('active'));

        // Add active class to current page links
        const currentPageLinks = document.querySelectorAll(`[data-page="${this.currentPage}"]`);
        currentPageLinks.forEach(link => link.classList.add('active'));
    }

    // Initialize mobile menu functionality
    initializeMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileNavMenu = document.getElementById('mobileNavMenu');

        if (mobileMenuToggle && mobileNavMenu && !mobileMenuToggle.dataset.mobileMenuInitialized) {
            // Set up accessibility attributes
            mobileMenuToggle.setAttribute('role', 'button');
            mobileMenuToggle.setAttribute('tabindex', '0');
            mobileMenuToggle.setAttribute('aria-controls', 'mobileNavMenu');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');

            // Toggle function
            const toggleMobileMenu = (event) => {
                event.preventDefault();
                mobileMenuToggle.classList.toggle('active');
                mobileNavMenu.classList.toggle('active');
                const isActive = mobileNavMenu.classList.contains('active');
                mobileMenuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            };

            // Add event listeners
            mobileMenuToggle.addEventListener('click', toggleMobileMenu);
            mobileMenuToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleMobileMenu(e);
                }
            });

            // Close mobile menu when clicking on a link
            const mobileNavLinks = mobileNavMenu.querySelectorAll('.mobile-nav-link');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenuToggle.classList.remove('active');
                    mobileNavMenu.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuToggle.contains(e.target) && !mobileNavMenu.contains(e.target)) {
                    mobileMenuToggle.classList.remove('active');
                    mobileNavMenu.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                }
            });

            // Close mobile menu on window resize to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    mobileMenuToggle.classList.remove('active');
                    mobileNavMenu.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                }
            });

            // Mark as initialized
            mobileMenuToggle.dataset.mobileMenuInitialized = 'true';
        }
    }

    // Load all common components
    async loadAllComponents() {
        // Load navigation
        await this.loadComponent('navigation', '#navigation-container');
        
        // Load footer
        await this.loadComponent('footer', '#footer-container');
    }

    // Initialize the component loader
    async init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadAllComponents());
        } else {
            await this.loadAllComponents();
        }
    }
}

// Initialize the component loader
const componentLoader = new ComponentLoader();
componentLoader.init();
