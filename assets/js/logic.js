// DEPENDENCIES ======================================
const modeBtnEl = document.querySelector('.modeBtn');
const container = document.querySelector('.container');

// DATA ==============================================
// preset the mode to light
let mode = 'light';

// FUNCTIONS =========================================
// swap mode class to change from light to dark theme
function themeMode() {
  const element = event.target;

  if (mode === 'light') {
    mode = 'dark';
    element.textContent = '🌑';
    container.setAttribute('class', mode);
  } else {
    mode = 'light';
    element.textContent = '☀️';
    container.setAttribute('class', 'container');
  }
}

// USER INTERACTIONS =================================
// listen for mode button
modeBtnEl.addEventListener('click', themeMode);

// INITIALIZATION ====================================
