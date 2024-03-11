// DEPENDENCIES ======================================
const lightDarkMode = document.querySelector('#light-dark-mode');

// FUNCTIONS
function lightMode() {
  lightDarkMode.classList.add('light');
}
function darkMode() {
  lightDarkMode.classList.add('dark');
}

// USER INTERACTIONS
lightDarkMode.addEventListener('click', lightMode);
lightDarkMode.addEventListener('click', darkMode);
