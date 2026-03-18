// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const themeToggle = document.getElementById('theme-toggle');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside (excluding theme toggle)
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) &&
            !navMenu.contains(e.target) &&
            !themeToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Function to get initial theme preference
    function getInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }

        // Check system preference if no saved preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    }

    // Set initial theme
    const initialTheme = getInitialTheme();
    htmlElement.setAttribute('data-theme', initialTheme);

    // Update toggle button state
    updateThemeToggleIcon(initialTheme);

    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        // Update theme
        htmlElement.setAttribute('data-theme', newTheme);

        // Save preference
        localStorage.setItem('theme', newTheme);

        // Update icon
        updateThemeToggleIcon(newTheme);

        // Add a subtle animation
        themeToggle.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });

    // Listen for system theme changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', function(e) {
            // Only update if user hasn't set a preference
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                htmlElement.setAttribute('data-theme', newTheme);
                updateThemeToggleIcon(newTheme);
            }
        });
    }

    function updateThemeToggleIcon(theme) {
        const moonIcon = themeToggle.querySelector('.fa-moon');
        const sunIcon = themeToggle.querySelector('.fa-sun');

        if (theme === 'light') {
            moonIcon.style.display = 'inline';
            sunIcon.style.display = 'none';
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        } else {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline';
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        }
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add fade-in animation for page content
document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('.main');
    if (main) {
        main.style.opacity = '0';
        main.style.transform = 'translateY(20px)';

        setTimeout(() => {
            main.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            main.style.opacity = '1';
            main.style.transform = 'translateY(0)';
        }, 100);
    }
});