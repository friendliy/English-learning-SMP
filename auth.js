// Auth Guard - Protects pages that require login
class AuthGuard {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
    this.publicPages = ['login.html', 'register.html', 'index.html'];
    this.protectedPages = ['dashboard.html', 'vocab.html', 'quiz.html', 'listening.html', 'leaderboard.html'];
    
    this.checkAuth();
  }
  
  checkAuth() {
    // If this is a public page, no auth needed
    if (this.publicPages.includes(this.currentPage)) {
      return;
    }
    
    // If this is a protected page and no user is logged in, redirect to login
    if (this.protectedPages.includes(this.currentPage) && !this.currentUser) {
      this.redirectToLogin();
      return;
    }
    
    // User is authenticated, allow access
    this.initAuthenticatedFeatures();
  }
  
  redirectToLogin() {
    const currentUrl = encodeURIComponent(window.location.href);
    window.location.href = `index.html?redirect=${this.currentPage}`;
  }
  
  initAuthenticatedFeatures() {
    // Add logout functionality to any logout buttons
    document.addEventListener('DOMContentLoaded', () => {
      const logoutButtons = document.querySelectorAll('[data-logout], .logout-btn');
      logoutButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.logout();
        });
      });
    });
    
    // Listen for storage changes (logout from another tab)
    window.addEventListener('storage', (e) => {
      if (e.key === 'currentUser' && !e.newValue) {
        // User logged out from another tab
        window.location.href = 'login.html';
      }
    });
  }
  
  logout() {
    if (!confirm('Yakin ingin keluar? Progress yang belum tersimpan akan hilang.')) {
      return;
    }
    
    // Clear user session
    localStorage.removeItem("currentUser");
    
    // Show logout notification
    this.showNotification('Berhasil keluar! Sampai jumpa lagi! 👋', 'info');
    
    // Redirect to login after delay
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  }
  
  showNotification(message, type = 'info') {
    const colors = {
      success: 'linear-gradient(135deg, #27ae60, #2ecc71)',
      error: 'linear-gradient(135deg, #e74c3c, #c0392b)',
      info: 'linear-gradient(135deg, #3498db, #2980b9)',
      warning: 'linear-gradient(135deg, #f39c12, #e67e22)'
    };
    
    const icons = {
      success: '✅',
      error: '❌',
      info: 'ℹ️',
      warning: '⚠️'
    };
    
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${colors[type]};
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      z-index: 10000;
      font-family: Arial, sans-serif;
      animation: slideInRight 0.5s ease-out;
      max-width: 300px;
    `;
    
    notification.innerHTML = `<div style="font-weight: bold;">${icons[type]} ${message}</div>`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 3000);
  }
  
  // Utility methods for other scripts
  static getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
  }
  
  static isLoggedIn() {
    return !!localStorage.getItem("currentUser");
  }
  
  static requireAuth() {
    if (!AuthGuard.isLoggedIn()) {
      window.location.href = 'index.html?redirect=' + (window.location.pathname.split('/').pop() || 'dashboard.html');
      return false;
    }
    return true;
  }
}

// Add animation styles
if (!document.querySelector('#authGuardStyles')) {
  const style = document.createElement('style');
  style.id = 'authGuardStyles';
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize auth guard
new AuthGuard();