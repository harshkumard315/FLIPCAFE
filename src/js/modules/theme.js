// Theme Module

// Initialize theme functionality
export function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('flipkartTheme');
  
  // Apply saved theme if available
  if (savedTheme === 'dark') {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
  
  // Set up theme toggle functionality
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      if (document.body.classList.contains('light-theme')) {
        // Switch to dark theme
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('flipkartTheme', 'dark');
      } else {
        // Switch to light theme
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('flipkartTheme', 'light');
      }
    });
  }
}