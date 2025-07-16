/* ==========================================================================
   Juniper Island - Main JavaScript
   Minimal vanilla JS for core functionality
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // ==========================================================================
  // Mobile Menu Toggle
  // ==========================================================================
  
  const menuButton = document.getElementById('menuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking mobile links
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
      });
    });
  }
  
  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================
  
  const navHeight = 64; // 4rem = 64px
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ==========================================================================
  // Navigation Glass Effect on Scroll
  // ==========================================================================
  
  const navigation = document.querySelector('.navigation-container');
  
  if (navigation) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navigation.style.background = 'rgba(0, 0, 0, 0.9)';
        navigation.style.backdropFilter = 'blur(25px)';
      } else {
        navigation.style.background = 'rgba(0, 0, 0, 0.8)';
        navigation.style.backdropFilter = 'blur(20px)';
      }
    });
  }
  
  // ==========================================================================
  // Contact Form Toggle and Validation
  // ==========================================================================
  
  const contactForm = document.querySelector('.contact-form');
  const toggleButton = document.getElementById('toggleDetails');
  const toggleIcon = document.getElementById('toggleIcon');
  const toggleText = document.getElementById('toggleText');
  const optionalFields = document.getElementById('optionalFields');
  
  let detailsVisible = false;
  
  // Toggle project details
  if (toggleButton && optionalFields) {
    // Initially hide optional fields
    optionalFields.style.display = 'none';
    
    toggleButton.addEventListener('click', function() {
      detailsVisible = !detailsVisible;
      
      if (detailsVisible) {
        optionalFields.style.display = 'block';
        toggleIcon.style.transform = 'rotate(90deg)';
        toggleText.textContent = 'Hide project details';
      } else {
        optionalFields.style.display = 'none';
        toggleIcon.style.transform = 'rotate(0deg)';
        toggleText.textContent = 'Add project details (optional)';
      }
    });
  }
  
  // Form validation and submission
  if (contactForm) {
    contactForm.addEventListener('submit', function() {
      const submitButton = this.querySelector('.contact-form-button');
      const requiredFields = this.querySelectorAll('[required]');
      let isValid = true;
      
      // Check required fields
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderBottomColor = 'rgba(239, 68, 68, 0.5)';
        } else {
          field.style.borderBottomColor = 'rgba(255, 255, 255, 0.2)';
        }
      });
      
      if (isValid && submitButton) {
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
      }
    });
  }
  
});