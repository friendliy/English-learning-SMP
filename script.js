// Updated scoring system that works with the new leaderboard
function tambahSkor(nilai, quizCompleted = 0, vocabLearned = 0) {
  // Check if user is logged in via the new system
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  if (currentUser) {
    // Use new user progress system
    if (window.updateUserProgress) {
      window.updateUserProgress(nilai, quizCompleted, vocabLearned);
    } else {
      // Fallback: update user profile directly
      const userProfiles = JSON.parse(localStorage.getItem("userProfiles")) || {};
      if (userProfiles[currentUser.name]) {
        userProfiles[currentUser.name].score += nilai;
        userProfiles[currentUser.name].completedQuizzes += quizCompleted;
        userProfiles[currentUser.name].vocabularyMastered += vocabLearned;
        userProfiles[currentUser.name].lastActive = new Date().toISOString().split('T')[0];
        
        localStorage.setItem("userProfiles", JSON.stringify(userProfiles));
        localStorage.setItem("currentUser", JSON.stringify(userProfiles[currentUser.name]));
      }
    }
  } else {
    // Legacy system for backwards compatibility
    let nama = localStorage.getItem("namaSiswa");
    if (!nama) {
      nama = prompt("Masukkan nama kamu:");
      if (!nama) return; // User cancelled
      localStorage.setItem("namaSiswa", nama);
    }
    
    const data = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const existingPlayer = data.find(player => player.nama === nama);
    
    if (existingPlayer) {
      existingPlayer.skor += nilai;
    } else {
      data.push({nama, skor: nilai});
    }
    
    localStorage.setItem("leaderboard", JSON.stringify(data));
  }
}

// Helper function to check if user is logged in
function isUserLoggedIn() {
  return !!localStorage.getItem("currentUser");
}

// Helper function to get current user
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

// Function to prompt login if not logged in
function promptLogin() {
  if (!isUserLoggedIn()) {
    const shouldLogin = confirm("Untuk menyimpan progress, silakan login terlebih dahulu. Buka halaman Leaderboard untuk login?");
    if (shouldLogin) {
      window.location.href = 'leaderboard.html';
      return false;
    }
  }
  return true;
}

// Enhanced scoring functions for different activities
function addQuizScore(score) {
  tambahSkor(score, 1, 0); // Add score, increment quiz count
}

function addVocabularyScore(score, wordsLearned = 1) {
  tambahSkor(score, 0, wordsLearned); // Add score, increment vocabulary
}

function addListeningScore(score) {
  tambahSkor(score, 0, 0); // Add score only
}

// Function to show achievement notification
function showAchievement(title, message) {
  // Create achievement notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #f39c12, #e67e22);
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    z-index: 10000;
    font-family: Arial, sans-serif;
    max-width: 300px;
    animation: slideIn 0.5s ease-out;
  `;
  
  notification.innerHTML = `
    <div style="font-weight: bold; margin-bottom: 5px;">🏆 ${title}</div>
    <div style="font-size: 14px;">${message}</div>
  `;
  
  // Add slide-in animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
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
  
  document.body.appendChild(notification);
  
  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.5s ease-in forwards';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 500);
  }, 4000);
  
  // Add slide-out animation
  style.textContent += `
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
}
