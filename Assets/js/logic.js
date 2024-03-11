// DEPENDENCIES ======================================
const lightDarkModeEl = document.querySelector('#light-dark-mode');
const body = document.body;
const circle = document.querySelector('.circle');
const header = document.querySelector('#header');
const logo = document.querySelector('#logo');
const blogForms = document.querySelector('#blog-form');
const submits = document.querySelector('#submitBtn');

// FUNCTIONS
function themeMode() {
  const element = event.target;
  if (element.matches('#light-dark-mode')) {
    const state = element.getAttribute('data-theme');

    if (state === 'light') {
      element.setAttribute('data-theme', 'dark');
      element.textContent = '🌑';
      body.style.backgroundColor = '#111';
      circle.style.background = 'linear-gradient(#d10000, #000000)';
      header.style.borderBottom = '10px double #fff';
      logo.style.borderBottom = '10px double #fff';
      logo.style.borderRight = '10px double #fff';
      logo.children[1].style.color = '#000';
      logo.children[2].style.color = '#000';
      logo.children[3].style.color = '#000';
      blogForms.children[0].style.color = '#fff';
      blogForms.children[1].style.color = '#fff';
      submits.children[0].style.backgroundColor = '#fff';
      submits.children[0].style.color = '#000';
    } else {
      element.setAttribute('data-theme', 'light');
      element.textContent = '☀️';
      body.style.backgroundColor = '#fff';
      circle.style.background = 'linear-gradient(#e66465, #9198e5)';
      header.style.borderBottom = '10px double #000';
      logo.style.borderBottom = '10px double #000';
      logo.style.borderRight = '10px double #000';
      logo.children[1].style.color = '#fff';
      logo.children[2].style.color = '#fff';
      logo.children[3].style.color = '#fff';
      blogForms.children[0].style.color = '#000';
      blogForms.children[1].style.color = '#000';
      submits.children[0].style.background = '#000';
      submits.children[0].style.color = '#fff';
    }
  }
}

// USER INTERACTIONS
lightDarkModeEl.addEventListener('click', themeMode);
