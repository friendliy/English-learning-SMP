// Universal Header Manager
class HeaderManager {
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.init();
  }
  
  init() {
    this.updateHeader();
    
    // Listen for storage changes (user login/logout)
    window.addEventListener('storage', (e) => {
      if (e.key === 'currentUser') {
        this.currentUser = JSON.parse(e.newValue);
        this.updateHeader();
      }
    });
  }
  
  updateHeader() {
    const header = document.querySelector('header');
    if (!header) return;
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    header.innerHTML = `
      <div class="header-content">
        <div class="header-main">
          <h1>📘 English Learning SMP</h1>
          <p>Belajar Bahasa Inggris jadi lebih seru!</p>
        </div>
        <div class="header-nav">
          ${this.currentUser && !this.currentUser.isGuest ? this.renderUserMenu() : this.renderGuestMenu(currentPage)}
        </div>
      </div>
    `;
    
    // Add logout functionality
    const logoutBtn = header.querySelector('#logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.logout();
      });
    }
  }
  
  renderUserMenu() {
    const user = this.currentUser;
    return `
      <div class="user-menu">
        <div class="user-info-mini">
          <div class="user-avatar-mini">${this.getAvatarIcon(user.name)}</div>
          <div>
            <div style="font-size: 14px; font-weight: bold;">${user.name}</div>
            <div style="font-size: 12px; opacity: 0.8;">Skor: ${user.score || 0}</div>
          </div>
        </div>
        <a href="#" id="logoutBtn" class="nav-btn logout">
          <span>🚪</span> Keluar
        </a>
      </div>
    `;
  }
  
  renderGuestMenu(currentPage) {
    // Don't show login/register buttons on login/register pages
    if (currentPage === 'login.html' || currentPage === 'register.html') {
      return `
        <a href="index.html" class="nav-btn">
          <span>🏠</span> Beranda
        </a>
      `;
    }
    
    return `
      <a href="login.html" class="nav-btn login">
        <span>🔑</span> Login
      </a>
      <a href="register.html" class="nav-btn register">
        <span>✨</span> Daftar
      </a>
    `;
  }
  
  getAvatarIcon(name) {
    if (!name) return '👤';
    
    const icons = ['🧑‍🎓', '👨‍🎓', '👩‍🎓', '🎓', '📚', '✨', '🌟', '🚀'];
    const index = name.charCodeAt(0) % icons.length;
    return icons[index];
  }
  
  logout() {
    // Show confirmation
    if (!confirm('Yakin ingin keluar? Progress yang belum tersimpan akan hilang.')) {
      return;
    }
    
    // Clear user session
    localStorage.removeItem("currentUser");
    
    // Show logout notification
    this.showNotification('Berhasil keluar! Sampai jumpa lagi! 👋', 'info');
    
    // Redirect to home after delay
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
      top: 80px;
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
    }, 4000);
  }
}

// Add slide animation
if (!document.querySelector('#headerAnimationStyles')) {
  const style = document.createElement('style');
  style.id = 'headerAnimationStyles';
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

// Initialize header manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new HeaderManager();
});

// Also initialize if script is loaded after DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new HeaderManager();
  });
} else {
  new HeaderManager();
}