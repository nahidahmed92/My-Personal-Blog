// DEPENDENCIES ======================================
const modeBtnEl = document.querySelector('.modeBtn');
const container = document.querySelector('.container');

// DATA ==============================================
let mode = 'light';

// FUNCTIONS =========================================
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
modeBtnEl.addEventListener('click', themeMode);

// INITIALIZATION ====================================
