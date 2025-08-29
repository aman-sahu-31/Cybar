// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();
  
  // Initialize authentication state
  initAuth();
  
  // Add smooth scrolling for navigation links
  initSmoothScrolling();
  
  // Add interactive features
  initInteractiveFeatures();
});

// Authentication functionality
function initAuth() {
  const authButton = document.getElementById('authButton');
  const loginForm = document.getElementById('loginForm');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const loginButton = document.getElementById('loginButton');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const userEmailSpan = document.getElementById('userEmail');
  
  let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  let userEmail = localStorage.getItem('userEmail') || '';
  
  function updateAuthState() {
    if (isLoggedIn) {
      authButton.textContent = 'Sign Out';
      loginForm.classList.add('hidden');
      welcomeMessage.classList.remove('hidden');
      userEmailSpan.textContent = userEmail || 'Developer';
    } else {
      authButton.textContent = 'Sign In';
      loginForm.classList.remove('hidden');
      welcomeMessage.classList.add('hidden');
    }
  }
  
  // Initial state
  updateAuthState();
  
  // Auth button click handler
  authButton.addEventListener('click', function() {
    if (isLoggedIn) {
      // Sign out
      isLoggedIn = false;
      userEmail = '';
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      emailInput.value = '';
      passwordInput.value = '';
    } else {
      // Show login form (already visible)
      emailInput.focus();
    }
    updateAuthState();
  });
  
  // Login form submission
  loginButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!email || !password) {
      showNotification('Please enter both email and password', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    // Simulate login process
    loginButton.textContent = 'Signing in...';
    loginButton.disabled = true;
    
    setTimeout(() => {
      isLoggedIn = true;
      userEmail = email;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      
      loginButton.textContent = 'Sign In';
      loginButton.disabled = false;
      
      updateAuthState();
      showNotification('Successfully signed in!', 'success');
    }, 1000);
  });
  
  // Enter key support for login form
  [emailInput, passwordInput].forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        loginButton.click();
      }
    });
  });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Interactive features
function initInteractiveFeatures() {
  // Animate stats on scroll
  animateStatsOnScroll();
  
  // Add hover effects to cards
  addCardHoverEffects();
  
  // Simulate real-time dashboard updates
  simulateDashboardUpdates();
  
  // Add click handlers for CTA buttons
  initCTAButtons();
}

// Animate statistics when they come into view
function animateStatsOnScroll() {
  const statValues = document.querySelectorAll('.stat-value, .dashboard-value');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  statValues.forEach(stat => {
    observer.observe(stat);
  });
}

// Animate number counting
function animateNumber(element) {
  const text = element.textContent;
  const number = parseFloat(text.replace(/[^0-9.]/g, ''));
  
  if (isNaN(number)) return;
  
  const duration = 2000;
  const steps = 60;
  const increment = number / steps;
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    
    if (current >= number) {
      current = number;
      clearInterval(timer);
    }
    
    // Format the number based on original text
    let formattedNumber;
    if (text.includes('%')) {
      formattedNumber = current.toFixed(1) + '%';
    } else if (text.includes('$')) {
      formattedNumber = '$' + current.toFixed(1) + 'M';
    } else if (text.includes('ms')) {
      formattedNumber = '< ' + Math.round(current) + 'ms';
    } else {
      formattedNumber = Math.round(current).toLocaleString();
    }
    
    element.textContent = formattedNumber;
  }, duration / steps);
}

// Add hover effects to cards
function addCardHoverEffects() {
  const cards = document.querySelectorAll('.feature-card, .problem-card, .dashboard-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
      this.style.transition = 'transform 0.2s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// Simulate real-time dashboard updates
function simulateDashboardUpdates() {
  const safeTransactions = document.querySelector('.dashboard-card.green .dashboard-value');
  const suspiciousDetected = document.querySelector('.dashboard-card.red .dashboard-value');
  const underReview = document.querySelector('.dashboard-card.blue .dashboard-value');
  
  if (!safeTransactions || !suspiciousDetected || !underReview) return;
  
  let safeCount = 24847;
  let suspiciousCount = 127;
  let reviewCount = 43;
  
  setInterval(() => {
    // Randomly update values
    if (Math.random() > 0.7) {
      safeCount += Math.floor(Math.random() * 5) + 1;
      safeTransactions.textContent = safeCount.toLocaleString();
    }
    
    if (Math.random() > 0.9) {
      suspiciousCount += Math.floor(Math.random() * 2);
      suspiciousDetected.textContent = suspiciousCount.toLocaleString();
    }
    
    if (Math.random() > 0.8) {
      reviewCount += Math.floor(Math.random() * 3) - 1;
      reviewCount = Math.max(0, reviewCount);
      underReview.textContent = reviewCount.toLocaleString();
    }
  }, 3000);
}

// Initialize CTA buttons
function initCTAButtons() {
  const ctaButtons = document.querySelectorAll('.cta-button');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent.trim();
      
      if (buttonText.includes('Demo')) {
        showNotification('Demo request submitted! We\'ll contact you soon.', 'success');
      } else if (buttonText.includes('Documentation')) {
        showNotification('Documentation will be available soon!', 'info');
      } else if (buttonText.includes('Dashboard')) {
        showNotification('Dashboard feature coming soon!', 'info');
      }
    });
  });
}

// Utility functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Add styles
  Object.assign(notification.style, {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '12px 24px',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '500',
    zIndex: '1000',
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease',
    maxWidth: '300px',
    wordWrap: 'break-word'
  });
  
  // Set background color based on type
  switch (type) {
    case 'success':
      notification.style.backgroundColor = '#059669';
      break;
    case 'error':
      notification.style.backgroundColor = '#dc2626';
      break;
    case 'info':
    default:
      notification.style.backgroundColor = '#2563eb';
      break;
  }
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after delay
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Add scroll-based navbar background opacity
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const scrolled = window.scrollY > 50;
  
  if (scrolled) {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.9)';
  }
});

// Add loading animation for the page
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});
