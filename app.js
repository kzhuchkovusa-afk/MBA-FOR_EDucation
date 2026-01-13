// ========================================
// UNFAIR ADVANTAGE SYSTEMS - JavaScript
// ========================================

(function() {
  'use strict';

  // ========================================
  // STICKY HEADER ON SCROLL
  // ========================================
  function initStickyHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    
    function updateHeader() {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
      
      lastScrollY = currentScrollY;
    }

    // Initial check
    updateHeader();
    
    // On scroll
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  // ========================================
  // SMOOTH SCROLL TO ANCHORS
  // ========================================
  function initSmoothScroll() {
    // Get header height for offset
    const header = document.getElementById('header');
    const headerHeight = header ? header.offsetHeight : 70;

    // Handle all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignore empty hash
        if (href === '#' || href === '#!') return;
        
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = targetPosition - headerHeight - 20;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          const nav = document.getElementById('nav');
          const burger = document.getElementById('burger');
          if (nav && burger) {
            nav.classList.remove('active');
            burger.classList.remove('active');
          }
        }
      });
    });
  }

  // ========================================
  // MOBILE MENU TOGGLE
  // ========================================
  function initMobileMenu() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (!burger || !nav) return;

    burger.addEventListener('click', function() {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = nav.contains(event.target);
      const isClickOnBurger = burger.contains(event.target);

      if (!isClickInsideNav && !isClickOnBurger && nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('active');
      }
    });

    // Close menu on window resize (desktop view)
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth > 900) {
          nav.classList.remove('active');
          burger.classList.remove('active');
        }
      }, 250);
    });
  }

  // ========================================
  // FAQ ACCORDION
  // ========================================
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-item__question');
      
      if (question) {
        question.addEventListener('click', function() {
          // Toggle current item
          const isActive = item.classList.contains('active');
          
          // Optional: Close all other items (uncomment if you want only one open at a time)
          // faqItems.forEach(otherItem => {
          //   if (otherItem !== item) {
          //     otherItem.classList.remove('active');
          //   }
          // });
          
          // Toggle current
          if (isActive) {
            item.classList.remove('active');
          } else {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // ========================================
  // COURSE ACCORDION
  // ========================================
  function initCourseAccordion() {
    const courseItems = document.querySelectorAll('.course-item');

    courseItems.forEach(item => {
      const header = item.querySelector('.course-item__header');
      
      if (header) {
        header.addEventListener('click', function() {
          // Toggle current item
          const isActive = item.classList.contains('active');
          
          // Optional: Close all other items (uncomment if you want only one open at a time)
          // courseItems.forEach(otherItem => {
          //   if (otherItem !== item) {
          //     otherItem.classList.remove('active');
          //   }
          // });
          
          // Toggle current
          if (isActive) {
            item.classList.remove('active');
          } else {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // ========================================
  // ACTIVE MENU ITEM HIGHLIGHT (OPTIONAL)
  // ========================================
  function initActiveMenuHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const menuLinks = document.querySelectorAll('.header__menu-link');

    if (sections.length === 0 || menuLinks.length === 0) return;

    function highlightActiveSection() {
      const scrollPosition = window.scrollY + 150; // Offset for better UX

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    // Uncomment to enable active menu highlighting
    // window.addEventListener('scroll', highlightActiveSection, { passive: true });
    // highlightActiveSection(); // Initial check
  }

  // ========================================
  // FORM VALIDATION ENHANCEMENT (OPTIONAL)
  // ========================================
  function initFormValidation() {
    const form = document.querySelector('form[name="apply"]');
    
    if (!form) return;

    form.addEventListener('submit', function(e) {
      // Basic validation is handled by HTML5 required attributes
      // Add custom validation here if needed
      
      const goal = document.getElementById('goal');
      if (goal && goal.value.trim().length < 10) {
        e.preventDefault();
        alert('Please provide more details about your 90-day goal (at least 10 characters).');
        goal.focus();
        return false;
      }
      
      // Form will submit to Netlify
      return true;
    });
  }

  // ========================================
  // INITIALIZE ALL
  // ========================================
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Initialize all components
    initStickyHeader();
    initSmoothScroll();
    initMobileMenu();
    initFAQ();
    initCourseAccordion();
    initActiveMenuHighlight();
    initFormValidation();

    // Log initialization (remove in production)
    console.log('Unfair Advantage Systems - Initialized');
  }

  // Start initialization
  init();

})();
