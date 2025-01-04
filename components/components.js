// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mainMenu = document.querySelector('.main-menu');

mobileMenuToggle.addEventListener('click', () => {
  mainMenu.classList.toggle('open');
});

// Submenu Toggle
document.querySelectorAll('.top-level-entry-container button').forEach(button => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Progress Bar
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scroll / height) * 100;
  document.querySelector('.progress-bar').style.width = `${scrolled}%`;
});

// Dynamic Menu Highlighting
const currentUrl = window.location.href;
document.querySelectorAll('.menu-link').forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});

// User Profile Dropdown
const userProfileButton = document.querySelector('.user-profile-button');
userProfileButton.addEventListener('click', () => {
  const isExpanded = userProfileButton.getAttribute('aria-expanded') === 'true';
  userProfileButton.setAttribute('aria-expanded', !isExpanded);
});
// Enhance accessibility by toggling
document.querySelectorAll('.main-menu button').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
    });
  });

  